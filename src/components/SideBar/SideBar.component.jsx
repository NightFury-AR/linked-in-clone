import Avatar  from '@material-ui/core/Avatar';
import React,{useState} from 'react';
import './side-bar.style.scss';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {useSelector} from 'react-redux';
import {selectUser} from '../../features/user/userSlice';

const sideBarRecents= (topic) => {
    return (
        <div className="recentsSideBar">
            <span>#</span>
            <p>{topic}</p>
        </div>
    )
};



function SideBar() {
    const [toggleRecents, settoggleRecents] = useState(false);
    const [toggleGroups, settoggleGroups] = useState(false);
    const user = useSelector(selectUser);
    return (
        <div className='sideBar'>

            <div className="sideBar__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCC5o-yerddQnw_AeD5-60YE-luRuEKma119ceUXAKXTQVkXGbx-GVm3DzuUI7oxroaU&usqp=CAU" alt="coverImage" className="sideBar__top__cover"/>
                <Avatar src={user && user.photoURL} className="sideBar__avatar"/>
                <h2>{user && user.displayName} </h2>
                <h4>{user && user.profileBio} </h4>
                <hr className='divider'/>
                <div className="sideBar__top__desc">
                   <div className="sideBar__top__desc__section">
                       <div className="desc__head">Connections</div>
                       <div className="desc__value">35</div>
                   </div>
                   <div className="sideBar__top__desc__section">
                       <div className="desc__head">Who viewed your profile</div>
                       <div className="desc__value">5</div>
                   </div>
                </div>
                <hr className='divider'/>
                <div className="sideBar__myItems">
                    <div className="desc__head"><BookmarkIcon/></div>
                    <div className="desc__value">My saved Items </div>
                </div>
                
            </div>

            <div className="sideBar__bottom">
                <div className="sideBar__bottom__head" onClick = {() => settoggleRecents(!toggleRecents)}>Recents <span className="toggleArrow">{toggleRecents ? <ExpandLessIcon/> : <ExpandMoreIcon/>}</span></div>
                { toggleRecents && 
                <>
                {sideBarRecents('ReactDevs')}
                {sideBarRecents('ReactBegineers')}
                {sideBarRecents('FrontEndDevs')}
                {sideBarRecents('AdvanceReact')}
                </>
                }
                <hr className='divider'/>
                <div className="sideBar__bottom__head" onClick = {() => settoggleGroups(!toggleGroups)}> Groups <span className="toggleArrow">{toggleGroups ? <ExpandLessIcon/> : <ExpandMoreIcon/>}</span></div>
                { toggleGroups && 
                <>
                {sideBarRecents('ReactDevs')}
                {sideBarRecents('ReactBegineers')}
                {sideBarRecents('FrontEndDevs')}
                {sideBarRecents('AdvanceReact')}
                </>
                }
            </div>

            

        </div>
    )
}

export default SideBar;
