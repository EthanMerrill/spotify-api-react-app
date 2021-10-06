import React, { useEffect, useState } from 'react';
import * as d3 from 'd3'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// https://www.youtube.com/watch?v=zXBdNDnqV2Q

const D3Chart = (props) => {
    // destructure props
    const { data } = props // don't want to see props other places. 
    const { trackAttribute } = props
    const {setSongIdOrder} = props
    // State Variables
    const [sortedData, setSortedData] = useState(null)
    const [bars, setBars] = useState(null)
    const [orderMethod, setOrderMethod] = useState('None')
    const [playlistStats, setPlaylistStats] = useState({
        'max': 0,
        'min': 0,
        'avg': 0
        })
    //constant vars
    const barHeight = 30
    const chartWidth = 800
    const chartOffset = 40
    let chartHeight = data ? (data?.length * (barHeight + 5)) + (chartOffset) : 0 

    //use effects

        //update stats
    useEffect(() => {

        if (data !== null){
            setPlaylistStats({
                'max': (Math.max.apply(Math, data?.map(function (o) { return o[trackAttribute] }))),
                'min': (Math.min.apply(Math, data?.map(function (o) { return o[trackAttribute] }))),
                'avg': data?.reduce((p, c) => p + c[trackAttribute], 0) / data?.length
            })
        }
    }, [data, trackAttribute])
    
        // a method to sort the playlist
    useEffect(() => {
        if (data !== null){
            switch (orderMethod) {
                case 'Ascending':
                    setSortedData([...data].sort((a, b) => {
                        return b[trackAttribute] - a[trackAttribute]
                    }))
                    break
                case 'Descending':
                   setSortedData([...data].sort((a, b) => {
                        return a[trackAttribute] - b[trackAttribute]
                    }))
                    break
                case 'Peak':
                    let tempDesc = [...data].sort((a, b) => {
                        return b[trackAttribute] - a[trackAttribute]
                    })

                    let everyOther = tempDesc.filter((element, index) => {
                        return index % 2 === 0;
                    })
                    let OddsOther = tempDesc.filter((element, index) => {
                        return index % 2 !== 0;
                    })

                    let dataFirstHalf = everyOther.sort((a, b) => {
                        return a[trackAttribute] - b[trackAttribute]
                    })
                    let dataSecondHalf = OddsOther.sort((a, b) => {
                        return b[trackAttribute] - a[trackAttribute]
                    })
                    setSortedData(dataFirstHalf.concat(dataSecondHalf))
                    break
                case 'None':
                    setSortedData(data)
                    break
                default:
                    setSortedData(data)
                    break

            }
        } else {
            setBars(null)
        }
    }, [orderMethod, trackAttribute, data])

    useEffect(() => {
        if (typeof (sortedData) !== 'undefined') {
            let yScale = d3.scaleBand().domain(d3.range(data?.length)).range([0, chartHeight-chartOffset]).padding(.05)
            let xScale = d3.scaleLinear().domain([0, playlistStats.max]).range([0, 100])
            
            setSongIdOrder(sortedData?.map(d => {
                return `spotify:track:${d.id}`
            }))

            let chartData = sortedData?.map(d => {

                return {
                    trackName: d?.name,
                    x: 50,
                    y: yScale(sortedData?.indexOf(d)),
                    width: xScale(d[trackAttribute]),
                    height: barHeight,
                }
            
            })
            setBars(chartData)
        }
    }, [data, chartHeight, trackAttribute, playlistStats, orderMethod, sortedData, setSongIdOrder])

    const handleChange = (event, newAlignment) => {
        setOrderMethod(newAlignment);
    };

    return (
        <> {/*this iS A FRAGMENT*/}
        <div className = 'sort-controls'>
                <ToggleButtonGroup
                    color="primary"
                    value={orderMethod}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="None">None</ToggleButton>
                    <ToggleButton value="Ascending">Ascending</ToggleButton>
                    <ToggleButton value="Descending">Descending</ToggleButton>
                    <ToggleButton value="Peak">Peak</ToggleButton>

                </ToggleButtonGroup>
        </div>

        <div className = 'playlist-stats card'>
            {data &&
            <>
                <h3>Min {trackAttribute}: {playlistStats.min.toFixed(2)}</h3>
                <h3>Max {trackAttribute}: {playlistStats.max.toFixed(2)}</h3>
                <h3>Average {trackAttribute}: {playlistStats.avg.toFixed(2)}</h3>
            </>
            }
        </div>

        <div id = 'chart'>
           
            {/* Add a TERNARY ??, React Fragments sort of like an invisible bundler div */}
            <svg id='songChart' height={chartHeight} width={chartWidth}>
                <text x={50} y={15} style={{fill: '#FFFFFF'}}>{trackAttribute}</text>
                <text x={ bars ? Math.max.apply(Math, bars.map(function (o) { return o.width + 50 }))+8 : 20} y={15} style={{ fill: '#FFFFFF' }}>Songs</text>
                <line x1={0} x2={chartWidth} y1={chartOffset-15} y2={chartOffset-15} stroke='white' strokeWidth='.1' />
                

                {data && bars &&
                    bars?.map(bars => {
                        return <g key={bars.y}>
                            <text x={bars.x + 110} y={bars.y + (barHeight/1.5)+chartOffset} style={{ fill: '#FFFFFF' }}>{bars?.trackName} </text>
                            <rect x={bars.x} y={bars.y + chartOffset} width={bars.width} height={bars.height} style={{ fill:'#1DB954', rx: '4px'}}></rect>
                            
                        </g>
                    })
                
                }
                {data && bars &&
                    <g>

                    <line x1={Math.max.apply(Math, bars.map(function (o) { return o.width + 50 }))} y1={chartOffset} x2={Math.max.apply(Math, bars.map(function (o) { return o.width+50 }))} y2={chartHeight} stroke='white' strokeWidth=".3" />
                    <line x1={50} y1={chartOffset} x2={50} y2={chartHeight} stroke='white' strokeWidth=".3"/>

                    {/* Max Lines */}
                    {/* <line x1={Math.max.apply(Math, bars.map(function (o) { return o.width + 50 }))} x2={300} y1={chartOffset} y2={30} stroke='white' strokeWidth='.3'/> */}
                    {/* Avg Line */}
                    {/* <line x1={} x2={} y1={} y2={} stroke='white' strokeWidth='.3'/> */}

                    {/* Min Ln */}
                        {/* <line x1={Math.min.apply(Math, bars.map(function (o) { return o.width + 50 }))} x2={200} y1={chartOffset} y2={30} stroke='white' strokeWidth='.3'/> */}
                    {/* <line x1={} x2={} y1={} y2={} stroke='white' strokeWidth='.3'/> */}
                    </g>
                }
                
            </svg>
           
        </div>
         </>
    )

}







export default D3Chart