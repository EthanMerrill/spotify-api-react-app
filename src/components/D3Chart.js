import React, { useEffect, useState } from 'react';
import * as d3 from 'd3'

// https://www.youtube.com/watch?v=zXBdNDnqV2Q

const D3Chart = (props) => {
    // destructure props
    const { data } = props // don't want to see props other places. 

    // State Variables
    const [bars, setBars] = useState(null)
    //constant vars
    const barHeight = 30
    let chartHeight = data?.data?.items.length * (barHeight + 5) ?? 0 
    const chartWidth = 800

    //use effects
    useEffect(() => {
        let yScale = d3.scaleBand().domain(d3.range(data?.data?.items.length)).range([0, chartHeight]).padding(.05)
        var chartData = data?.data?.items?.map(d => {
            return {
                trackName: d?.track?.name,
                x: 50,
                y: yScale(data?.data?.items?.indexOf(d)),
                width: d?.track?.popularity,
                height: barHeight,
            }
        })
        setBars(chartData)
        
    }, [data, chartHeight])
    

    return (
        <div id = 'chart'>
            <> {/*this iS A FRAGMENT}
            {/* Add a TERNARY ??, React Fragments sort of like an invisible bundler div */}
            {bars &&
                <h2>Max Popularity: {Math.max.apply(Math, bars.map(function (o) { return o.width + 50 }))}, Average Popularity: {Math.round(Math.max.apply(Math, bars.map(function (o) { return o.width + 50 }))/bars.length,1)}</h2>
            }

            <svg id='songChart' height={chartHeight ? chartHeight : 0} width={chartWidth}>
                {bars &&
                    bars?.map(bars => {
                        return <g key={bars.y}>
                            <text x={bars.x + 100} y={bars.y + (barHeight / 2)} style={{ fill: '#094067' }}>{bars?.trackName} </text>
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
            </>
        </div>
    )

}







export default D3Chart