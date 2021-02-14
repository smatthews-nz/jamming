import React from "react";
import './SearchBar.css';

export class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  //uses props to call the search method in the app component
  search(){
    this.props.onSearch(this.state.term);
  }

  //handles the actual input logic for the search
  handleTermChange(e){
    this.setState({
      term: e.target.value
    })
  }


  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}
