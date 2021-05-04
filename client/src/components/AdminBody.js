import React from 'react';
import Card from './Card';
//redux
import { useSelector } from "react-redux";

 const AdminBody = () =>  {
     const {products} = useSelector(state => state.products);
     return (
         <div className='container'>
             <div className='row row-cols-1 row-cols-md-3 g-4'>
                 {/* <div className="col-sm"> */}
                    {/* <div className='card-group'> */}
                        {products && products.map(product => (
                            <div className="col">
                                <Card key={product._id} product={product} />
                            </div>
                        ))}
                    </div>
                 {/* </div> */}
             </div>
        //  </div>
     );
 }

 export default AdminBody;