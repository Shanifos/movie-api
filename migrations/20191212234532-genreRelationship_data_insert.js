'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('movieGenres', [
      {
        genreId: Sequelize.literal('(select id from genres where genre = "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "12 Angry Men")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre = "Science fiction")'),
        movieId: Sequelize.literal('(Select id from movies where title = "2001: A Space Odyssey")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre = "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "A Clockwork Orange")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Fantasy")'),
        movieId: Sequelize.literal('(Select id from movies where title = "A Clockwork Orange")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy")'),
        movieId: Sequelize.literal('(Select id from movies where title = "A Night At The Opera")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "A Streetcar Named Desire")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "All About Eve")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "All The President\'s Men")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy")'),
        movieId: Sequelize.literal('(Select id from movies where title = "American Graffiti")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Romantic comedy")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Annie Hall")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Apocalypse Now")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Epic")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Ben-Hur")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Science fiction")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Blade Runner")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Biography")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Bonnie And Clyde")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Bonnie And Clyde")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Screwball comedy")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Bringing Up Baby")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Butch Cassidy And The Sundance Kid")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Western")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Butch Cassidy And The Sundance Kid")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Cabaret")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Musical")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Cabaret")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Romance")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Casablanca")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Mystery")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Chinatown")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Romance")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Chinatown")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Citizen Kane")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "City Lights")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Do The Right Thing")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Film noir")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Double Indemnity")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Black comedy")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Dr. Strangelove")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Duck Soup")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Fantasy")'),
        movieId: Sequelize.literal('(Select id from movies where title = "E.T")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Science fiction")'),
        movieId: Sequelize.literal('(Select id from movies where title = "E.T")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Easy Rider")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Forrest Gump")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Romance")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Gone With The Wind")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title = "Goodfellas")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Western")'),
        movieId: Sequelize.literal('(select id from movies where title = "High Noon")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama" )'),
        movieId: Sequelize.literal('(select id from movies where title = "In The Heat Of The Night")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Intolerance")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Screwball comedy")'),
        movieId: Sequelize.literal('(select id from movies where title = "It Happened One Night")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "It\'S A Wonderful Life")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Fantasy")'),
        movieId: Sequelize.literal('(select id from movies where title = "It\'S A Wonderful Life")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title= "Jaws")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Adventure")'),
        movieId: Sequelize.literal('(Select id from movies where title= "King Kong")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Horror")'),
        movieId: Sequelize.literal('(Select id from movies where title= "King Kong")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Adventure")'),
        movieId: Sequelize.literal('(Select id from movies where title= "Lawrence Of Arabia")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Biography")'),
        movieId: Sequelize.literal('(Select id from movies where title= "Lawrence Of Arabia")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy")'),
        movieId: Sequelize.literal('(Select id from movies where title = "M*A*S*H")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(Select id from movies where title= "Midnight Cowboy")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Musical")'),
        movieId: Sequelize.literal('(Select id from movies where title= "Swing Time")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Romantic comedy")'),
        movieId: Sequelize.literal('(Select id from movies where title= "Swing Time")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Mr. Smith Goes to Washington")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Nashville")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Musical")'),
        movieId: Sequelize.literal('(select id from movies where title = "Nashville")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Network")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "North By Northwest")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "On The Waterfront")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "One Flew Over The Cuckoo\'s Nest")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Platoon")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Horror")'),
        movieId: Sequelize.literal('(select id from movies where title = "Psycho")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Mystery"	)'),
        movieId: Sequelize.literal('(select id from movies where title = "Psycho")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Thriller"	)'),
        movieId: Sequelize.literal('(select id from movies where title = "Psycho")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Pulp Fiction")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Biography")'),
        movieId: Sequelize.literal('(select id from movies where title = "Raging Bull")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Adventure")'),
        movieId: Sequelize.literal('(select id from movies where title = "Raiders Of The Lost Ark")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Mystery")'),
        movieId: Sequelize.literal('(select id from movies where title = "Rear Window")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Rocky")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Saving Private Ryan")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Schindler\'s List")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Western")'),
        movieId: Sequelize.literal('(select id from movies where title = "Shane")'),
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Musical comedy")'),
        movieId: Sequelize.literal('(select id from movies where title = "Singin\' In The Rain")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Musical")'),
        movieId: Sequelize.literal('(select id from movies where title = "Snow White And The Seven Dwarfs")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy")'),
        movieId: Sequelize.literal('(select id from movies where title = "Some Like It Hot")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Sophie\'S Choice")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Epic")'),
        movieId: Sequelize.literal('(select id from movies where title = "Spartacus")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Science fiction")'),
        movieId: Sequelize.literal('(select id from movies where title = "Star Wars")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Adventure")'),
        movieId: Sequelize.literal('(select id from movies where title = "Star Wars")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Sullivan\'s Travels")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Sunrise")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Romance")'),
        movieId: Sequelize.literal('(select id from movies where title = "Sunrise")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Sunset Blvd")')
      },

      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Taxi Driver")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Romance")'),
        movieId: Sequelize.literal('(select id from movies where title = "The African Queen")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Apartment")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Best Years Of Our Lives")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Bridge On The River Kwai")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Deer Hunter")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The French Connection")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy")'),
        movieId: Sequelize.literal('(select id from movies where title = "The General")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Godfather")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Godfather Part Ii")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Gold Rush")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Graduate")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Grapes Of Wrath")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Last Picture Show")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Adventure")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Lord Of The Rings: The Fellowship Of The Ring")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Lord Of The Rings: The Fellowship Of The Ring")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Fantasy")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Lord Of The Rings: The Fellowship Of The Ring")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Maltese Falcon")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Romantic comedy")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Philadelphia Story")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Western")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Searchers")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Shawshank Redemption")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Silence Of The Lambs")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama" )'),
        movieId: Sequelize.literal('(select id from movies where title = "The Sixth Sense" )')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Thriller" )'),
        movieId: Sequelize.literal('(select id from movies where title = "The Sixth Sense" )')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Mystery" )'),
        movieId: Sequelize.literal('(select id from movies where title = "The Sixth Sense" )')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Musical")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Sound Of Music" )')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Sound Of Music" )')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Treasure Of The Sierra Madre" )')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Adventure")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Treasure Of The Sierra Madre" )')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Western")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Wild Bunch" )')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Fantasy")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Wizard Of Oz")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Musical")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Wizard Of Oz")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Titanic")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Romance")'),
        movieId: Sequelize.literal('(select id from movies where title = "Titanic")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "To Kill A Mockingbird")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy-drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Tootsie")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Romance")'),
        movieId: Sequelize.literal('(select id from movies where title = "Tootsie")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Comedy")'),
        movieId: Sequelize.literal('(select id from movies where title = "Toy Story")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Western")'),
        movieId: Sequelize.literal('(select id from movies where title = "Unforgiven")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Romance")'),
        movieId: Sequelize.literal('(select id from movies where title = "Vertigo")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "West Side Story")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Musical")'),
        movieId: Sequelize.literal('(select id from movies where title = "West Side Story")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Drama")'),
        movieId: Sequelize.literal('(select id from movies where title = "Who\'s Afraid Of Virginia Woolf?")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Biography")'),
        movieId: Sequelize.literal('(select id from movies where title ="Yankee Doodle Dandy")')
      },
      {
        genreId: Sequelize.literal('(select id from genres where genre= "Musical")'),
        movieId: Sequelize.literal('(select id from movies where title ="Yankee Doodle Dandy")')
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movieGenre')

  }
};
