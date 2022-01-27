const express = require('express');
const DepartementRouter = express.Router();
const depController = require('../controllers/depController')

DepartementRouter.post('/', async (req, res) => depController.InsertDepartement(req, res));

module.exports = DepartementRouter;