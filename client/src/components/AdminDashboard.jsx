import React, { useEffect } from 'react';
// calling component
import AdminHeader from './AdminHeader';
import AdminActionBtns from './AdminActionBtns';
import AdminCategoryModal from './AdminCategoryModal';
import AdminProjectModal from './AdminProjectModal';
//redux
import { useDispatch } from "react-redux";
import { getCategories } from "../redux/actions/categoryActions";
import { getProducts } from "../redux/actions/productActions";


const AdminDashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return(
        <section>   
            <AdminHeader />
            <AdminActionBtns />
            <AdminCategoryModal />
            < AdminProjectModal />
        </section>
    );
};

export default AdminDashboard;