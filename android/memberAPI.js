const router = require('express').Router();

const Member = require('../models/member');

router.get('/member', (req, res) => {

    Member.findOne({ where: {email: email} })
        .then((member) => {
            res.json({
                success: true,
                data: {
                    id: member.id,
                    email: member.email,
                    password: member.password,
                    attended:member.attended
                }
            });
        }).catch((err) => {
        res.json({
            success: false,
            message: "member not found"
        });
    });
});

router.post('/attendlibrary', (req, res) => {
    Member.findOne({ where: {email: req.body.email} })
        .then((member) => {
            if (member.attended) {
                res.json({
                    success: false,
                    message: `Error : ${member.email} already attend library`
                });
            } else {
                member.update({
                    attended: true
                }).then((member) => {
                    res.send({
                        success: true,
                        message: `${member.email} is attended`
                    });
                }).catch((err) => {
                    res.send({
                        success: false,
                        message: "Failed to update member
                    });
                });
            }
        }).catch((err) => {
        res.json({
            success: false,
            message: "member not found"
        });
    });

});

router.post('/exitlibrary', (req, res) => {
    Member.findOne({ where: {email: req.body.email} })
        .then((member) => {
            if (!member.attended) {
                res.json({
                    success: false,
                    message: `Error : ${member.email} already leave library`
                });
            } else {
                member.update({
                    attended: true
                }).then((member) => {
                    res.send({
                        success: true,
                        message: `${member.email} is leave`
                    });
                }).catch((err) => {
                    res.send({
                        success: false,
                        message: `Failed to update member`
                    });
                });
            }
        }).catch((err) => {
        res.json({
            success: false,
            message: "member not found"
        });
    });

});

module.exports = router;