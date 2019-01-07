import React, { Component } from 'react';
import AnnouncementRow from "./AnnouncementRow";
import NotFound from "../notfound/404";

class AnnouncementReader extends Component {
    state = {
        announcements: [],
    }
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.setState({
            announcements: []
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
        };
        console.log(options);
        fetch("http://127.0.0.1:8000/api/announcements/", options)
            .then((response) => response.json()).then((announcements) => {
            console.log(announcements);
            thisComp.setState({
                announcements: announcements.results
             })
        })
    }
    render() {
        let {announcements} = this.state
        let {announcementId} = this.props.match.params;

        if (announcementId) {
            announcementId = parseInt(announcementId);
            if (!isNaN(announcementId) && announcements.length >= announcementId && announcementId > 0) {
                return <AnnouncementPage announcement={announcements[announcementId-1]}/>;
            }
            return <NotFound internal={true} />;
        }
        return <AnnouncementTable announcements={announcements} />
    }
}

function AnnouncementPage(props){
    return "";
}

function AnnouncementTable(props) {
    let {announcements} = props;
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
                                                <th>Effective From</th>
                                                <th>Effective Till</th>
                                                <th>Areas</th>
                                            </tr>
                                            {announcements.length > 0 ? announcements.map((announcement, index)=>{
                                                return (<AnnouncementRow key={announcements.id} index={index+1} announcement={announcement}/>);
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


export default AnnouncementReader;



