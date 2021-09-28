/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mentees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'location'
        }
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Locations',
          key: 'id',
          as: 'location'
        }
      },
      industry_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Industries',
          key: 'id',
          as: 'location'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Mentees');
  }
};
