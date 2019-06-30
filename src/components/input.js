import React, { Fragment } from 'react';
import { FaPlus } from 'react-icons/fa';

export const Input = () => {
    return (
        <div className="todo__form">
            <input type="text" placeholder="Add new task"></input>
            <button>
                <FaPlus />
            </button>
        </div>
    )
}