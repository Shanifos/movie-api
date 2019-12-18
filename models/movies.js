const Movies = (connection, Sequelize) => {
  return connection.define(
    'movies',
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: {
        type: Sequelize.STRING
      },
      releaseDate: { type: Sequelize.STRING },
      runTime: { type: Sequelize.STRING },
      ratings: { type: Sequelize.STRING },
    },
    { paranoid: true }
  )
}
// Movies.associate

module.exports = Movies
