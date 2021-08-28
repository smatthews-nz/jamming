import { Component } from 'react';

import TrackList from '../TrackList/TrackList';

import './PlayList.css';

class PlayList extends Component {
    render() {

        console.log(this.props.playlistTracks)
        return (
            <div className="Playlist">
                <input value="New Playlist" />
                <TrackList 
                    playlistTracks={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                />
                <button 
                className="Playlist-save"
                onClick={this.props.onSave}
                >SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default PlayList;