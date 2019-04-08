const router = require('express').Router();

const Bising = require('../models/bising');


router.post('/bising', (req, res) => {
    Borrow.createBorrow({
        sound: req.body.sound,

    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : `);
        }


    }).then((bising) => {
        res.send({
            success: true,
            message: `${bising.id} is created`
        });
    }).catch((err) => {
        res.send({
            success: false,
            message: `Failed to create bising`
        });
    });
});

module.exports = router;