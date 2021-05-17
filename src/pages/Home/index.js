import React, {useEffect, useContext} from 'react';
import Header from '../../components/Header';
import Fonctionnality from '../../components/Fonctionnality';
import HomeUserCard from '../../components/HomeUserCard';
import Footer from '../../components/Footer';
import UserAuthContext from '../../context/Auth/UserAuth/UserAuthContext';
import './style.css';

const Home = () => {
    const userAuthContext = useContext(UserAuthContext);
    const {loadUser, userIsAuth} = userAuthContext;
    useEffect(()=> {
        if (userIsAuth) {
            loadUser()
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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