import React, { useEffect, useState } from 'react';
import * as d3 from 'd3'

// https://www.youtube.com/watch?v=zXBdNDnqV2Q

const D3Chart = (props) => {
    // const chartData = []
    const [bars, setBars] = useState(null)
    const barHeight = 30
    const chartHeight = props?.data?.data?.items.length*(barHeight+5)
    const chartWidth = 800

    let yScale = d3.scaleBand().domain(d3.range(props?.data?.data?.items.length)).range([0, chartHeight]).padding(.05)

    //load the svg data into a list of objects
    var chartData = props?.data?.data?.items?.map(d => {
        console.log(props?.data?.data?.items?.indexOf(d))
        return {
            trackName: d?.track?.name,
            x: 50,
            y: yScale(props?.data?.data?.items?.indexOf(d)),
            width: d?.track?.popularity,
            height: barHeight,
        }
    })
    console.log(bars)

    useEffect(() => {
        


        setBars(chartData)
    }, [props])
    


    // let xScale = d3.scaleLinear().domain([0, Math.max(chartData.popularity)]).range([0, chartWidth])
    
    // setBars(props?.data?.data?.items?.map(d => {
    //     return {
    //         x: 50,
    //         y: 30,
    //         width: d.popularity,
    //         height: 50,
    //     }
    // }))


    // const svg = d3.select("#songChart")
    //     .attr('height', chartHeight)
    //     .attr('width', chartWidth)

    // const g = svg.append("g")
    // .attr("transform", `translate(${10},${10})`);
    // console.log(chartData)
    // Values 


    // // draw bars
    // g.selectAll("rect")
    //     .data(chartData)
    //     .join("rect")
    //     .attr("y", d => { return yScale(chartData.indexOf(d))
    //         // console.log(yScale(chartData.indexOf(d)))
    //     })
    //     .attr('x', 50)
    //     .attr("width", d =>(d.popularity))
    //     .attr("height", 50)


    // set the state of the bars hook




        // .style("fill", d => d3.color(color).darker(colorScale(x(d))));
    // g.selectAll("text.values")
    //     .data(chartData)
    //     .join("text")
    //     .attr("class", "values")
        // .attr("x", d => xScale((d.popularity)))
    //     .attr("y", d => yScale(y(d)) + yScale.bandwidth() / 2)
    //     .text(d => x(d))
    //     .attr("text-anchor", "middle")
    //     .attr("alignment-baseline", "middle")
    //     .style("fill", "white")
    //     .style("font-size", ".75em")
    //     .style("font-family", "Arial, sans-serif");


    // // axes
    // const yAxis = g.append("g").call(d3.axisLeft(yScale).tickSize(0))
    //     .attr("transform", `translate(${0},${0})`)
    //     .select(".domain").remove();

    // const xAxis = g.append("g").call(d3.axisBottom(xScale))
    //     .attr("transform", `translate(${0},${chartHeight})`);

    // xAxis.append("text").text("Cost of Living Index")
    //     .attr("fill", "black")
    //     .attr("y", 35)
    //     .attr("x", chartWidth / 2)
    //     .attr("text-anchor", "middle")
    //     .style("font-size", "1.3em");

    return (
        <div id = 'chart'>
            <svg id='songChart' height={chartHeight} width={chartWidth}>
                {bars &&
                    bars?.map(bars => {
                        return <g>
                        <text x={bars.x+200} y={bars.y+(barHeight/2)}>{bars?.trackName}</text>
                            <rect x={bars.x} y={bars.y} width={bars.width} height={bars.height} style={{ fill:'#e53170'}}></rect>
                        </g>
                    })
                
                }
            </svg>
        </div>
    )

}







export default D3Chart