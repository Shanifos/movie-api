'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('movies', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: {
        type: Sequelize.STRING
      },
      releaseDate: { type: Sequelize.STRING },
      runTime: { type: Sequelize.INTEGER },
      ratings: { type: Sequelize.STRING },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        )
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
    await queryInterface.createTable('directors', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      director: {
        type: Sequelize.STRING
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        )
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('moviesDirectors', {

      directorId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        reference: { model: 'Directors', key: 'id' }
      },
      movieId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        reference: { model: 'Movies', key: 'id' }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        )
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('genres', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      genre: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        )
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })

    return queryInterface.createTable('movieGenres', {
      genreId: {
        type: Sequelize.INTEGER, primaryKey: true,
        reference: { model: 'genre', key: 'id' }
      },
      movieId: {
        type: Sequelize.INTEGER, primaryKey: true,
        reference: { model: 'Movies', key: 'id' }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        )
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })



  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movies')
    await queryInterface.dropTable('genres')
    await queryInterface.dropTable('ratings')
    await queryInterface.dropTable('directors')
    await queryInterface.dropTable('moviesDirectors')
    return queryInterface.dropTable('genreMovies')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
