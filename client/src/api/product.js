import axios from 'axios';
// import { response } from 'express';


export const createProduct = async(data) => {
    const response = await axios.post('/api/product', data);

    return response;
};