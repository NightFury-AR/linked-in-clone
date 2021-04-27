import React from 'react';
import './create-photo-post.style.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import PhotoIcon from '@material-ui/icons/Photo';
import { db } from '../../../../FireBase/firebase';
import firebase from 'firebase';

import {useSelector} from 'react-redux';
import {selectUser} from '../../../../features/user/userSlice';

export default function FormDialog() {
    const user=useSelector(selectUser);
    const [postMessage, setPostMessage] = React.useState({message:'',postPhoto:''});
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    const handleProfilePicChange = async (e) => {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            const Image = await toBase64(e.currentTarget.files[0]).catch(e => Error(e));
            if (Image instanceof Error) { alert('not valid image'); return }
            setPostMessage(prevState => ({...prevState,[e.target.name]:Image}));
        }
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });



    const handlePost = () => {
        //console.log(firebase.firestore.FieldValue.serverTimestamp());
        db.collection('posts').add({
            name:user.displayName,
            description:user.profileBio,
            photoUrl:user.photoURL,
            postPhotoUrl: postMessage.postPhoto,
            message: postMessage.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setPostMessage({message:'',postPhoto:''});
        handleClose();
    }

    return (
        <div>
            <input accept="image/*" style={{ display: 'none' }} name='postPhoto' onChange={handleProfilePicChange} value='' id="profile-pic" type="file" />
            <label htmlFor="profile-pic">
                <div className="feedInput__action" onClick={handleClickOpen}><PhotoIcon style={{ color: '#70B5F9' }} /> Photo </div>
            </label>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" style={{ marginTop: '-250px' }}>
                <DialogTitle id="form-dialog-title">Create Post with Photo </DialogTitle>
                <Divider />
                <DialogContent>
                    <DialogContentText style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '500px' }}>
                        <Avatar src={user && user.photoURL} />
                        <h4 style={{ paddingLeft: '15px' }}>{user && user.displayName}</h4>
                    </DialogContentText>
                    <input type="text"
                        placeholder="would you like to add # ?"
                        style={{ fontFamily: 'sans-serif', marginTop: '10px', paddingLeft: '15px', width: '500px', border: 'none', outline: 'none' }}
                        name='message'
                        value={postMessage.message}
                        onChange={e => setPostMessage(prevState => ({...prevState,[e.target.name]:e.target.value}))}
                    />

                    <div className="postActions">
                        
                        <img src={postMessage.postPhoto}
                        alt="postedImage" className='postedPic'/>
                        <div className="actionButtons">
                            <div className="closeButton" onClick={handleClose}> Cancel </div>
                            <div className="postButton" onClick={handlePost}> Post </div>
                        </div>

                    </div>

                </DialogContent>
            </Dialog>
        </div>
    );
}