const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticateJWT = require ('../middleware/auth.middleware');


router.post('/', authController.authUser);
router.get('/me', authenticateJWT, authController.me);



module.exports = router;