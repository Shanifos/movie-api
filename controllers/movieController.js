const models = require('../models')

async function getAllMovies(request, response) {
    const movies = await models.Movies.findAll({
        attributes: ['id', 'title', 'releaseDate', 'runTime', 'ratings'],
        include: [
            { model: models.Directors, attributes: ['director'] },
            { model: models.Genres },
        ],
    })
    response.send(movies)

}
async function movieById(request, response) {
    var requestInfo = request.params.MovieID
    const movies = await models.Movies.findAll({
        where: {
            id: requestInfo
        },
        attributes: ['title', 'releaseDate', 'runTime', 'ratings'],
        include: [
            { model: models.Directors },
            { model: models.Genres },
        ],
    })
    if (movies.length === 0) {
        response.send('No Movie Found')
    } else {
        response.send(movies)
    }
}

async function getByDirectorID(request, response) {
    var requestInfo = request.params.directorId
    const directorID = await models.Directors.findOne({
        attributes: ['director'],
        where: {
            id: requestInfo
        },
        include: [{
            model: models.Movies,
            attributes: ['title', 'releaseDate', 'runTime', 'ratings'],
            include: [{
                model: models.Genres,
                attributes: ['genre']
            }]
        }],
    })
    response.send(directorID)
}
async function getByGenre(request, response) {
    var requestInfo = request.params.genre

    const genre = await models.Genres.findOne({
        attributes: ['genre'],
        where: {
            genre: requestInfo,
        },
        include: [{
            model: models.Movies,
            attributes: ['title', 'releaseDate', 'runTime', 'ratings'],
            include: [{
                model: models.Directors,
                attributes: ['director']
            }]
        }]
    })
    response.send(genre)
}
async function postMovies(request, response) {
    const { title, directors, releaseDate, rating, runTime, genres } = request.body

    if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
        response.status(400).send('the following are required title, directors, releaseDate, rating, runTime, genres if more then one director or genre seperate with comma')
    }

    const [movie] = await models.Movies.findOrCreate({
        where: { title: title, releaseDate: releaseDate, runTime: runTime, ratings: rating },
    })

    await directors.split(',').forEach(async (name) => {
        const [director] = await models.Directors.findOrCreate({
            where: { director: name.trim() },
        })
        await models.MoviesDirector.findOrCreate({
            where: { movieId: movie.id, directorId: director.id }
        })
    })

    await genres.split(',').forEach(async (genre) => {
        const [genres] = await models.Genres.findOrCreate({
            where: { genre: genre.trim() },
        })
        await models.MovieGenre.findOrCreate({
            where: { movieId: movie.id, genreId: genres.id }
        })
    })
    response.send('Movie info posted')
}


async function patchMovie(request, response) {
    const { id, directors, rating } = request.body
    if (!id || !directors || !rating) {
        response.status(400).send('the following are required id, directors, ratingif more then one director or genre seperate with comma')
    }

    await models.MoviesDirector.destroy({
        where: { movieId: id }
    })

    await directors.split(',').forEach(async (name) => {
        const [director] = await models.Directors.findOrCreate({
            where: { director: name.trim() },
        })

        await models.MoviesDirector.findOrCreate({
            where: { movieId: id, directorId: director.id }
        })
    })
    await models.Movies.update({ ratings: rating }, { where: { id: id } })
    response.send('Movie info updated')
}
async function deleteMovie(request, response) {
    var requestInfo = request.params.id

    await models.MoviesDirector.destroy({
        where: { movieId: requestInfo }
    })
    await models.MovieGenre.destroy({
        where: { movieId: requestInfo }
    })
    await models.Movies.destroy({
        where: { id: requestInfo }
    })
    response.send(`Movie in row ${requestInfo} was deleted`)
}
module.exports = {
    deleteMovie,
    getAllMovies,
    movieById,
    getByDirectorID,
    postMovies,
    getByGenre,
    patchMovie
}