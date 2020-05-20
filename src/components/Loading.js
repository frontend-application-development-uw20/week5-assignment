import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
 
function Loading() {
    return(
        <div className="spinner">
            <p>Loading...</p>
            <FontAwesomeIcon icon={faSpinner} spin />
        </div>
    )
}

export default Loading;