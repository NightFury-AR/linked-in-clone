import React from 'react';
import './signup-style.scss';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { auth, db } from '../../FireBase/firebase';

import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../../features/user/userSlice';




function Signup() {

    const history = useHistory();
    const isUserLogged = useSelector(selectUser);
    const dispatch = useDispatch();

    const [user, setUser] = React.useState({
        userName: '',
        userId: '',
        password: '',
        photoURL: '',
        profileBio: ''
    });

    const handleChange = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.userName || !user.userId || !user.password) {
            alert('invalid inputs');
            return;
        }

        //signup user to firebase Auth and update their profile
        await auth.createUserWithEmailAndPassword(user.userId, user.password)
            .then(() => auth.currentUser.updateProfile({ displayName: user.userName, photoURL: user.photoURL }))
            .then(() => {
                db.collection('users').doc(auth.currentUser.uid).set({
                    displayName: auth.currentUser.displayName,
                    email: auth.currentUser.email,
                    photoURL: auth.currentUser.photoURL,
                    profileBio: user.profileBio,
                })
            }).catch(error => console.log(error));
        const userData = await db.collection('users').doc(auth.currentUser.uid).get().then( (doc) => doc.data()).catch(error => console.log(error));
        dispatch(login(userData));

        setUser({ userName: '', userId: '', password: '', photoURL: '', profileBio: '' });
        history.push('/home');

    }

    React.useEffect(() => {
        if (isUserLogged) {
            history.push('/home');
        }
    }, [history, isUserLogged]);

    return (
        <div className="signup">
            {
                isUserLogged ? <Redirect to='/home' />
                    :
                    <React.Fragment>
                        <div className="signup__container">

                            <Link to='/'><img className="signup__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="" /></Link>
                            <div className="signup__jumbo">Make the most of your professional life</div>

                            <form className="signup__form" onSubmit={handleSubmit}>

                                <label htmlFor='userName'>user name</label>
                                <input type="text" name="userName" id="userName" onChange={handleChange} value={user.userName} />

                                <label htmlFor='photoURL'>your PhotoURL</label>
                                <input type="text" name="photoURL" id="photoURL" onChange={handleChange} value={user.photoURL} />

                                <label htmlFor='profileBio'>your profileBio</label>
                                <input type="text" name="profileBio" id="profileBio" onChange={handleChange} value={user.profileBio} />

                                <label htmlFor='userId'>Email or Phone number</label>
                                <input type="text" name="userId" id="userId" onChange={handleChange} value={user.userId} />

                                <label htmlFor='password'>Password (6 or more characters)</label>
                                <input type="password" name="password" id="password" onChange={handleChange} value={user.password} />

                                <div className="signup__consent">
                                    By clicking Agree and Join, you agree to the LinkedIn <b style={{ color: '#0A66C2' }}>User Agreement</b>, <b style={{ color: '#0A66C2' }}>Privacy Policy</b>, and <b style={{ color: '#0A66C2' }}>Cookie Policy</b>.
                    </div>

                                <button className="signup__btn" type="submit">Agree & Signup</button>

                                <div className="or">or</div>

                                <button className="signup__btn__google" type="submit">

                                    <img src="https://freepngimg.com/download/google/67060-play-photos-search-google-account-png-file-hd.png" alt="" />
                        join with google

                    </button>

                            </form>

                            <div className="signup__nav">Already have an account ? <Link className='signup__nav__btn' to='/login'> Sign in </Link> </div>


                        </div>

                        <div className="signup__footers">
                            <img src="https://www.nicepng.com/png/detail/380-3809524_linkedin-r-dark-full-logo-black-and-white.png" alt="" className="signup__footer__img" />
                            <div className="signup__footer">© 2021</div>
                            <div className="signup__footer">About</div>
                            <div className="signup__footer">Accessibility</div>
                            <div className="signup__footer">Guest controls</div>
                            <div className="signup__footer">User Agreement</div>
                            <div className="signup__footer">Privacy Policy</div>
                            <div className="signup__footer">Community Guidelines</div>
                            <div className="signup__footer">Cookie Policy</div>
                            <div className="signup__footer">Copyright Policy</div>
                            <div className="signup__footer">Send Feedback</div>
                            <div className="signup__footer">Language</div>
                        </div>
                    </React.Fragment>
            }
        </div>
    )
}

export default Signup;
