exports.create = (req, res) => {
    // console.log('Inside categoryController');

    setTimeout(() => {
        res.json({
            successMessage: `${req.body.category} was cretated!`,
        });
    }, 5000);
};