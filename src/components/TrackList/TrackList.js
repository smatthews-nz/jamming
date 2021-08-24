import { Component } from 'react';

import Track from '../Track/Track';

import './TrackList.css';

class TrackList extends Component {

    render() {
        let searchTracks;
        let playlistTracks;

        if(this.props.searchResults){
            searchTracks = this.props.searchResults.map( track => {
                return (
                    <Track 
                        name={track.name}
                        artist={track.artist}
                        album={track.album}
                        key={track.id}
                        onAdd={this.props.onAdd}
                    />
                )
            }) 
        } else if(this.props.playlistTracks){
            playlistTracks = this.props.playlistTracks.map( track => {
                return (
                    <Track 
                        name={track.name}
                        artist={track.artist}
                        album={track.album}
                        key={track.id}
                        onRemove={this.props.onRemove}
                        isRemoval={this.props.isRemoval}
                    />
                )
            }) 
        } else {
            return
        }

        return (
            <div className="TrackList">
                {searchTracks}
                {playlistTracks}
            </div>
        )
    }
}

export default TrackList;