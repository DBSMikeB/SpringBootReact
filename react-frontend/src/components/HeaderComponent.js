import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/" className="navbar-brand">Employee Management App</a></div> |
                    <div><a href="/home" className="navbar-brand"><small>Home</small></a></div> |
                    <div><a href="/employees" className="navbar-brand"><small>Employees</small></a></div> |
                    <div><a href="/places" className="navbar-brand"><small>Places</small></a></div>|
                    <div><a href="/todos" className="navbar-brand"><small>Todos</small></a></div> |
          
                  
                    </nav>
                </header>
            </div>

            
        )
    }
}

export default HeaderComponent
