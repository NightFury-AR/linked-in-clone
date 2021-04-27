import React from 'react';
import AppLayout from './AppLayout.layout';
import {Route,Redirect} from 'react-router-dom';

import {selectUser} from '../features/user/userSlice';
import {useSelector} from 'react-redux';


function PrivateRoute(props) {
    const user = useSelector(selectUser);
    const {component:Component,...rest} = props;
    return (
        <Route {...rest}
        render = {
            (matchProps) => {
                if(user) {
                    return <AppLayout><Component/></AppLayout>
                }
                else {
                    return <Redirect to='/'/>
                }
            }
        }
        />
    )
}

export default PrivateRoute;
