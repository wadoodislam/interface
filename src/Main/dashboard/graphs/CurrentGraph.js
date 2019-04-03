import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line'
import {getRequest} from "../../utils/Network";
import Constants from "../../utils/Constants";


class CurrentGraph extends Component {
    state = {
        past_consumptions: {},
        future_consumptions: {},
        span: "hours",
        selected_date: null
    };

    data_sum = (results) => {
        let dictionary = {};
        let load, month, day, hour, dt, date;

        for (let i = 0; i < results.length; i++) {
            load = results[i]["units"] / 100;
            dt = new Date(results[i].time_stamp);
            month = dt.getUTCMonth();
            day = dt.getUTCDate().toString();
            hour = dt.getUTCHours().toString();
            date = day + "/" + Constants.monthNames[month-1];
            if (dictionary[date] === undefined) {
                dictionary[date] = {
                    "x": date,
                    "y": 0,
                }
            }
            dictionary[date]["y"] += load;
            if (dictionary[date]["hours"] === undefined) {
                dictionary[date]["hours"] = []
            }
            dictionary[date]["hours"].push({
                "x": hour,
                "y": load
            })
        }
        return dictionary
    };


    get_span(consumptions) {
        if (this.state.span === "hours") {
            if (this.state.selected_date !== null) {
                return consumptions[this.state.selected_date]["hours"]
            }
        }
        return []
    };

    handleData = (data) => {
        let past_data = data.results.filter((x)=>{return x.id!==0});
        let dt = new Date(past_data[past_data.length-1].time_stamp);
        let month = dt.getUTCMonth();
        let day = dt.getUTCDate().toString();
        this.setState({
            past_consumptions: this.data_sum(past_data),
            future_consumptions:  this.data_sum(data.results),
            selected_date: day + "/" + Constants.monthNames[month-1]
        });
    };

    componentDidMount() {
        getRequest(Constants.predictionUrl, true)
            .then(this.handleData)
    };

    render() {
        let { past_consumptions } = this.state;
        let { future_consumptions } = this.state;
        let past_graph_data = this.get_span(past_consumptions);
        let future_graph_data = this.get_span(future_consumptions);
        return (
            <div className="box-body" style={{height: "900px"}}>
                <ResponsiveLine
                    data={[{
                        "id": "predicted",
                        "color": "hsl(79,70%,50%)",
                        "data": future_graph_data
                    },
                    {
                        "id": "used",
                        "color": "hsl(79,70%,50%)",
                        "data": past_graph_data
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
                        "legend": this.state.span,
                        "legendOffset": 36,
                        "legendPosition": "middle"
                    }}
                    axisLeft={{
                        "orient": "left",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "consumption (kwh)",
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