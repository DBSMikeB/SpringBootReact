import React, { Component } from 'react'
import PlaceService from '../../services/PlaceService'

class ListPlaceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                places: []
        }
        this.addPlace = this.addPlace.bind(this);
        this.editPlace = this.editPlace.bind(this);
        this.deletePlace = this.deletePlace.bind(this);
    }

    deletePlace(id){
        PlaceService.deletePlace(id).then( res => {
            this.setState({places: this.state.places.filter(place => place.id !== id)});
        });
    }
    viewPlace(id){
        this.props.history.push(`/view-place/${id}`);
    }
    editPlace(id){
        this.props.history.push(`/add-place/${id}`);
    }

    componentDidMount(){
        PlaceService.getPlaces().then((res) => {
            this.setState({ places: res.data});
        });
    }

    addPlace(){
        this.props.history.push('/add-place/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Places List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPlace}> Add Place</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Country</th>
                                    <th> Comment</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.places.map(
                                        place => 
                                        <tr key = {place.id}>
                                             <td> { place.name} </td>   
                                             <td> {place.country}</td>
                                             <td> {place.comment}</td>
                                             <td>
                                                 <button onClick={ () => this.editPlace(place.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePlace(place.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPlace(place.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListPlaceComponent
