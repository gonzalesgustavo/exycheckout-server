const express = require('express');

const router = express.Router();

const { login, register, delUser, updateUsr, promotion } = require('../controllers/user.controller');


router.post('/login', login);

router.post('/register', register);

router.post('/promote/:id', promotion);

router.patch('/update/:id', updateUsr);

router.delete('/remove/:id', delUser);


module.exports = router;