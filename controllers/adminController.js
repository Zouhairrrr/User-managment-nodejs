const { Admin } = require('../models/index');

//get all Admins

async function getAdmin(req, res) {
    const Admins = await Admin.findAll()
    // res.type = 'json'
    res.send(JSON.stringify(Admins))
}

//Set Admins to database

async function InsertAdmin(req, res) {
    // console.log('azert' + req.body);
    const { adminName, email, password } = req.body
    try {
        const admin = await Admin.create({ adminName, email, password })
        return res.send(admin)
    } catch (error) {
        console.log('ERROR => ' + error);
        return res.sendStatus(500).json(error);
    }
}

// delete Admin from database

async function dropAdmin(req, res) {
    const Admins = await Admin.findAll()
    // res.type = 'json'
    res.send(JSON.stringify(Admins))
}

// Update admin from Admin table 

async function updateAdmin(req, res) {
    const Admins = await Admin.findAll()
    // res.type = 'json'
    res.send(JSON.stringify(Admins))
}

// exports all modules 
module.exports = {
    getAdmin, InsertAdmin, dropAdmin, updateAdmin
}