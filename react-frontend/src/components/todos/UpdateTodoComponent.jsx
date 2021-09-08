import React, { Component } from 'react'
import TodoService from '../../services/TodoService';

class UpdateTodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            value: '',
            isDone: ''
        }
        this.changeValueHandler = this.changeValueHandler.bind(this);
        this.changeIsDoneHandler = this.changeIsDoneHandler.bind(this);

        this.updateTodo = this.updateTodo.bind(this);
    }

    componentDidMount(){
        TodoService.getTodoById(this.state.id).then( (res) =>{
            let todo = res.data;
            this.setState({value: todo.value,
                isDone: todo.isDone
                });
        });
    }

    updateTodo = (e) => {
        e.preventDefault();
        let todo = {name: this.state.name, country: this.state.country, comment: this.state.comment};
        console.log('todo => ' + JSON.stringify(todo));
        console.log('id => ' + JSON.stringify(this.state.id));
        TodoService.updateTodo(todo, this.state.id).then( res => {
            this.props.history.push('/todos');
        });
    }
    
    changeValueHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeIsDoneHandler= (event) => {
        this.setState({country: event.target.value});
    }


    cancel(){
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Todo</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Value: </label>
                                            <input placeholder="Value" name="value" className="form-control" 
                                                value={this.state.value} onChange={this.changeValueHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> IsDone: </label>
                                            <input placeholder="IsDone" name="country" className="form-control" 
                                                value={this.state.isDone} onChange={this.changeIsDoneHandler}/>
                                        </div>
                       
                                        <button className="btn btn-success" onClick={this.updateTodo}>Save</button>
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

export default UpdateTodoComponent
