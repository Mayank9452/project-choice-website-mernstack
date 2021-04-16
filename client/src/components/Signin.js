import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { showErrorMsg } from '../helper/message';
import { showLoading } from '../helper/loading';
import { setAuthentication, isAuthenticated } from '../helper/auth';
import { signin } from '../api/auth';
// import { response } from 'express';


const Signin = () => {
    const[formData, setFormData] = useState({
        email:'ashu@gmail.com',
        password:'abc123',
        errorMsg: false,
        loading: false,
    });
    const {
        email,
        password,
        errorMsg,
        loading,
        // redirectToDashboard
        } = formData;


          // Event Handler 
    const handleChange = evt => {
        // console.log(evt);
        setFormData({
            ...formData,
            [evt.target.name]:evt.target.value,
            errorMsg :'',
        });
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        // client side validation
        if( isEmpty(email) || isEmpty(password) ) {
            setFormData({
                ...formData, errorMsg: 'All fields are required'
            })
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,errorMsg: 'Invalid Email' 
            })
        } else {
            const { email, password } = formData; 
            const data = { email, password}

            setFormData({...formData, loading:true});

            signin(data)
                .then((response) => {
                    setAuthentication(response.data.token, response.data.user);

                    if(isAuthenticated() && isAuthenticated().role ===1) {
                        console.log('Redirect to admin dashboard');
                    } else {
                        console.log('Redirecting to user dashboard');
                    }
                })
                .catch(err => {
                    console.log('signin api function error: ', err);
                })
                
        }
         
    };

        const showSigninForm = () => (
            <form className='signup-form' onSubmit={handleSubmit} noValidate>
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
                {/* signui button  */}
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="submit">Signin</button>
                </div>
                {/* don't have account  */}
                <p className='text-center text-white'>
                    Don't have an account? <Link to='/signup'>Register Here</Link>
                </p>
            </form>
        );

        return (
            <div className='signin-container'>
                <div className='row px-3 vh-100'>
                    <div className="col-md-5 mx-auto align-self-center">
                    {errorMsg && showErrorMsg(errorMsg)}
                    {loading && <div className='text-center pb-4'>{showLoading()}</div>}
                    {showSigninForm()}
                    {/* {JSON.stringify(formData)} */}
                    </div>
                </div>
            </div>
            );
}

export default Signin;