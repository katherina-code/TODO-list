import React, { Fragment } from 'react';
import { FaPlus } from 'react-icons/fa';

export const Input = (props) => {
    let value = '';

    return (
        <div className="todo__form">
            <input type="text" placeholder="Add new task" onChange={(event) => value = event.target.value}></input>
            <button type="submit" onClick={() => {props.change(value)}}>
                <FaPlus />
            </button>
        </div>
    )
}