const Sequelize = require('sequelize')
const MoviesModel = require('./movies')
const DirectorModel = require('./directors')
const GenreModel = require('./genres')
const MoviesDirectorModel = require('./MoviesDirectors')
const MovieGenreModel = require('./MovieGenre')

const allConfigs = require('../config/sequelize')
const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

const { host, database, username, password, dialect } = allConfigs[environment]

const connection = new Sequelize(database, username, password, {
  host,
  dialect
})


const Movies = MoviesModel(connection, Sequelize)
const Genres = GenreModel(connection, Sequelize)
const Directors = DirectorModel(connection, Sequelize)
const MoviesDirector = MoviesDirectorModel(connection, Sequelize)
const MovieGenre = MovieGenreModel(connection, Sequelize)

const Op = Sequelize.Op

Movies.belongsToMany(Directors, { through: MoviesDirector })
Directors.belongsToMany(Movies, { through: MoviesDirector })

Movies.belongsToMany(Genres, { through: MovieGenre })
Genres.belongsToMany(Movies, { through: MovieGenre })

module.exports = {
  Movies,
  Directors,
  Genres,
  MovieGenre,
  MoviesDirector,
  Op
}
