const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    // User.belongsTo(Departement)
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                autoIncrement: false,
            },
            username: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING(64),
                // hashing : /^[0-9a-f]{64}$/i
            },
            // validate: {
            //     is: /^[0-9a-f]{64}$/is  // this is for hashing password
            // },

        },
        {
            freezeTableName: true,
            instanceMethods: {
                generateHash(password) {
                    return bcrypt.hash(password, bcrypt.genSaltSync(8));
                },
                validPassword(password) {
                    return bcrypt.compare(password, this.password);
                }
            }
        },
    );
    User.associate = models => {
        User.belongsTo(models.Departement);
    };

    return User
};