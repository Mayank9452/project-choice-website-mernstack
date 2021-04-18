exports.create = (req, res) => {
    // console.log('Inside categoryController');
    console.log(req.user);
    setTimeout(() => {
        res.json({
            successMessage: `${req.body.category} was cretated!`,
        });
    }, 5000);
};