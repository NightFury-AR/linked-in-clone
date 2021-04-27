import React from 'react';
import './landing-style.scss';
import LandingBG from './chair.svg';

import {useSelector} from 'react-redux';
import {selectUser} from '../../features/user/userSlice';
import {useHistory,Link} from 'react-router-dom';

function LandingPage() {
    const isUserLogged = useSelector(selectUser);
    const history = useHistory();

    React.useEffect(() => {
        if (isUserLogged) {
            history.push('/home');
        }
    });
    
    return (
        <div className="landing">
            <img src={LandingBG} alt="landing-bg" className="landing__bg"/>
            <div className="whitespace"></div>
            
            <div className="landing__container">
                
                <div className="landing__header">
                    <img className="landing__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt=""/>
                    <div className="landing__buttons">
                        <Link to='signup' className="landing__btn">Join Now</Link>
                        <Link to='login' className="landing__btn blue">Sign in</Link>
                    </div>
                </div>

                <div className="landing__jumbo">
                    Welcome to your professional community
                </div>

                <div className="landing__actions">
                    <Link style={{textDecoration:'none',color:'grey'}} to='/login'><div className="landing__action"> Search for a Job <div className="arrow"> {">"} </div> </div></Link>
                    <Link style={{textDecoration:'none',color:'grey'}} to='/login'><div className="landing__action"> Find a Person you know <div className="arrow"> &gt; </div> </div></Link>
                    <Link style={{textDecoration:'none',color:'grey'}} to='/login'><div className="landing__action"> Learn a new skill <div className="arrow"> &gt; </div> </div></Link>
                </div>

            </div>

            <div className="whitespace"></div>
        </div>
    )
}

export default LandingPage;
