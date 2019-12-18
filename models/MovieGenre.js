const MovieGenre = (connection, Sequelize) => {
    return connection.define(
        'MovieGenres', {
        genreId: {
            type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'genres', key: 'id' }
        },
        movieId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'Movies', key: 'id' } },
    },
        { paranoid: true })

}

module.exports = MovieGenre