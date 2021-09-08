import React, { Component } from 'react'


class ViewHomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id
 
        }
    }

    componentDidMount(){

    }

    render() {
        return (
            <div><br></br>
Hello World !
            </div>
        )
    }
}

export default ViewHomeComponent
