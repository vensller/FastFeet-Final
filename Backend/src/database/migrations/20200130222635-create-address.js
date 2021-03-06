module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'addresses',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        house_number: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        complement: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        state: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        zip_code: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        recipient_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'recipients', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        uniqueKeys: {
          address_unique: {
            fields: ['street', 'house_number', 'state', 'city', 'recipient_id'],
          },
        },
      }
    );
  },

  down: queryInterface => {
    return queryInterface.dropTable('addresses');
  },
};
