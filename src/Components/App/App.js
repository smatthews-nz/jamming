import './App.css'
import React from 'react'

import {SearchBar} from '../SearchBar/SearchBar'
import {SearchResults} from '../SearchResults/SearchResults'
import {Playlist} from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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
  //this method updates a playlist name
  updatePlaylistName(name){
    this.setState({playlistName: name})
  }

  search(term){
    console.log(term)
    Spotify.search(term).then(searchResult => {
      this.setState({searchResults: searchResult})
    })

    console.log(Spotify.search(term))
  }

  //this method saves the playlist to Spotify
  savePlaylist(){
    //grab the current state
    let trackURIs = [...this.state.playlistTracks]
    //return this as an array of uris
    Spotify.savePlaylist(this.state.playlistName, trackURIs)
    .then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })

  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar onSearch={this.search}/>
      <div className="App-playlist">
        <SearchResults 
        searchResults={this.state.searchResults} 
        onAdd={this.addTrack}/>
        <Playlist 
        name={this.state.playlistName} 
        tracks={this.state.playlistTracks} 
        onRemove={this.removeTrack}
        onNameChange={this.updatePlaylistName}
        onSave={this.savePlaylist}
        />
        </div>
        </div>
      </div>
    );
  }

}

export default App;
