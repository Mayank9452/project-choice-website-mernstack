import React from 'react';
import { Link } from 'react-router-dom';
// redux
// import { useDispatch } from 'react-redux';
// import { deleteProduct } from '../redux/actions/productActions';

const Card =({ product }) => {
    // const dispatch = useDispatch();
    return (
    // <div className='col-md-4 my-3'>     {/* col-md-4 my-3 */}
        <div className='card h-100'>
        {/* card h-100 */}
            {/* <a href="#!"> */}
                <img 
                    className='card-img-top'
                    src={`/uploads/${product.fileName}`}
                    alt='product'
                />
            {/* </a> */}

            <div className='card-body text-center'>
                <h5>{product.productName}</h5>
                <hr />
                <h6 className='mb-3'>
					<span className='text-secondary mr-2'>
						{product.productPrice.toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
						})}
					</span>
				</h6>
                <p>
					{product.productDesc.length > 60
						? product.productDesc.substring(0, 60) + '...'
						: product.productDesc.substring(0, 60)}
				</p>
                <Link
					// to={`/admin/edit/product/${product._id}`}
					type='button'
					className='btn btn-secondary btn-sm mr-1 my-1 mx-3'
				>
					<i className='far fa-eye pr-1 mx-1'></i>
					View
				</Link>
                <button
                    type='button'
                    className='btn btn-danger btn-sm'
                    // onClick={() => dispatch(deleteProduct(product._id))}
                >
                    <i className='fa fa-shopping-cart pr-1 mx-1'></i>
                        Purchase
                </button>
            </div>

        </div>
    //  </div>
    )
};

export default Card;