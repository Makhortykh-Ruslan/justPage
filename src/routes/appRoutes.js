import React from "react";
import {Switch, Route, } from 'react-router-dom'
import NewsPage from "../components/pages/news/NewsPage";
import HomePage from "../components/pages/homePage/HomePage";
import ProfilePage from "../components/pages/profilePage/ProfilePage";
import LoginForm from "../components/pages/auth/LoginForm";
import PrivateRoute from "../components/privatePoute/PrivateRoute";

const AppRoutes = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <HomePage />
            </Route>

            <Route path='/NewsPage'>
                <NewsPage />
            </Route>

            <PrivateRoute component={()=> <ProfilePage />} path='/Profile' />

            <Route path='/LoginForm'>
                <LoginForm />
            </Route>
            <Route exact path='*'>
                <HomePage />
            </Route>

        </Switch>
    )
}

export default AppRoutes;