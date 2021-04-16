import React, { useState, useEffect } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import isEmail from 'validator/lib/isEmail';
import { showErrorMsg, showSuccessMsg } from '../helper/message';
import { isAuthenticated } from '../helper/auth';
import { showLoading } from '../helper/loading';
// import './Signup.css';
import { Link, useHistory } from 'react-router-dom';
// import { response } from 'express';
import {signup} from '../api/auth';


const Signup = () => {
    let history = useHistory();

    useEffect(() => {
        if(isAuthenticated() && isAuthenticated().role ===1) {
            // console.log('Redirect to admin dashboard');
            history.push('/admin/dashboard');
        } else if (isAuthenticated() && isAuthenticated().role ===0){
            // console.log('Redirecting to user dashboard');
            history.push('/user/dashboard');
        }
    }, [history]);



    const[formData, setFormData] = useState({
        username:'ashutosh',
        email:'ashu@gmail.com',
        password:'abc123',
        password2:'abc123',
        successMsg: false,
        errorMsg: false,
        loading: false,
    })
    const {username,
            email,
            password,
            password2,
            successMsg,
            errorMsg,
            loading
            } = formData;

            // Event Handler 
    const handleChange = evt => {
        // console.log(evt);
        setFormData({
            ...formData,
            [evt.target.name]:evt.target.value,
            successMsg: '',
            errorMsg :'',
        });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
         
        // client side validation
        if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
            setFormData({
                ...formData, errorMsg: 'All fields are required'
            })
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,errorMsg: 'Invalid Email' 
            })
        } else if(!equals(password, password2)) {
            setFormData({
                ...formData,errorMsg: 'Password do not match'
            })
        } else {
            const { username, email, password } = formData; 
            const data = { username, email, password}

            setFormData({...formData, loading:true});

            signup(data)
                .then(response => {
                    console.log('Axios signup success: ', response);
                    setFormData({
                        username:'',
                        email:'',
                        password:'',
                        password2:'', 
                        loading:false, 
                        successMsg: response.data.successMessage
                    });
                })
                .catch (err => {
                    console.log('Axios signup error: ', err);
                    setFormData({...formData, loading:false, errorMsg: err.response.data.errorMessage}); 
                });
        }
    };

    const showSignupForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
            {/* username */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <i className='fa fa-user'></i>
                </span>
                <input 
                    name='username'
                    value={username}
                    type="text" 
                    className="form-control" 
                    placeholder="Username" 
                    aria-label="Username" 
                    aria-describedby="basic-addon1"
                    onChange={handleChange} 
                />
            </div>
            {/* email */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <i className='fa fa-envelope'></i>
                </span>
                <input 
                    name='email'
                    value={email}
                    type="email" 
                    className="form-control" 
                    placeholder="Email Address" 
                    aria-label="Email Address" 
                    aria-describedby="basic-addon1" 
                    onChange={handleChange} 
                />
            </div>
            {/* password */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <i className='fa fa-lock'></i>
                </span>
                <input
                    name='password'
                    value={password} 
                    type="password" 
                    className="form-control" 
                    placeholder="Create Password" 
                    aria-label="Create Password" 
                    aria-describedby="basic-addon1"
                    onChange={handleChange}  
                />
            </div>
            {/* password2 */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <i className='fa fa-lock'></i>
                </span>
                <input
                    name='password2'
                    value={password2} 
                    type="password" 
                    className="form-control" 
                    placeholder="Confirm Password" 
                    aria-label="Confirm Password" 
                    aria-describedby="basic-addon1"
                    onChange={handleChange}  
                />
            </div>
            {/* signup button  */}
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Signup</button>
            </div>
            {/* already have account  */}
            <p className='text-center text-white'>
                Have an account? <Link to='/signin'>Log In</Link>
            </p>
        </form>
    );
    return (
        <div className='signup-container'>
            <div className='row px-3 vh-100'>
                <div className="col-md-5 mx-auto align-self-center">
                {successMsg && showSuccessMsg(successMsg)}
                {errorMsg && showErrorMsg(errorMsg)}
                {loading && <div className='text-center pb-4'>{showLoading()}</div>}
                {showSignupForm()}
                {/* {JSON.stringify(formData)} */}
                </div>
            </div>
        </div>
        );
};

export default Signup;