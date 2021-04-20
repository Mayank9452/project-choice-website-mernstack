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

    /****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
	const [productImage, setProductImage] = useState(null);
    const [productName, setProductName] = useState('');
	const [productDesc, setProductDesc] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productCategory, setProductCategory] = useState('');
	const [productQty, setProductQty] = useState('');

	return(
        <div>Inside edit Component.</div>
    );
};

export default AdminEditProduct;