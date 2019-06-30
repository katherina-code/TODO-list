import React, {Component, Fragment} from 'react';
import {FaDragon} from 'react-icons/fa';
import {Header} from './header';

class TodoBody extends Component {
    render() {
        return(
            <div className="todo__header">
                <Header/>
                {/* <FaDragon/> TODO */}
            </div>
        )
    }
}

export default TodoBody;