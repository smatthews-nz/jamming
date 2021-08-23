import { Component } from 'react';

import TrackList from '../TrackList/TrackList';

import './SearchResults.css';

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList searchResults={this.props.searchResults}/>
            </div>
        )
    }
}

export default SearchResults;