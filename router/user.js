const express = require('express');
const UsersRouter = express.Router();


const userController = require('../controllers/userController')

UsersRouter.post('/', async (req, res) => userController.createUser(req, res));

module.exports = UsersRouter;