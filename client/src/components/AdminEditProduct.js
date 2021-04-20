import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import AdminHeader from './AdminHeader';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProduct } from '../redux/actions/productActions';
// import { getCategories } from '../redux/actions/categoryActions';

const AdminEditProduct = ({ match, history }) => {

    /****************************
	 * PARAMS
	 ***************************/
	const productId = match.params.productId;
    // console.log(productId);

	return(
        <div>Inside edit Component.</div>
    );
};

export default AdminEditProduct;