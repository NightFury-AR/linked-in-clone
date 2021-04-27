import React from 'react';
import './feed-style.scss';
import FeedInput from '../FeedInput/FeedInputBar/FeedInput.component';
import Post from '../Post/Post.component';
import { db } from '../../../FireBase/firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts,setposts] = React.useState([]);

    React.useEffect( () => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setposts(snapshot.docs.map (doc => ({ 
                id: doc.id,
                data: doc.data(),
            })))
        })
    },[]);

    return (
        <div className="feedContainer">
            <FeedInput/>
            <FlipMove>
        {
            posts.map( ({id,data}) => 
                <Post
                key={id}
                name={data.name}
                description={data.description}
                message={data.message}
                photoUrl={data.photoUrl}
                postPhotoUrl={data.postPhotoUrl}
                timestamp = {data.timestamp && data.timestamp.toDate()}
                />
            )
        }
           </FlipMove>
            
        </div>
    )
}

export default Feed;
