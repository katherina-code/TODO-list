import React, { Component, Fragment } from 'react';
import { Header } from './header';
import { Input } from './input';
import { Task } from './task';

class TodoBody extends Component {
    state = {
        todoList: []
    }

    addNewTask = (value) => {
        let arr = this.state.todoList;
        arr.push(value);

        this.setState({todoList: arr});
    }

    render() {
        const {todoList} = this.state;

        console.log(todoList);

        return (
            <div className="todo">
                <div className="todo__container">
                    <Header />
                    <Input change={this.addNewTask}/>
                    <div>
                        {todoList.map((e, index) => <Task task={e} key={index}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoBody;