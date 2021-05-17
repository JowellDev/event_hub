import React from 'react';
import Navbar from '../../components/Navbar';

const Events = (props) => {
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="search-bar">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-7">
                            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Veuillez entrer le nom d'un évènement"/>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-dark">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="page-content">

                </div>
            </div>
        </div>
    )
}

export default Events
