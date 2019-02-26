const router = require('express').Router();
const fs = require('fs');

const Borrow = require('../../models/borrow');
const Book = require('../../models/book');
const Member = require('../../models/member');

router.post('/create', (req, res) => {
    let body = {
        memberId: req.body.memberId,
        bookId: req.body.bookId,
        numDay: req.body.numDay
    }

    Borrow.findOne({ where: { memberId: body.memberId,bookId: body.bookId}})
        .then((borrow) => {
            if (borrow) {
                return res.json({
                    success: false,
                    message: "Borrow has already been created"
                });
            }
            Book.findOne({ where: { bookId: body.bookId}})
                .then((book) => {
                    if (!book) {
                        return res.json({
                            success: false,
                            message: "No Book has that id"
                        });
                    }
                    Member.findOne({ where: { memberId:body.memberId}})
                        .then((member) => {
                            if (!member) {
                                return res.json({
                                    success: false,
                                    message: "No member has that id"
                                });
                            }
                    });

            });
            Borrow.createBorrow(body, (err, data) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: err.message
                    });
                }

                return res.json({
                    success: true,
                    message: "Borrow successfully created",
                    data: data
                })
            });
        }).catch((err) => {
        return res.json({
            success: false,
            message: "Internal error"
        });
    });
});

router.post('/update', (req, res) => {
    let body = {
        id: req.body.id,
        numDay: req.body.numDay
    }

    Borrow.updateBorrow(body, (err, data) => {
        if (err) {
            return res.json({
                success: false,
                message: err.message
            });
        }

        return res.json({
            success: true,
            message: "Borrow data updated",
            data: data
        })
    });
});

router.post('/delete', (req, res) => {
    let body = {
        id: req.body.id
    }

    Borrow.deleteBorrow(body, (err) => {
        if (err) {
            return res.json({
                success: false,
                message: err.message
            });
        }

        return res.json({
            success: true,
            message: "borrow data deleted"
        });
    });
});

router.get('/list', (req, res) => {
    Borrow.findAll()
        .then((borrows) => {
            return res.json({
                success: true,
                data: borrows
            })
        }).catch((err) => {
        return res.json({
            success: false,
            message: err.message
        });
    });
});

module.exports = router;