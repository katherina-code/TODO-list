import React, { Component, Fragment } from 'react';
import { Header } from './header';
import { Input } from './input';

class TodoBody extends Component {
    render() {
        return (
            <div className="todo">
                <div className="todo__container">
                    <Header />
                    <Input />
                </div>
            </div>
        )
    }
}

export default TodoBody;