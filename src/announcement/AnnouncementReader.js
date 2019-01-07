import React, { Component } from 'react';
import AnnouncementRow from "./AnnouncementRow";

class AnnouncementReader extends Component {
    state = {
        single: false,
        announcements: [],
        current: -1
    }
    constructor(props){
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }
    componentDidMount(){
        this.setState({
            announcement: []
        })
        this.loadAnnouncements()
    }

    loadAnnouncements(){
        let thisComp = this
        const options = {
            method: "get",
            headers: {
                "Authorization": "Token " + sessionStorage.getItem('token')
            }
        }
        console.log(options)
        fetch("http://127.0.0.1:8000/api/announcements/", options)
            .then((response) => {
                debugger
               return response.json()
            }).then((announcements) => {
            console.log(announcements)
            thisComp.setState({
                announcements: announcements.results
             })
        })
    }
    clickHandler(announcementIndex){
        debugger
        this.setState({
            single: true,
            current: announcementIndex
        })
    }

    render() {
        let {announcements} = this.state
        return (
            <div>
                <section className="content">

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <div className="box-header">
                                    <h3 className="box-title">Announcements</h3>

                                    {/*<div className="box-tools">*/}
                                        {/*<div className="input-group input-group-sm" style="width: 150px;">*/}
                                            {/*<input type="text" name="table_search" className="form-control pull-right"*/}
                                                   {/*placeholder="Search">*/}

                                                {/*<div className="input-group-btn">*/}
                                                    {/*<button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>*/}
                                                {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="box-body table-responsive no-padding">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th>ID</th>
                                                <th>Subject</th>
                                                <th>Detail</th>
                                                <th>Area</th>
                                                <th>Effective From</th>
                                                <th>Effective Till</th>
                                            </tr>
                                            {announcements.length > 0 ? announcements.map((announcements, index)=>{
                                                return (<AnnouncementRow click={this.clickHandler} index={index+1} announcements={announcements}/>);
                                            }):null}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default AnnouncementReader;



