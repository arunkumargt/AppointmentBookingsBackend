const express = require('express');
const router = express.Router();

// Controller
const userController = require('../controllers/user.controller');

// Routings
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.post('/createUser', userController.createUser);
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getUserById/:id', userController.getUserById);
router.put('/updateUserById/:id', userController.updateUserById);
router.delete('/deleteUserById/:id', userController.deleteUserById);
router.get('/changeUserIsAliveById/:id', userController.changeUserIsAliveById);

module.exports = router;