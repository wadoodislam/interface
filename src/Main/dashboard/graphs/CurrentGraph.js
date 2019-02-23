import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line'
import {getRequest} from "../../utils/Network";
import Constants from "../../utils/Constants";


class CurrentGraph extends Component {
    state = { consumptions: [] };

    handleData = (data) => {
        this.setState({
            consumptions: data.results.map((item)=>{
                return({
                    "x": item["time_stamp"],
                    "y": item["units"]
                });
            })
        })
    };

    componentDidMount() {
        getRequest(Constants.consumptionUrl, true)
            .then(this.handleData)
    };

    render() {
        return (
            <div className="box-body" style={{height: "900px"}}>
                <ResponsiveLine
                    data={[{
                        "id": "1",
                        "color": "hsl(79,70%,50%)",
                        "data": this.state.consumptions
                    }]}

                    margin={{
                        "top": 50,
                        "right": 110,
                        "bottom": 50,
                        "left": 100,
                    }}
                    xScale={{"type": "point"}}
                    yScale={{
                        "type": "linear",
                        "stacked": true,
                        "min": "auto",
                        "max": "auto"
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        "orient": "bottom",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "hours",
                        "legendOffset": 36,
                        "legendPosition": "middle"
                    }}
                    axisLeft={{
                        "orient": "left",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "consumption",
                        "legendOffset": -40,
                        "legendPosition": "middle"
                    }}
                    dotSize={10}
                    dotColor="inherit:darker(0.3)"
                    dotBorderWidth={2}
                    dotBorderColor="#ffffff"
                    enableDotLabel={true}
                    dotLabel="y"
                    dotLabelYOffset={-12}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={[
                        {
                            "anchor": "bottom-right",
                            "direction": "column",
                            "justify": false,
                            "translateX": 100,
                            "translateY": 0,
                            "itemsSpacing": 0,
                            "itemDirection": "left-to-right",
                            "itemWidth": 80,
                            "itemHeight": 20,
                            "itemOpacity": 0.75,
                            "symbolSize": 12,
                            "symbolShape": "circle",
                            "symbolBorderColor": "rgba(0, 0, 0, .5)",
                            "effects": [
                                {
                                    "on": "hover",
                                    "style": {
                                        "itemBackground": "rgba(0, 0, 0, .03)",
                                        "itemOpacity": 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        );
    }
}


export default CurrentGraph;