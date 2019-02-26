const router = require('express').Router();

const Borrow = require('../models/borrow');
const Book = require('../models/book');

router.get('/borrow', (req, res) => {
    let memberId = req.query.memberId;

    Borrow.findAll({ where: {memberId: memberId} })
        .then((borrows) => {
            res.json({
                success: true,
                data: borrows
            });
        }).catch((err) => {
        res.json({
            success: false,
            message: "borrow not found"
        });
    });
});

router.post('/borrow', (req, res) => {
    Book.findOne({ where: {id: req.body.bookId} })
        .then((book) => {
            if (book.attended) {
                res.json({
                    success: false,
                    message: `Error : ${book.name} already borrowes`
                });
            } else {
                Borrow.createBorrow({
                    bookId: req.body.bookId,
                    memberId: req.body.memberId,
                    numDay: req.body.numDay
                }, (err, data) => {
                    if (err) {
                        console.log(`Error : ${err}`);
                    } else {
                        console.log(`Token : `);
                    }


                }).then((borrow) => {
                    res.send({
                        success: true,
                        message: `${borrow.id} is created`
                    });
                }).catch((err) => {
                    res.send({
                        success: false,
                        message: `Failed to create borrow`
                    });
                });
            }
        }).catch((err) => {
        res.json({
            success: false,
            message: "book not found"
        });
    });

});

module.exports = router;