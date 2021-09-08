import React, { Component } from 'react'
import PlaceService from '../../services/PlaceService'

class ViewPlaceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            place: {}
        }
    }

    componentDidMount(){
        PlaceService.getPlaceById(this.state.id).then( res => {
            this.setState({place: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Place Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Name: </label>
                            <div> { this.state.place.name }</div>
                        </div>
                        <div className = "row">
                            <label> Country: </label>
                            <div> { this.state.place.country }</div>
                        </div>
                        <div className = "row">
                            <label> Comment: </label>
                            <div> { this.state.place.comment }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPlaceComponent
