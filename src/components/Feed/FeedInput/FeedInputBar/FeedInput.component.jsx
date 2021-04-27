import React from 'react';
import './feed-input.style.scss';
import Avatar from '@material-ui/core/Avatar';

import VideocamIcon from '@material-ui/icons/Videocam';
import EventNoteIcon from '@material-ui/icons/EventNote';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';

import CreatePost from '../CreatePost/CreatePost.modal';
import CreatePhotoPost from '../CreatePhotoPost/CreatePhotoPost.modal';
import { Divider } from '@material-ui/core';

function FeedInput() {
    
    
    return (
        <div className="feedInput">
            <div className="feedInput__post">
                <Avatar className="feedInput__avatar" src="https://media-exp1.licdn.com/dms/image/C5103AQFHcvdNPws6DQ/profile-displayphoto-shrink_800_800/0/1575483959199?e=1624492800&v=beta&t=GRsTS8T0p6CjssfaJRGwqXQpQAWx4bgR0vLPo2MYn1w"/>
                {/* <div className="feedInput__btn">Start Post</div> */}
                <CreatePost/> 
                <Divider/>

            </div>
            <div className="feedInput__actions">
                
                <CreatePhotoPost/>
                <div className="feedInput__action"><VideocamIcon style={{color:'#7FC15E'}}/> Video </div>
                <div className="feedInput__action"><EventNoteIcon style={{color:'#E7A33E'}}/> Event </div>
                <div className="feedInput__action"><VerticalSplitIcon style={{color:'#F5987E'}}/> Write Article </div>
            </div>
        </div>
    )
}

export default FeedInput;
