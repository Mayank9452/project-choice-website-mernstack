import React from 'react';
import { Link } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions/productActions';

const UserCard = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <a href="#">
                    <img
                        className='card-img-top'
                        src={`/uploads/${product.fileName}`}
                        alt='product'
                        height="200px"
                    />
                </a>
                <div className="card-body">
                    
                </div>
            </div>
        </div>
    );
}