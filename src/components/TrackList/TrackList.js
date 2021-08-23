import { Component } from 'react';

import Track from '../Track/Track';

import './TrackList.css';

class TrackList extends Component {

    render() {

        // const searchTracks = this.props.searchResults.map( track => {
        //     return (
        //         <Track 
        //             name={track.name}
        //             artist={track.artist}
        //             album={track.album}
        //             key={track.id}
        //         />
        //     )
        // })

        return (
            <div className="TrackList">
                {/* {searchTracks} */}
            </div>
        )
    }
}

export default TrackList;