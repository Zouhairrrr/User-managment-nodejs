
const Admin = (sequelize, DataTypes) => sequelize.define('Admin', {
    adminName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING(64),
        hashing: true,
    },
    // validate: {
    //     is: /^[0-9a-f]{64}$/is  // this is for hashing password
    // },
}, {
    // Other model options go here
    freezeTableName: true
});


module.exports = Admin;