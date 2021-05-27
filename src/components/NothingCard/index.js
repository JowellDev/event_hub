import React from 'react';
import './style.css';

function NothingCard({text}) {
    return (
        <div id="nothingCard">
            <div className="alert alert-danger text-center text-uppercase pt-5">
                {text}
            </div>
        </div>
        
    )
}
export default NothingCard;
