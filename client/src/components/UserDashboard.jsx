import React, { useEffect } from 'react';
import AdminBody from './AdminBody';
//redux
import { useDispatch } from "react-redux";
import { getCategories } from "../redux/actions/categoryActions";
import { getProducts } from "../redux/actions/productActions";

const UserDashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return (
        <section>   
            {/* <AdminHeader />
            <AdminActionBtns />
            <AdminCategoryModal />
            <AdminProjectModal /> */}
            <AdminBody />
        </section>
    )
}

export default UserDashboard;