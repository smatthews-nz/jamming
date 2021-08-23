import { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchResults: [
        {
          name: 'Test One',
          artist: 'Test Artist',
          album: 'Test Album',
          id: 1
        },
        {
          name: 'Test Two',
          artist: 'Test ArtistTwo',
          album: 'Test AlbumTwo',
          id: 2
        },
        {
          name: 'Test Three',
          artist: 'Test ArtistThree',
          album: 'Test AlbumThree',
          id: 3
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <PlayList />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
