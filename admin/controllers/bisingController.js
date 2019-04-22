const router = require('express').Router();

const Bising = require('../../models/bising');

router.get('/list', (req, res) => {
    Bising.findAll()
        .then((bisings) => {
            return res.json({
                success: true,
                data: bisings
            })
        }).catch((err) => {
        return res.json({
            success: false,
            message: err.message
        });
    });
});

module.exports = router;