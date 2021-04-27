import React,{forwardRef} from 'react';
import './post-style.scss';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';

import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import SmsTwoToneIcon from '@material-ui/icons/SmsTwoTone';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
 
const Post = forwardRef (({name, description, timestamp,message,photoUrl,postPhotoUrl},ref) => {
  
    return (
        <div ref={ref} className="post">
            
            <div className="post__header">
                <Avatar className="post__avatar" src={photoUrl}/>
                <div className="post__profile">
                    <div className="post__owner">{name}</div>
                    <div className="post__owner__title">{description}</div>
                    <div className="post__created__date">{timestamp && moment(timestamp.toString()).fromNow()}</div>
                </div>
            </div>

            <div className="post__content">
                <div className="post__message">{message}</div> 
                { postPhotoUrl && 
                    <img 
                    className="post__image" 
                    alt="postImage"
                    src={postPhotoUrl}
                    />
                }
                
            </div>
            <Divider/>
            <div className="post__footer">

                <div className="post__actions">
                    <div className="post__action"><ThumbUpAltTwoToneIcon/> Like </div>
                    <div className="post__action"><SmsTwoToneIcon/> Comment </div>
                    <div className="post__action"><ShareTwoToneIcon/> Share </div>
                    <div className="post__action"><SendTwoToneIcon/> Send </div>
                </div>
                
            </div>

        </div>
    )
}
)

export default Post;
