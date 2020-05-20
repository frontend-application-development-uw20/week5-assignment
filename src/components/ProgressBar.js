import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar(props) {
    const container = {
        width: "200px", 
        height: "10px", 
        background: "#fff", 
        borderRadius: "5px",
        border: "solid 1px #fff", 
    }

    const item = {
        height: "100%", 
        width: `${props.status * 2}px`, 
        background: "black",
        borderRadius: "5px 0px 0px 5px" 
    }

    const item2 = {
        height: "100%", 
        width: `198px`, 
        background: "black",
        borderRadius: "5px" 
    }
    
    return (
        <div style={container} className="ProgressBar">
            <div style={props.status > 98 ? item2 : item}className="status"></div>
        </div>
    )
}

ProgressBar.propTypes = {
    status: PropTypes.number
}

