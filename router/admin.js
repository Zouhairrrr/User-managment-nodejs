const express = require('express');
const AdminRouter = express.Router();
const adminController = require('../controllers/adminController')


AdminRouter.post('/', async (req, res) => { adminController.InsertAdmin(req, res); });

module.exports = AdminRouter;