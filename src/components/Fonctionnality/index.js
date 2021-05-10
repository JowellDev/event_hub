import React from 'react';
import manangerSvg from '../../images/svg/manager.svg';
import ticketSvg from '../../images/svg/ticket.svg';
import informedSvg from '../../images/svg/informed.svg';
import './style.css';

const FonctionnalitySection = () => {
    return(
        <section id="fonctionnality">
            <div className="container">
                <div className="row">
                    <div className="section-title col-md-12">
                        <h3>pourquoi <span>e-vent hub</span> ?</h3>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1800">
                        <div className="info">
                            <img src={informedSvg} alt="Rester informé" className="info-svg"/>
                            <p>Rester informés de chaque events qui aura lieu</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="zoom-in" data-aos-duration="1800">
                        <div className="info">
                            <img src={manangerSvg} alt="Organisation d'event " className="info-svg"/>
                            <p>Organiser et publier des events</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-down" data-aos-duration="1800">
                        <div className="info">
                            <img src={ticketSvg} alt="Achat de ticket" className="info-svg"/>
                            <p>Payement de tickets</p>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </section>
    )
}

export default FonctionnalitySection;