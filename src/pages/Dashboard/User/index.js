import React, {useEffect, useContext} from 'react';
import Navbar from '../../../components/Navbar';
import UserAuthContext from '../../../context/Auth/UserAuth/UserAuthContext';
import ROUTE from '../../../Route';

function UserDashboard(props) {
    const userAuthContext = useContext(UserAuthContext);
    const {userIsAuth} = userAuthContext;

    useEffect(() => {
        if(!userIsAuth){
            props.history.push(ROUTE.PUBLIC_LOGIN)
        }
    }, [userIsAuth, props.history])

    return (
        <div>
            <Navbar/>
            <h1>Welcome on your User dashboard !</h1>
        </div>
    )
}

export default UserDashboard;
