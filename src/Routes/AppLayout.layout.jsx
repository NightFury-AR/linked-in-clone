import React from 'react';
import './layout-style.scss';
import Header from '../components/Header/HeaderContainer/Header.component';

function AppLayout(props) {
    return (
        <React.Fragment>
            <Header />
            <div className="appContainer">
                <div className="white-space"></div>
                {props.children}
                <div className="white-space"></div>
            </div>
        </React.Fragment>
    )
}

export default AppLayout;
