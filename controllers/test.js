const db = require("../../models/index");
const User = db.User;
const Departement = db.Departement;

exports.createUser = async (req, res) => {
    const { username, email, password, idDepartement = null } = req.body
    await User.create({
        username,
        email,
        password,
        idDepartement,
        //    title: req.body.title,
        //    author: req.body.author,
        //    UserLanguages: req.body.languages // an array [1, 2]
    }, {
        include: [{ association: Departement, as: "UserDepartement" }]
    })
        .then((user) => {
            res.json({ status: 200, message: "User created successfully!" });
        })
        .catch((err) => {
            res.json({ status: 400, message: err });
        });
};