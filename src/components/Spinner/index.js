import React from 'react';
import './spinner.css'
import loading from './loading.gif';

const Spinner = () => {
    return (
        <div className="loader-div">
            <img src={loading} alt="loading"/>
        </div>
    )
}

export default Spinner;