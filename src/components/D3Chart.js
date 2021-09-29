import React, { useEffect, useState } from 'react';
import * as d3 from 'd3'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// https://www.youtube.com/watch?v=zXBdNDnqV2Q

const D3Chart = (props) => {
    // destructure props
    const { data } = props // don't want to see props other places. 
    const { trackAttribute } = props
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
    let chartHeight = data?.length * (barHeight + 5) ?? 0 
    const chartWidth = 800

    //use effects

        //update stats
    useEffect(() => {

        if (data !== null){
            setPlaylistStats({
                'max': Math.abs(Math.max.apply(Math, data?.map(function (o) { return o[trackAttribute] }))),
                'min': Math.abs(Math.min.apply(Math, data?.map(function (o) { return o[trackAttribute] }))),
                'avg': data?.reduce((p, c) => p + c[trackAttribute], 0) / data.length
            })
        }
    }, [data, trackAttribute])

    useEffect(() => {
        if (typeof (sortedData) !== 'undefined') {
            let yScale = d3.scaleBand().domain(d3.range(data?.length)).range([0, chartHeight]).padding(.05)
            let xScale = d3.scaleLinear().domain([0, playlistStats.max]).range([0, 100])

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
    }, [data, chartHeight, trackAttribute, playlistStats, orderMethod, sortedData])
    
        // a method to sort the playlist
    useEffect(() => {
        if (data !== null){
            switch (orderMethod) {
                case 'Ascending':
                    setSortedData(data.sort((a, b) => {
                        return b[trackAttribute] - a[trackAttribute]
                    }))
                    break
                case 'Descending':
                   setSortedData( data.sort((a, b) => {
                        return a[trackAttribute] - b[trackAttribute]
                    }))
                    break
                case 'Peak':
                    let tempDesc = data.sort((a, b) => {
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


            }
        }
    }, [orderMethod, trackAttribute, data])

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

        <div className = 'playlist-stats'>
            {bars &&
                <h2>Min {trackAttribute}: {playlistStats.min} Max {trackAttribute}: {playlistStats.max}, Average {trackAttribute}: {playlistStats.avg}</h2>
            }
        </div>

        <div id = 'chart'>
           
            {/* Add a TERNARY ??, React Fragments sort of like an invisible bundler div */}

            <svg id='songChart' height={chartHeight ? chartHeight : 0} width={chartWidth}>
                {bars &&
                    bars?.map(bars => {
                        return <g key={bars.y}>
                            <text x={bars.x + 110} y={bars.y + (barHeight / 2)} style={{ fill: '#094067' }}>{bars?.trackName} </text>
                            <rect x={bars.x} y={bars.y} width={bars.width} height={bars.height} style={{ fill:'#3da9fc', rx: '4px'}}></rect>
                            
                        </g>
                    })
                
                }
                {bars &&
                    <g>
                    <line x1={Math.max.apply(Math, bars.map(function (o) { return o.width + 50 }))} y1={0} x2={Math.max.apply(Math, bars.map(function (o) { return o.width+50 }))} y2={chartHeight} stroke='black' strokeWidth=".3" />
                    <line x1={50} y1={0} x2={50} y2={chartHeight} stroke='black' strokeWidth=".3"/>
                    </g>
                }
                
            </svg>
           
        </div>
         </>
    )

}







export default D3Chart