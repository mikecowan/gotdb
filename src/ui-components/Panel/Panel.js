import React, { Component } from 'react';
import './Panel.css';

const Panel = (props) => {
    const divStyle = {
        width: props.width,
        border: '1px solid black'
    };

    return (
        <div style={divStyle}>
            {props.location}
        </div>
    )
}

export default Panel;
