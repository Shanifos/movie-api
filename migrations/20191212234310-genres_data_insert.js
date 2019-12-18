'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genres', [
      { genre: 'Fantasy' },
      { genre: 'Drama' },
      { genre: 'Science fiction' },
      { genre: 'Comedy' },
      { genre: 'Romantic comedy' },
      { genre: 'Epic' },
      { genre: 'Biography' },
      { genre: 'Screwball comedy' },
      { genre: 'Comedy-drama' },
      { genre: 'Romance' },
      { genre: 'Mystery' },
      { genre: 'Film noir' },
      { genre: 'Black comedy' },
      { genre: 'Western' },
      { genre: 'Adventure' },
      { genre: 'Horror' },
      { genre: 'Musical comedy' },
      { genre: 'Musical' },
      { genre: 'Thriller' },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres')

  }
};
