import React from 'react';
// calling component
import AdminHeader from './AdminHeader';
import AdminActionBtns from './AdminActionBtns';
import AdminCategoryModal from './AdminCategoryModal';
import AdminProjectModal from './AdminProjectModal';


const AdminDashboard = () => (
        <section>   
            <AdminHeader />
            <AdminActionBtns />
            <AdminCategoryModal />
            < AdminProjectModal />
        </section>
);

export default AdminDashboard;