import React from 'react';
import './login-style.scss';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { auth ,db} from '../../FireBase/firebase';
import { login, selectUser } from '../../features/user/userSlice';


function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const isUserLogged = useSelector(selectUser);

    const [user, setUser] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!user.email || !user.password) {
                alert('invalid input');
                return;
            }
            await auth.signInWithEmailAndPassword(user.email, user.password).catch(error => console.log(error));
            const userData = await db.collection('users').doc(auth.currentUser.uid).get().then( (doc) => doc.data()).catch(error => console.log(error));
            dispatch(login(userData));
            setUser({ email: '', password: '' });
            history.push('/home');
        } catch (error) {
            console.log(error.message, 'login error');
        }

    }

    React.useEffect(() => {
        if (isUserLogged) {
            history.push('/home');
        }
        return isUserLogged;
    }, [history, isUserLogged]);

    return (
        <div className="login">
            {
                isUserLogged ? <Redirect to='/home' />
                    :
                    <React.Fragment>
                        <div className="login__container">
                            <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="" className="login__logo" /></Link>

                            <div className="login__box">
                                <h1>Sign in </h1>
                                <h6>Stay updated on your professional world</h6>
                                <form className='login__form' onSubmit={handleSubmit}>
                                    <TextField type='text' name='email' placeholder="enter email" className='login__input' variant='outlined' value={user.email} onChange={handleChange} />
                                    <TextField type='password' name='password' placeholder="enter password" className='login__input' variant='outlined' value={user.password} onChange={handleChange} />
                                    <h4>forgot password ?</h4>
                                    <button className='login__btn' type="submit"> sign in </button>
                                </form>
                            </div>

                            <div className="login__nav">New to Linked In ? <Link className='login__nav__btn' to='/signup'>Join Now </Link> </div>
                        </div>

                        <div className="login__footers">
                            <img src="https://www.nicepng.com/png/detail/380-3809524_linkedin-r-dark-full-logo-black-and-white.png" alt="" className="login__footer__img" />
                            <div className="login__footer">© 2021</div>
                            <div className="login__footer">User Agreement</div>
                            <div className="login__footer">Privacy Policy</div>
                            <div className="login__footer">Community Guidelines</div>
                            <div className="login__footer">Cookie Policy</div>
                            <div className="login__footer">Copyright Policy</div>
                            <div className="login__footer">Send Feedback</div>
                            <div className="login__footer">Language</div>
                        </div>
                    </React.Fragment>
            }
        </div>
    )
}

export default Login;
