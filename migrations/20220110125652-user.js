'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn(
      'User', // name of Source model
      'DepartementId', // name of the key we're adding 
      {
        type: Sequelize.UUID,
        references: {
          model: 'Departement', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'User', // name of Source model
      'DepartementId' // key we want to remove
    );
  }
};
