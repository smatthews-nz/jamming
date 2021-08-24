import { Component } from 'react';

import './Track.css';

class Track extends Component {

    constructor(props){
        super(props);

        this.addTrack = this.addTrack.bind(this);
    }

    addTrack(){
        this.props.onAdd(this.props)
    }



    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.artist} | {this.props.album}</p>
                </div>
                <button className="Track-action" onClick={this.addTrack}>+</button>
            </div>
        )
    }
}

export default Track;