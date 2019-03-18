const router = require('express').Router();

const Book = require('../models/book');

router.get('/bookall', (req, res) => {
    let name = req.query.name;
        Book.findAll({})
            .then((books) => {
                res.json({
                    success: true,
                    data: books
                });
            }).catch((err) => {
            res.json({
                success: false,
                message: "Book not found"
            });
        });

});

module.exports = router;