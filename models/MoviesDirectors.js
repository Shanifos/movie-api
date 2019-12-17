const MoviesDirectors = (connection, Sequelize) => {
    return connection.define(
        'moviesDirectors', {
        directorId: {
            type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'Directors', key: 'id' }
        },
        movieId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: 'Movies', key: 'id' } },
    },
        { paranoid: true })

}

module.exports = MoviesDirectors