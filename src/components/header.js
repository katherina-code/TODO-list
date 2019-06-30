import React from 'react';
import {FaDragon} from 'react-icons/fa';

export const Header = () => {
    return(
        <div className="todo__header">
            <FaDragon className="icon"/>
            <span className="title">TODO List</span>
        </div>
    )
};