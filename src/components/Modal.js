import React from 'react';
import PropTypes from 'prop-types';


export default function Modal(props) {
    return (
        <div className="modal">
            <p>{props.message}</p>
        </div>
    )
}

Modal.propType = {
    message: PropTypes.string
}
