module.exports = (sequelize, DataTypes) => {

    const Departement = sequelize.define('Departement', {

        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            autoIncrement: false,
        },
        Dpname: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
    }, {
        freezeTabelName: true,
        // hasMany: [{ association: User ,foreignKey:"idUser"}]  // hasMany. 
    });
    Departement.associate = models => {
        Departement.hasMany(models.User);
    };
    return Departement;
}