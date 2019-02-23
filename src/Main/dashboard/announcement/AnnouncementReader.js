import React, { Component } from 'react';
import AnnouncementRow from "./AnnouncementRow";
import NotFound from "../../notfound/404";
import Constants from "../../utils/Constants";
import { getRequest } from "../../utils/Network"


class AnnouncementReader extends Component {
    state = { announcements:[] };

    handleData = (announcements) => {
        this.setState({
            announcements: announcements.results
        })
    };

    componentDidMount(){
        getRequest(Constants.announcementUrl, true)
            .then(this.handleData)
    }

    render() {
        let {announcements} = this.state;
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
    let {announcement} = props;
    return (
        <div>
            <section className="content-header">
                <h1>
                    Announcement Details
                </h1>
            </section>
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                              <h2 className="box-title">Subject: {announcement.subject}</h2>
                            </div>
                            <div className="box-body no-padding">
                                <div className="mailbox-read-info">
                                    <h5>
                                        <span className="mailbox-read-time">Effective From: {announcement.effective_from}</span>
                                        <span className="mailbox-read-time pull-right">Effective Till: {announcement.effective_till}</span>
                                    </h5>
                                </div>
                                <div className="mailbox-read-message">
                                    <h4>Details</h4><p>{announcement.detail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
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