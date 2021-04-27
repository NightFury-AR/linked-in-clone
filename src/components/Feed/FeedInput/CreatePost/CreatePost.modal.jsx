import React from 'react';
import './createpost-style.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddIcon from '@material-ui/icons/Add';
import {db} from '../../../../FireBase/firebase';
import firebase from 'firebase';
import {selectUser} from '../../../../features/user/userSlice';
import {useSelector} from 'react-redux';

export default function FormDialog() {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => { setOpen(true);};
  const handleClose = () => {setOpen(false);};
  const user = useSelector(selectUser);

  const [postMessage,setPostMessage] = React.useState('');

  const handlePost = () => { 
    //console.log(firebase.firestore.FieldValue.serverTimestamp());
    db.collection('posts').add({
      name:user.displayName,
      description:user.profileBio,
      photoUrl:user.photoURL,
      message: postMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setPostMessage('');
    handleClose();
  }

  return (
    <div>
      <div className="feedInput__btn" onClick={handleClickOpen}>Start Post</div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" style={{marginTop:'-250px'}}>
        <DialogTitle id="form-dialog-title">Create Post</DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText style={{display: 'flex',flexDirection: 'row',alignItems: 'center',width:'500px'}}>
          <Avatar src={(user && user.photoURL)}/>
          <h4 style={{paddingLeft:'15px'}}>{user.displayName}</h4>
          </DialogContentText>
          <textarea 
          placeholder="what do you want to talk about?" 
          rows="5" 
          style={{fontFamily:'sans-serif',marginTop:'10px',paddingLeft:'15px',width:'500px',border:'none',outline:'none'}}
          name='postMessage'
          value={postMessage}
          onChange={e => setPostMessage(e.target.value)}
          />

           <div className="postActions">
               <div className="postAction">
                   <IconButton><AddIcon/></IconButton>
                   <IconButton type="file"><PhotoIcon/></IconButton>
                   <IconButton><VideocamIcon/></IconButton>
                   <IconButton><InsertDriveFileIcon/></IconButton>
               </div>
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