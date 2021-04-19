import React from 'react';


const  AdminActionBtns = () => (
    <div className='bg-light my-2'>
        <div className='container'>
            <div className='row pb-3'>
                <div className='d-grid gap-2 col-md-4 my-1'>
                    <button type="button" className='btn btn-outline-info' data-bs-toggle='modal' data-bs-target='#addCategoryModal'>
                        <i className='fas fa-plus'> Add Category</i>
                    </button>
                </div>

                <div className='d-grid gap-2 col-md-4 my-1'>
                    <button type="button" className='btn btn-outline-warning' data-bs-toggle='modal' data-bs-target='#addProjectModal'>
                        <i className='fas fa-plus'> Add Project</i>
                    </button>
                </div>

                <div className='d-grid gap-2 col-md-4 my-1'>
                    <button type="button" className='btn btn-outline-success'>
                        <i className='fas fa-money-check-alt'>  View Order</i>
                    </button>
                </div>

            </div>
        </div>
    </div>
);


export default AdminActionBtns;