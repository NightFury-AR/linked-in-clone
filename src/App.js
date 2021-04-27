import React from "react";
import "./App.css";
import Routes from './Routes/Routes.component';

import {auth,db} from './FireBase/firebase';
import {useDispatch} from 'react-redux';
import {logout,login} from './features/user/userSlice';

function App() {
  const dispatch = useDispatch();

  const getUserData = async () => {
    const userData = await db.collection('users').doc(auth.currentUser.uid).get().then( (doc) => doc.data()).catch(error => console.log(error));
    dispatch(login(userData));
  }
  
  React.useEffect(() => {
    auth.onAuthStateChanged( (userAuth) => {
      if(userAuth) {
        getUserData();
      }
      else {
        dispatch(logout());
      }
    })
  });


  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
