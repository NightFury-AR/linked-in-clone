import React from 'react';
import './header-style.scss';
import SearchIcon from '@material-ui/icons/Search';
import HeaderNavs from '../HeaderNavs/HeaderNavs.component';

import {useSelector} from 'react-redux';
import {selectUser} from '../../../features/user/userSlice';


import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';

function Header() {
    const user = useSelector(selectUser);
    console.log(user);
    return (
        <div className="header">

            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="brandlogo"/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderNavs Icon={HomeIcon} title="Home"/>
                <HeaderNavs Icon={GroupIcon} title="My Network"/>
                <HeaderNavs Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderNavs Icon={SmsRoundedIcon} title="Messaging"/>
                <HeaderNavs Icon={NotificationsIcon} title="Notifications"/>
                <HeaderNavs avatar={user && user.photoURL} alt={user && user.displayName && user.displayName[0]} title="Me"/>
                <HeaderNavs Icon={AppsRoundedIcon} title="work"/>
            </div>

            <div className="header__text"> Try Premium Free for one Month</div>

        </div>
    )
}

export default Header;
