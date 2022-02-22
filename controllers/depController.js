const { Departement } = require('../models/index')

async function getDepartement(req, res) {
    const Departements = await Departement.findAll()
    // res.type = 'json'
    res.send( JSON.stringify(Departements))
}

//* insert Departement in database
async function InsertDepartement(req, res) {
    // console.log('azert' + req.body);
    const { Dpname, description} = req.body
    try { 

        const department = await Departement.create({ Dpname, description })
        return  res.send(department)
    } catch (error) {
        console.log('ERROR => ' + error);
        return res.sendStatus(500).json(error);
    }
}

async function dropDepartement(req, res) {
    const Departements = await Departement.findAll()
    // res.type = 'json'
    res.send(JSON.stringify(Departements))
}
async function updateDepartement(req, res) {
    const Departements = await Departement.findAll()
    // res.type = 'json'
    res.send(JSON.stringify(Departements))
}

module.exports = {
    getDepartement, InsertDepartement, dropDepartement, updateDepartement
}