import React from 'react';
import Header from '../../components/Header';
import Fonctionnality from '../../components/Fonctionnality';
import HomeUserCard from '../../components/HomeUserCard';
import Footer from '../../components/Footer';
import './home.css';

const Home = () => {
    return(
        <div>
            <Header/>
            <Fonctionnality/>
            <HomeUserCard/>
            <Footer/>
        </div>
    )
}

export default Home;