import React from 'react';
import UserCard from './UserCard';
//redux
import { useSelector } from "react-redux";

 const AdminBody = () =>  {
     const {products} = useSelector(state => state.products);
     return (
         <div className='container my-5'>
             <div className='row row-cols-1 row-cols-md-3 g-4'>
                 {/* <div className="col-sm"> */}
                    {/* <div className='card-group'> */}
                        {products && products.map(product => (
                            <div className="col">
                                <UserCard key={product._id} product={product} />
                            </div>
                        ))}
                    </div>
                 {/* </div> */}
             </div>
        //  </div>
     );
 }

 export default AdminBody;