import React from 'react';
import './home-style.scss';
import SideBar from '../../components/SideBar/SideBar.component';
import Feed from '../../components/Feed/FeedContainer/Feed.component';
import Widget from '../../components/widget/widget.component';


function HomeScreen() {

    return (
        <div className="appBody">
            <SideBar />
            <Feed />
            <Widget/>
        </div>

    )
}

export default HomeScreen;
