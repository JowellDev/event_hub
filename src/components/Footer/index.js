import React from 'react';
import './style.css';

function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer>
            <div className="container-fluid">
                <h3 className="text-center">Copyright E-vent Hub {date}</h3>
            </div>
        </footer>
        
    )
}

export default Footer
