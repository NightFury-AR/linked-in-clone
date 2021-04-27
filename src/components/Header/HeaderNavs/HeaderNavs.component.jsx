import React from 'react';
import './header-nav.style.scss';
import Avatar from '@material-ui/core/Avatar';

import {useDispatch} from 'react-redux';
import {logout} from '../../../features/user/userSlice';
import {auth} from '../../../FireBase/firebase';

function HeaderNavs({avatar,Icon,title,alt}) {
    
    const dispatch = useDispatch();

    return (
        <div className="headerNavs">
            {Icon && <div className="headerNavs__icon"><Icon/></div>}
            {(avatar||alt) && 
            <Avatar style={{marginRight:'20px',marginLeft:'20px'}} src={avatar} alt={alt} className="headerNavs__icon" onClick={() =>{ dispatch(logout());auth.signOut();}} />
            }
            <h3 className="headerNavs__title">{title}</h3>
        </div>
        
    )
}

export default HeaderNavs;
