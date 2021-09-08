import React, { Component } from 'react'
import PlaceService from '../../services/PlaceService';

class UpdatePlaceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            country: '',
            comment: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeCommentHandler = this.changeCommentHandler.bind(this);
        this.updatePlace = this.updatePlace.bind(this);
    }

    componentDidMount(){
        PlaceService.getPlaceById(this.state.id).then( (res) =>{
            let place = res.data;
            this.setState({name: place.name,
                country: place.country,
                comment : place.comment
            });
        });
    }

    updatePlace = (e) => {
        e.preventDefault();
        let place = {name: this.state.name, country: this.state.country, comment: this.state.comment};
        console.log('place => ' + JSON.stringify(place));
        console.log('id => ' + JSON.stringify(this.state.id));
        PlaceService.updatePlace(place, this.state.id).then( res => {
            this.props.history.push('/places');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeCountryHandler= (event) => {
        this.setState({country: event.target.value});
    }

    changeCommentHandler= (event) => {
        this.setState({comment: event.target.value});
    }

    cancel(){
        this.props.history.push('/places');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Place</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Country: </label>
                                            <input placeholder="Country" name="country" className="form-control" 
                                                value={this.state.country} onChange={this.changeCountryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Comment: </label>
                                            <input placeholder="Comment" name="comment" className="form-control" 
                                                value={this.state.comment} onChange={this.changeCommentHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updatePlace}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdatePlaceComponent
