const bodyParser = require('body-parser')
const express = require('express')
const models = require('./models')
const Sequelize = require('sequelize')
const app = express()
const { deleteMovie, getAllMovies, movieById, getByDirectorID, postMovies, getByGenre,
  patchMovie } = require('./controllers/movieController')

app.get('/movies', getAllMovies)
app.get('/movies/:MovieID', movieById)
app.get('/directors/:directorId', getByDirectorID)
app.get('/genre/:genre', getByGenre)

app.delete('/delete/:id', deleteMovie)
app.use(bodyParser.json())
app.post('/movies', postMovies)

app.patch('/movies', patchMovie)



const server = app.listen(1337, () => {
  console.log('Listening on port 1337')
})
module.exports = server
