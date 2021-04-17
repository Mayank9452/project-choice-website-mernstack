import React from 'react';

const AdminDashboard = () => {
    // ###### view #####
    const showHeader = () => (
        
        <div className='bg-dark text-white py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>
                            <i className='fas fa-home'> Dashboard</i>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );

    const  showActionBtns = () => (
        <div className='bg-light my-2'>
            <div className='container'>
                <div className='row pb-3'>
                    <div className='d-grid gap-2 col-md-4 my-1'>
                        <button className='btn btn-outline-info btn-block'>
                            <i className='fas fa-plus'> Add Category</i>
                        </button>
                    </div>

                    <div className='d-grid gap-2 col-md-4 my-1'>
                        <button className='btn btn-outline-warning btn-block'>
                            <i className='fas fa-plus'> Add second cat</i>
                        </button>
                    </div>

                    <div className='d-grid gap-2 col-md-4 my-1'>
                        <button className='btn btn-outline-success btn-block'>
                            <i className='fas fa-money-check-alt'>  View Order</i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
//// ##### RENDER ######
    return (
        <section>
            { showHeader() }
            { showActionBtns() }
        </section>
    )
};

export default AdminDashboard;