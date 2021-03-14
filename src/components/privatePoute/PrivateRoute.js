import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const cred = JSON.parse(localStorage.getItem('user'));
    return (
        <Route {...rest} render={(props) => cred?.login ? <Component {...props}/> : <Redirect to='/' />} />
    );
};

export default PrivateRoute;