import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';

const PrivateRouter = ({children}) => {
    const {user,loadingStat}=useContext(AuthContext)
    if(user){
        return children
    }

    if(loadingStat){
        return <span class="loading loading-infinity loading-lg"></span>
    }
    return (
         <Navigate to='/login'></Navigate>
        
    );
};

export default PrivateRouter;