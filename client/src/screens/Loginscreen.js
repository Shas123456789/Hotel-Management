import React, { useState } from 'react';
import {useHistory} from  "react-router-dom";
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';

function Loginscreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

  

    async function login() {
        const user = {
            email,
            password,
        };

        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        try {
            setLoading(true);
            const result = await axios.post('./api/users/login', user);
            setLoading(false);
            localStorage.setItem('currentUser', JSON.stringify(result.data));
            // Redirect to home page upon successful login
            window.location.href = '/home';
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
        }
    }

    return (
        <div>
            {loading && <Loader />}
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 '>
                    {error && <Error message='Invalid credentials' />}
                    <div className='bs'>
                        <h2>Login</h2>
                        <input
                            type='email'
                            className='form-control my-3'
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />

                        <input
                            type='password'
                            className='form-control my-3'
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />

                        <button className='btn btn-primary mt-3' onClick={login}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loginscreen;
