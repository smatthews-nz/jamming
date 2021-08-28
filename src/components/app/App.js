import { Component } from 'react';
import Spotify from '../../util/Spotify';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchResults: [],
      playlistName: "",
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    //check state to see if id exists in playlist already
    if(this.state.playlistTracks.find(savedSong => savedSong.id === track.id)){
      return;
    }
    //get tracks from state
    let currentTracks = this.state.playlistTracks;
    //add tracks to our current saved tracks and push back to state
    currentTracks.push(track);
    this.setState({currentTracks})
  }

  removeTrack(track){
    //get current tracks from state and filter to return an array with our track removed
    let updatedTracks = this.state.playlistTracks.filter( currentTrack => currentTrack.id !== track.id )
    //add the filtered array back as our updated state
    this.setState({playlistTracks: updatedTracks})
  }

  savePlaylist(){
    //generate track uris
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  search(term){
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}
            />
            <PlayList 
              name={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    )
  }

  
}

export default App;
