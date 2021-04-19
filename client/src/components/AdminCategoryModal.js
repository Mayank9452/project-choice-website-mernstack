import React, { useState, Fragment } from 'react';
import { createCategory } from '../api/category';
import {showErrorMsg, showSuccessMsg } from '../helper/message';
import { showLoading } from '../helper/loading';
import isEmpty from 'validator/lib/isEmpty';


const AdminCategoryModal = () => {
    ////******* component State Property********* *///////
    const [category, setCategory] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    //// ******* Event Handler*******//////
    const handleMessages = evt => {
        setErrorMsg('');
        setSuccessMsg('');
    }

    const handleCategoryChange = evt => {
        setErrorMsg('');
        setSuccessMsg('');
        setCategory(evt.target.value);
        // console.log(category);
    }

    const handleCategorySubmit = evt => {
        evt.preventDefault();
        // console.log(category);
        // setLoading(true);
        if (isEmpty(category)) {
            setErrorMsg('Please enter a category')
        } else {
            const data ={ category }
            setLoading(true);
            createCategory(data)
                .then(response => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setCategory('');
                })
                .catch(err => {
                    setLoading(false);
                    setErrorMsg(err.response.data.errorMessage);
                })
        }

    };


    //// ##### RENDER ######
    return (
    <div id='addCategoryModal' className='modal' onClick={handleMessages}>
        <div className='modal-dialog modal-dialog-centered modal-lg'>
            <div className='modal-content'>
                <form onSubmit={handleCategorySubmit}>
                    <div className='modal-header bg-info text-white'>
                        <h5 className='modal-title'>Add Category</h5>
                        <button className='close' data-bs-dismiss='modal'>
                            <span><i className='fas fa-times'></i></span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        {errorMsg && showErrorMsg(errorMsg)}
                        {successMsg && showSuccessMsg(successMsg)}
                        {
                            loading ?  (
                                <div className='text-center'>{showLoading()}</div>
                            ) : (
                                <Fragment>
                                    <label className='text-secondary'>Category</label>
                                    <input type='text' className='form-control' name='category' value={category} onChange={handleCategoryChange} />
                                </Fragment>
                            )
                        }
                        
                        
                    </div>
                    <div className='modal-footer'>
                        <button className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                        <button type='submit' className='btn btn-info'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)};

export default AdminCategoryModal;