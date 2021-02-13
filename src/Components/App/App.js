import './App.css'
import React from 'react'

import {SearchBar} from '../SearchBar/SearchBar'
import {SearchResults} from '../SearchResults/SearchResults'
import {Playlist} from '../Playlist/Playlist'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchResults: [
          { id: 0,
            name: 'test 1 - search',
            artist: 'test 1',
            album: 'test 1'
          },
          { id: 1,
            name: 'test 2 - search',
            artist: 'test 2',
            album: 'test 2'
          },
          { id: 2,
            name: 'test 3 - search',
            artist: 'test 3',
            album: 'test 3'
          }
      ],
      playlistName: 'Test Playlist',
      playlistTracks: [
        { id: 0,
          name: 'test 1 - playlist',
          artist: 'test 1',
          album: 'test 1'
        },
        { id: 1,
          name: 'test 2 - playlist',
          artist: 'test 2',
          album: 'test 2'
        },
        { id: 2,
          name: 'test 3 - playlist',
          artist: 'test 3',
          album: 'test 3'
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  //this method adds a track to a playlist
  addTrack(track){
    //pull the current state and set to a var
    let tracks = [...this.state.playlistTracks]
    //check if the current state includes the track
    if(tracks.includes(track)){
      return;
    } else {
      tracks.push(track)
    }
    //update state
    this.setState({playlistTracks: tracks})
  }
  //this method removes a track from a playlist
  removeTrack(selectedTrack){
    let tracks = [...this.state.playlistTracks]
    //pull the current state of tracks and filter out the seleted track
    let updatedTracks = tracks.filter(track => track.id !== selectedTrack.id)
    //update the state
    this.setState({playlistTracks: updatedTracks})
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
        <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
        </div>
        </div>
      </div>
    );
  }

}

export default App;
