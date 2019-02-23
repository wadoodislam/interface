import React, { Component } from 'react';
import CurrentGraph from "../graphs/CurrentGraph";


class Home extends Component {

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
                                <CurrentGraph />
                             </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;