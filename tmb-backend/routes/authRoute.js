const { Router } = require('express');
const signup = require('../controller/authController');

const router = Router();

router.route('/signup').post(signup);

module.exports = router;