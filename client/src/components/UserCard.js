import React from 'react';
import { Link } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions/productActions';

const UserCard = () => {
    const dispatch = useDispatch();
    return(
        <div>
            <div className="card">

            </div>
        </div>
    ); 
}