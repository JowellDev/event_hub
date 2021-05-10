import React from 'react';
import {Link} from 'react-router-dom';
import ROUTE from '../../Route';
import './style.css';

const HomeUserCard = () => {
    return (
        <section id="user-card">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="card-container card-user" data-aos="zoom-in" data-aos-duration="1500">
                            <h3>grand public</h3>
                            <p>Vous aurez la possibilité de : </p>
                            <ul>
                                <li>Voir les events à venir</li>
                                <li>Ajouter un event comme favori</li>
                                <li>Achéter des tickets</li>
                            </ul>
                            <Link to={ROUTE.REGISTER} className="card-container-btn user-btn">creer un compte</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-container card-manager" data-aos="zoom-in" data-aos-duration="1500">
                            <h3>organisateur</h3>
                            <p>Vous aurez la possibilité de : </p>
                            <ul>
                                <li>Créer un event et le publier</li>
                                <li>Voir la liste des participants à un event</li>
                                <li>Vendre des tickets</li>
                            </ul>
                            <Link to={ROUTE.REGISTER} className="card-container-btn manager-btn">creer un compte</Link>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </section>
    )
}

export default HomeUserCard;
