import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";

class AnnouncementRow extends Component {
    render() {
        const {announcement} = this.props;
        const {index} = this.props;
        return (
            announcement !== undefined ?
            <tr>
                <td>{index}</td>
                <td><Link to={`announcements/${index}`}>{announcement.subject}</Link></td>
                <td>{announcement.detail}</td>
                <td>{announcement.effective_from}</td>
                <td>{announcement.effective_till}</td>
                <td>{announcement.area.map((item)=>item)}</td>
            </tr>
            :null
        );
    }
}
export default AnnouncementRow;
