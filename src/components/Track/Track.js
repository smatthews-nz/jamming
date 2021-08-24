import { Component } from 'react';

import './Track.css';

class Track extends Component {

    constructor(props){
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.renderTrackActions = this.renderTrackActions.bind(this);
    }

    addTrack(){
        this.props.onAdd(this.props)
    }

    removeTrack(){
        this.props.onRemove(this.props)
    }

    renderTrackActions(){
        if(!this.props.isRemoval){
            return <button className="Track-action" onClick={this.addTrack}>+</button>
        } else {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.artist} | {this.props.album}</p>
                </div>
                {this.renderTrackActions()}
            </div>
        )
    }
}

export default Track;