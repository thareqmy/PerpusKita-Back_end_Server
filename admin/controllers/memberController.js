const router = require('express').Router();

const Member = require('../../models/member');

router.post('/create', (req, res) => {
    let body = {
        email: req.body.email,
        password: req.body.password
    }

    Member.create({
        email: body.email,
        password: body.password
    }).then((member) => {
        return res.json({
            success: true,
            message: "member data created",
            data: member
        });
    }).catch((err) => {
        return res.json({
            success: false,
            message: err.message
        })
    });
});

router.post('/update', (req, res) => {
    let body = {
        email: req.body.email,
        password: req.body.password,
        id: req.body.id
    }

    Member.findOne({ where: {id : body.id}})
        .then((member) => {
            if (!member) {
                return res.json({
                    success: false,
                    message: "member not found"
                });
            }

            Member.update({
                email: body.email,
                password: body.password
            }).then((member) => {
                return res.json({
                    success: true,
                    message: "member successfully updated",
                    data: member
                });
            }).catch((err) => {
                return res.json({
                    success: false,
                    message: err.message
                });
            });
        }).catch((err) => {
        return res.json({
            success: false,
            message: err.message
        });
    });
});

router.post('/delete', (req, res) => {
    let body = {
        id: req.body.id
    }

    Member.findOne({ where: {id : body.id}})
        .then((member) => {
            if (!member) {
                return res.json({
                    success: false,
                    message: "librmeberary not found"
                })
            }

            member.destroy().
            then(() => {
                return res.json({
                    success: true,
                    message: "member successfully deleted"
                });
            }).catch((err) => {
                return res.json({
                    success: false,
                    message: err.message
                });
            });
        }).catch((err) => {
        return res.json({
            success: false,
            message: err.message
        });
    });
});

router.get('/list', (req, res) => {
    Member.findAll()
        .then((members) => {
            return res.json({
                success: true,
                data: members
            })
        }).catch((err) => {
        return res.json({
            success: false,
            message: err.message
        });
    });
});

module.exports = router;