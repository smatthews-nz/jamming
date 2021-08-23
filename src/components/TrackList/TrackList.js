import { Component } from 'react';

import Track from '../Track/Track';

import './TrackList.css';

class TrackList extends Component {

    renderTracks(){
        this.props.searchResults.map( track => {
            console.log(track)
           return <Track />
    })
 }


    render() {
        return (
            <div className="TrackList">
                {this.renderTracks()}
            </div>
        )
    }
}

export default TrackList;