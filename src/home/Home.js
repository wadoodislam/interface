import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
                <div >
                    <section className="content-header">
                        <h1>
                            Current Usage of Electricity
                            <small>preview sample</small>
                        </h1>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <i className="fa fa-bar-chart-o"></i>
                                        <h3 className="box-title">Interactive Area Chart</h3>
                                        <div className="box-tools pull-right">
                                            Real time
                                            <div className="btn-group" id="realtime" data-toggle="btn-toggle">
                                                <button type="button" className="btn btn-default btn-xs active"
                                                        data-toggle="on">On
                                                </button>
                                                <button type="button" className="btn btn-default btn-xs"
                                                        data-toggle="off">Off
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div id="interactive" style={{height: "300px"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        );
    }
}
export default Home;
