import React,{lazy,Suspense} from 'react';

import {Switch,BrowserRouter,Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute.component';

function Routes() {

    const LandingPage = lazy(()=> import('../Screens/LandingPage/LandingPage.screen'));
    const Login = lazy(()=>import('../Screens/Login/Login.screen'));
    const Signup = lazy(()=>import('../Screens/Signup/Signup.screen'));
    const Home = lazy(()=>import('../Screens/Home/HomeScreen.page'));

    return (
        <BrowserRouter>
            <Suspense fallback={"Loading..."}>
                <Switch>
                    <Route path="/" exact component={LandingPage}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/signup" exact component={Signup}/>
                    <PrivateRoute path="/home" exact component={Home}/>
                </Switch>
            </Suspense>
            
        </BrowserRouter>
    )
}

export default Routes
