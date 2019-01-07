import React, { Component } from 'react';

class AnnouncementRow extends Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)

    }
    onClick(e){
        e.preventDefault()
        this.props.click(this.props.index)
    }
    render() {
        const {announcement} = this.props
        const {index} = this.props
        const {click} = this.props
        return (
            announcement !== undefined ?
            <tr>
                <td>{index}</td>
                <td><a onClick={this.onClick}>{announcement.subject}</a></td>
                <td>{announcement.detail}</td>
                <td><span className="label label-success">{announcement.areas}</span></td>
                <td>{announcement.effective_from}</td>
                <td>{announcement.effective_till}</td>
            </tr>
            :null);
    }
}
export default AnnouncementRow;
