'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Games', 'numPlayers', 'maxPlayers');
    await queryInterface.removeColumn('Games', 'estPlayTime');

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Games', 'maxPlayers', 'numPlayers');
    await queryInterface.addColumn('Games', 'estPlayTime', {
      type: Sequelize.INTEGER
    });

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
