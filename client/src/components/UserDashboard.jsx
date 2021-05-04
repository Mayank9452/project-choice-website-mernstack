import React, { useEffect } from 'react';
import UserBody from './UserBody';
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
            <UserBody />
        </section>
    )
}

export default UserDashboard;