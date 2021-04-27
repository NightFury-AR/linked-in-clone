import React from 'react';
import './widget-style.scss';

import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const widgetCard = (header,posted,readers,middle) => {
    return (
        <div className="widget__row">
            <div className="widget__row__header">{header}</div>
            { middle ? 
                <div className="middle__row__desc">{posted}</div>
                :
                <div className="widget__row__desc">
                    <div className="wr__desc">{posted}</div>
                    <FiberManualRecordIcon/> 
                    <div className="wr__desc">{readers}</div>
                </div>
            }
        </div>
    )
}

function widget() {
    return (
        <div className="widget">
            
            <div className="widget__top">
                <div className="widget__header"> LinkedIn News <InfoTwoToneIcon style={{marginRight:'5px',marginLeft:'auto'}}/> </div>
                {widgetCard('Why it pays to be data savvy','3d ago','20 readers')}
                {widgetCard('HCL offers skill perks to employees','2h ago','10 readers')}
                {widgetCard('Lessons from Heart attack go viral','1d ago','200 readers')}
                {widgetCard('Hiring increases for IT Jobs','4d ago','100 readers')}
                {widgetCard('#CovidWatch : Impact on schools','3d ago','20 readers')}
            </div>

            <div className="widget__middle">
                <div className="widget__header"> Today’s most viewed courses <InfoTwoToneIcon style={{marginRight:'5px',marginLeft:'auto'}}/> </div>
                {widgetCard('1.The Six Moring Hablits for High perfomance','pete mokaitis | How to be awesome at your job..','',true)}
                {widgetCard('2.Speaking confidently and effectively','pete mokaitis | How to be awesome at your job..','',true)}
                {widgetCard('3.Unconscious Bias','Stacey gardon','',true)}
            </div>

            <div className="widget__bottom">
                <img className='widget__bottom__image' src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="linkedimImage"/>
                
                <div className="widget__bottom__desc">
                    <div className="widget__bottom__desc__item">About</div>
                    <div className="widget__bottom__desc__item">Accessibility</div>
                    <div className="widget__bottom__desc__item">Help Center</div>
                    <div className="widget__bottom__desc__item">Privacy & terms </div>
                    <div className="widget__bottom__desc__item"> Ad choices </div>
                    <div className="widget__bottom__desc__item">Advertising</div>
                    <div className="widget__bottom__desc__item"> Business Services </div>
                    <div className="widget__bottom__desc__item"> Get the LinkedIn App </div>
                    <div className="widget__bottom__desc__item"> more </div>
                </div>

                <div className="widget__bottom__footer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="logolinkedin"/>  
                    LinkedIn Corporation © 2021
                </div>
            </div>

        </div>
    )
}

export default widget;
