const { User } = require('../models/index')

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body
    await User.create({
        username, email, password
    })
        .then((user) => {
            res.json({ message: "User created successfully!" });
            return res.send(user)
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};

exports.GetAllUsers = async (req, res) => {
    // const { username, email, password } = req.body
    await User.findAll()
        .then((user) => {
            res.json({ message: "Users found successfully!" });
            return res.send( JSON.stringify(user))
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
}













// const { User } = require('../models/index')
// async function getUsers(req, res) {
//     const users = await User.findAll()
//     // res.type = 'json'
//     res.send(JSON.stringify(users))
// }


// async function InsertUser(req, res) {

//     // console.log('azert' + req.body);
//     const { username, email, password, idDepartement } = req.body
//     try {
//         // console.log('uazoakrasers =>' + user);
//         const user = await User.create({ username, email, password, idDepartement })
//         return res.send(user)
//     } catch (error) {

//         console.log('ERROR => ' + error);
//         return res.sendStatus(500).json(error);
//     }
// }


// async function UpdateUser(req, res) {
//     const users = await User.findAll()
//     // res.type = 'json'
//     res.send(JSON.stringify(users))
// }
// async function DropUser(req, res) {
//     const users = await User.findAll()
//     // res.type = 'json'
//     res.send(JSON.stringify(users))
// }

// module.exports = {
//     getUsers, InsertUser, UpdateUser, DropUser
// }

