/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mentors_choices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mentoring_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Mentoring_types',
          key: 'id'
          // as: 'location'
        }
      },
      mentor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Mentors',
          key: 'id'
          // as: 'location'
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
    return queryInterface.dropTable('Mentors_choices');
  }
};
