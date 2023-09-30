const express = require('express');
const router = express.Router();

const { verifyUserEmail, verifyMarketerEmail, marketerDetails, verifyCode } = require('../Controllers/VerifyEmailController');
const { forgotPassword, resetPassword } = require('../Controllers/UserController');


const {
    allowIfAdmin,
    verifyTokenAndUser,
    allowIfLoggedin
} = require("../Middlewares/AuthMiddleware");

router.get('/verify-user-email-token', verifyUserEmail);


router.post('/forgot-password', forgotPassword);
router.post('/reset/:resetToken', resetPassword);

// router.post('/verify-code', verifyTokenAndUser, verifyCode);

module.exports = router;
