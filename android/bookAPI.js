const router = require('express').Router();

const Book = require('../models/book');

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Android service available"
    })
});

router.get('/book', (req, res) => {
    let token = req.query.token;

    if (token) {
        Book.findOne({ where: {token: token} })
        .then((book) => {
            res.json({
                success: true,
                data: {
                    id: book.id,
                    name: book.name,
                    libraryId: book.libraryId,
                    author: book.author
                }
            });
        }).catch((err) => {
            res.json({
                success: false,
                message: "Book not found"
            }); 
        });
    } else {
        res.json({
            success: false,
            message: "Book token not given"
        });
    }
});

router.get('/bookall', (req, res) => {

    if (name) {
        Book.findAll()
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
    } else {
        res.json({
            success: false,
            message: "Book token not given"
        });
    }
});

router.post('/borrowbook', (req, res) => {
    let token = req.body.token;

    if (token) {
        Book.findOne({ where: {token: token} })
        .then((book) => {
            if (book.attended) {
                res.json({
                    success: false,
                    message: `Error : ${book.name} already borrowed`
                });
            } else {
                book.update({
                    attended: true
                }).then((book) => {
                    res.send({
                        success: true,
                        message: `${book.name} is borrowed successfully`
                    });
                }).catch((err) => {
                    res.send({
                        success: false,
                        message: "Failed to update book"
                    });
                });
            }
        }).catch((err) => {
            res.json({
                success: false,
                message: "Book not found"
            }); 
        });
    } else {
        res.json({
            success: false,
            message: "Book token not given"
        });
    }
});

router.post('/returnbook', (req, res) => {
    let token = req.body.token;

    if (token) {
        Book.findOne({ where: {token: token} })
            .then((book) => {
                if (!book.attended) {
                    res.json({
                        success: false,
                        message: `Error : ${book.name} already returned`
                    });
                } else {
                    book.update({
                        attended: true
                    }).then((book) => {
                        res.send({
                            success: true,
                            message: `${book.name} is returned successfully`
                        });
                    }).catch((err) => {
                        res.send({
                            success: false,
                            message: "Failed to update book"
                        });
                    });
                }
            }).catch((err) => {
            res.json({
                success: false,
                message: "Book not found"
            });
        });
    } else {
        res.json({
            success: false,
            message: "Book token not given"
        });
    }
});

module.exports = router;