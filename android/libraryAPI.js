const router = require('express').Router();

const Library = require('../models/library');

router.get('/library', (req, res) => {
    let location = req.query.location;

    Library.findOne({ where: {location: location} })
        .then((library) => {
            res.json({
                success: true,
                data: {
                    id: library.id,
                    name: library.name,
                    location: library.location
                }
            });
        }).catch((err) => {
        res.json({
            success: false,
            message: "library not found"
        });
    });
});

module.exports = router;