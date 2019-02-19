import React, { Component } from 'react';
import CurrentGraph from "../graphs/CurrentGraph";


class Home extends Component {
    state = {
        consumptions: [],
    };

    componentDidMount() {
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
