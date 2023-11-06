const express = require('express');
const router = express.Router();
const {handleUserSignup,handleLogin,LoginCheck,LogoutUser,HandleProfile,HandleSaveProfile,handleSignupPage} = require('../Controllers/UserController')

router.get('/', LoginCheck)

router.get('/signup',handleSignupPage)  

router.post('/',handleUserSignup);
router.post('/login',handleLogin);

router.get('/Logout', LogoutUser)

router.get('/Profile',HandleProfile)

router.post('/Profile',HandleSaveProfile)

module.exports = router;
