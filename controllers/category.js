const Category = require('../models/Category');


exports.create = async(req, res) => {
    // console.log('Inside categoryController');
    // console.log(req.user);
    // setTimeout(() => {
    //     res.json({
    //         successMessage: `${req.body.category} was cretated!`,
    //     });
    // }, 5000);
    const { category } = req.body;
    try {
        let newCategory = new Category();
        newCategory.category = category;

        newCategory = await newCategory.save();

        res.status(200).json({
            successMessage: `${newCategory.category} was created!`,
        })
    } catch (err) {
        console.log('category create error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later',
        })
    }
};

exports.readAll = async(req, res) => {

    try {
        const categories = await Category.find({});

        res.status(200).json({
            categories,
        });
    } catch (err) {
        console.log('category readAll error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later',
        })
    }
};