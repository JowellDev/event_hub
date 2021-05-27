import React from 'react';
import {Link} from 'react-router-dom';
import ROUTE from '../../Route';
import './style.css';

function SideBar() {
    return (
        <div className="sidebar-container">
            <ul className="sidebar-menu">
                <li className="sidebar-item">Lundi</li>
                <li className="sidebar-item">Mardi</li>
                <li className="sidebar-item">Mercredi</li>
                <li className="sidebar-item">Jeudi</li>
                <li className="sidebar-item">Vendredi</li>
                <li className="sidebar-item">Samedi</li>
                <li className="sidebar-item">Dimanche</li>
            </ul>
        </div>
        
    )
}

export default SideBar;
