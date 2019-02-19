import React, { Component } from 'react';
import CurrentGraph from "../graphs/CurrentGraph";
import {ResponsiveLine} from "@nivo/line";
import NotFound from "../notfound/404";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "x": "1",
                    "y": 12
                },
                {
                    "x": "2",
                    "y": 24
                },
                {
                    "x": "3",
                    "y": 36
                },
                {
                    "x": "4",
                    "y": 50
                },
                {
                    "x": "5",
                    "y": 67
                }
            ]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.setState({
            consumptions: [],
        });
        this.loadConsumptions()
    }

    loadConsumptions() {
        let thisComp = this;
        const options = {
            method: "get",
            headers: {
                "Authorization": "Token " + localStorage.getItem('token')
            }
        };
        console.log(options)
        fetch("http://127.0.0.1:8000/api/consumptions/", options)
            .then((response) => response.json())
            .then(consumptions => {
            console.log(consumptions);
            let data= consumptions.results.map((item, index)=>{return(
                      {
                          "x": item["time_stamp"],
                          "y": item["units"]
                      });
            });
            thisComp.setState({
                consumptions: data
            })
        })
    }
    handleClick(e) {
        e.preventDefault()
        let {data} = this.state
        data.push({
            "x": "6",
            "y": 40
        })
        data.push({
            "x": "7",
            "y": 43
        })
        this.setState(
            {
                data: data
            }
        )
    }
    render() {

        return (
            <div >
                <section className="content-header">
                    <h1>
                        Current Usage of Electricity
                    </h1>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box box-primary">
                                <CurrentGraph data={this.state.consumptions}/>
                             </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
