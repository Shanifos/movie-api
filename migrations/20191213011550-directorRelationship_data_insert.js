'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MoviesDirectors', [
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Sidney Lumet")'),
        movieId: Sequelize.literal('(select id from movies where title = "12 Angry Men")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Stanley Kubrick")'),
        movieId: Sequelize.literal('(select id from movies where title = "2001: A Space Odyssey")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Stanley Kubrick")'),
        movieId: Sequelize.literal('(select id from movies where title = "A Clockwork Orange")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Sam Wood")'),
        movieId: Sequelize.literal('(select id from movies where title = "A Night At The Opera")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Elia Kazan")'),
        movieId: Sequelize.literal('(select id from movies where title = "A Streetcar Named Desire")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Joseph L. Mankiewicz")'),
        movieId: Sequelize.literal('(select id from movies where title = "All About Eve")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Alan J. Pakula")'),
        movieId: Sequelize.literal('(select id from movies where title = "All The President\'s Men")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "George Lucas")'),
        movieId: Sequelize.literal('(select id from movies where title = "American Graffiti")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Woody Allen")'),
        movieId: Sequelize.literal('(select id from movies where title = "Annie Hall")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Francis Ford Coppola")'),
        movieId: Sequelize.literal('(select id from movies where title = "Apocalypse Now")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "William Wyler")'),
        movieId: Sequelize.literal('(select id from movies where title = "Ben-Hur")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Ridley Scott")'),
        movieId: Sequelize.literal('(select id from movies where title = "Blade Runner")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Arthur Penn")'),
        movieId: Sequelize.literal('(select id from movies where title = "Bonnie And Clyde")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Howard Hawks")'),
        movieId: Sequelize.literal('(select id from movies where title = "Bringing Up Baby")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "George Roy Hill")'),
        movieId: Sequelize.literal('(select id from movies where title = "Butch Cassidy And The Sundance Kid")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Bob Fosse")'),
        movieId: Sequelize.literal('(select id from movies where title = "Cabaret")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Michael Curtiz")'),
        movieId: Sequelize.literal('(select id from movies where title = "Casablanca")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Roman Polanski")'),
        movieId: Sequelize.literal('(select id from movies where title = "Chinatown")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Orson Welles")'),
        movieId: Sequelize.literal('(select id from movies where title = "Citizen Kane")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Charles Chaplin")'),
        movieId: Sequelize.literal('(select id from movies where title = "City Lights")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Spike Lee")'),
        movieId: Sequelize.literal('(select id from movies where title = "Do The Right Thing")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Billy Wilder")'),
        movieId: Sequelize.literal('(select id from movies where title = "Double Indemnity")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Stanley Kubrick")'),
        movieId: Sequelize.literal('(select id from movies where title = "Dr. Strangelove")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Leo McCarey")'),
        movieId: Sequelize.literal('(select id from movies where title = "Duck Soup")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Steven Spielberg")'),
        movieId: Sequelize.literal('(select id from movies where title = "E.T")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Dennis Hopper")'),
        movieId: Sequelize.literal('(select id from movies where title = "Easy Rider")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Robert Zemeckis")'),
        movieId: Sequelize.literal('(select id from movies where title = "Forrest Gump")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Victor Fleming")'),
        movieId: Sequelize.literal('(select id from movies where title = "Gone With The Wind")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Sam Wood")'),
        movieId: Sequelize.literal('(select id from movies where title = "Gone With The Wind")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "George Cukor")'),
        movieId: Sequelize.literal('(select id from movies where title = "Gone With The Wind")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Chester Franklin")'),
        movieId: Sequelize.literal('(select id from movies where title = "Gone With The Wind")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "James Fitzpatrick")'),
        movieId: Sequelize.literal('(select id from movies where title = "Gone With The Wind")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Martin Scorsese")'),
        movieId: Sequelize.literal('(select id from movies where title = "Goodfellas")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Fred Zinnemann")'),
        movieId: Sequelize.literal('(select id from movies where title = "High Noon")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Norman Jewison")'),
        movieId: Sequelize.literal('(select id from movies where title = "In The Heat Of The Night")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "D. W. Griffith")'),
        movieId: Sequelize.literal('(select id from movies where title = "Intolerance")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Frank Capra")'),
        movieId: Sequelize.literal('(select id from movies where title = "It Happened One Night")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Frank Capra")'),
        movieId: Sequelize.literal('(select id from movies where title = "It\'S A Wonderful Life")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Steven Spielberg")'),
        movieId: Sequelize.literal('(select id from movies where title = "Jaws")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Ernest B. Schoedsack")'),
        movieId: Sequelize.literal('(select id from movies where title = "King Kong")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Merian C. Cooper")'),
        movieId: Sequelize.literal('(select id from movies where title = "King Kong")')
      },

      {
        directorId: Sequelize.literal('(Select id from directors where director = "David Lean")'),
        movieId: Sequelize.literal('(select id from movies where title = "Lawrence Of Arabia")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Robert Altman")'),
        movieId: Sequelize.literal('(select id from movies where title = "M*A*S*H")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "John Schlesinger")'),
        movieId: Sequelize.literal('(select id from movies where title = "Midnight Cowboy")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Charles Chaplin")'),
        movieId: Sequelize.literal('(select id from movies where title = "Modern Times")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Frank Capra")'),
        movieId: Sequelize.literal('(select id from movies where title = "Mr. Smith Goes to Washington")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Robert Altman")'),
        movieId: Sequelize.literal('(select id from movies where title = "Nashville")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Sidney Lumet")'),
        movieId: Sequelize.literal('(select id from movies where title = "Network")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Alfred Hitchcock")'),
        movieId: Sequelize.literal('(select id from movies where title = "North By Northwest")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Elia Kazan")'),
        movieId: Sequelize.literal('(select id from movies where title = "On The Waterfront")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Milos Forman")'),
        movieId: Sequelize.literal('(select id from movies where title = "One Flew Over The Cuckoo\'s Nest")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Oliver Stone")'),
        movieId: Sequelize.literal('(select id from movies where title = "Platoon")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Alfred Hitchcock")'),
        movieId: Sequelize.literal('(select id from movies where title = "Psycho")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Quentin Tarantino")'),
        movieId: Sequelize.literal('(select id from movies where title = "Pulp Fiction")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Martin Scorsese")'),
        movieId: Sequelize.literal('(select id from movies where title = "Raging Bull")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Steven Spielberg")'),
        movieId: Sequelize.literal('(select id from movies where title = "Raiders Of The Lost Ark")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Alfred Hitchcock")'),
        movieId: Sequelize.literal('(select id from movies where title = "Rear Window")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "John G. Avildsen")'),
        movieId: Sequelize.literal('(select id from movies where title = "Rocky")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Steven Spielberg")'),
        movieId: Sequelize.literal('(select id from movies where title = "Saving Private Ryan")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Steven Spielberg")'),
        movieId: Sequelize.literal('(select id from movies where title = "Schindler\'s List")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "George Stevens")'),
        movieId: Sequelize.literal('(select id from movies where title = "Shane")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Gene Kelly")'),
        movieId: Sequelize.literal('(select id from movies where title = "Singin\' In The Rain")')
      }, {
        directorId: Sequelize.literal('(Select id from directors where director = "Stanley Donen")'),
        movieId: Sequelize.literal('(select id from movies where title = "Singin\' In The Rain")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "William Cottrell")'),
        movieId: Sequelize.literal('(select id from movies where title = "Snow White And The Seven Dwarfs")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "David Hand")'),
        movieId: Sequelize.literal('(select id from movies where title = "Snow White And The Seven Dwarfs")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Wilfred Jackson")'),
        movieId: Sequelize.literal('(select id from movies where title = "Snow White And The Seven Dwarfs")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Larry Morey")'),
        movieId: Sequelize.literal('(select id from movies where title = "Snow White And The Seven Dwarfs")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Perce Pearce")'),
        movieId: Sequelize.literal('(select id from movies where title = "Snow White And The Seven Dwarfs")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Ben Sharpsteen")'),
        movieId: Sequelize.literal('(select id from movies where title = "Snow White And The Seven Dwarfs")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Billy Wilder")'),
        movieId: Sequelize.literal('(select id from movies where title = "Some Like It Hot")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Alan J. Pakula")'),
        movieId: Sequelize.literal('(select id from movies where title = "Sophie\'S Choice")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Stanley Kubrick")'),
        movieId: Sequelize.literal('(select id from movies where title = "Spartacus")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Anthony Mann")'),
        movieId: Sequelize.literal('(select id from movies where title = "Spartacus")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "George Lucas")'),
        movieId: Sequelize.literal('(select id from movies where title = "Star Wars")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Preston Sturges")'),
        movieId: Sequelize.literal('(select id from movies where title = "Sullivan\'s Travels")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "F. W. Murnau")'),
        movieId: Sequelize.literal('(select id from movies where title = "Sunrise")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Billy Wilder")'),
        movieId: Sequelize.literal('(select id from movies where title = "Sunset Blvd")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "George Stevens")'),
        movieId: Sequelize.literal('(select id from movies where title = "Swing Time")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Martin Scorsese")'),
        movieId: Sequelize.literal('(select id from movies where title = "Taxi Driver")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "John Huston")'),
        movieId: Sequelize.literal('(select id from movies where title = "The African Queen")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Billy Wilder")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Apartment")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "William Wyler")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Best Years Of Our Lives")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "David Lean")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Bridge On The River Kwai")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Michael Cimino")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Deer Hunter")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "William Friedkin")'),
        movieId: Sequelize.literal('(select id from movies where title = "The French Connection")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Buster Keaton")'),
        movieId: Sequelize.literal('(select id from movies where title = "The General")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Clyde Bruckman")'),
        movieId: Sequelize.literal('(select id from movies where title = "The General")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Francis Ford Coppola")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Godfather")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Francis Ford Coppola")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Godfather Part Ii")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Charles Chaplin")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Gold Rush")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Mike Nichols")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Graduate")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "John Ford")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Grapes Of Wrath")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Peter Bogdanovich")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Last Picture Show")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Peter Jackson")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Lord Of The Rings\: The Fellowship Of The Ring")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "John Huston")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Maltese Falcon")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "George Cukor")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Philadelphia Story")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "John Ford")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Searchers")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Frank Darabont")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Shawshank Redemption")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Jonathan Demme")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Silence Of The Lambs")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "M. Night Shyamalan")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Sixth Sense")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Robert Wise")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Sound Of Music")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "John Huston")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Treasure Of The Sierra Madre")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Sam Peckinpah")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Wild Bunch")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Victor Fleming")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Wizard Of Oz")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "King Vidor")'),
        movieId: Sequelize.literal('(select id from movies where title = "The Wizard Of Oz")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "James Cameron")'),
        movieId: Sequelize.literal('(select id from movies where title = "Titanic")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Robert Mulligan")'),
        movieId: Sequelize.literal('(select id from movies where title = "To Kill A Mockingbird")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Sydney Pollack")'),
        movieId: Sequelize.literal('(select id from movies where title = "Tootsie")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "John Lasseter")'),
        movieId: Sequelize.literal('(select id from movies where title = "Toy Story")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Clint Eastwood")'),
        movieId: Sequelize.literal('(select id from movies where title = "Unforgiven")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Alfred Hitchcock")'),
        movieId: Sequelize.literal('(select id from movies where title = "Vertigo")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Robert Wise")'),
        movieId: Sequelize.literal('(select id from movies where title = "West Side Story")')
      }, {
        directorId: Sequelize.literal('(Select id from directors where director = "Jerome Robbins")'),
        movieId: Sequelize.literal('(select id from movies where title = "West Side Story")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Mike Nichols")'),
        movieId: Sequelize.literal('(select id from movies where title = "Who\'s Afraid Of Virginia Woolf?")')
      },
      {
        directorId: Sequelize.literal('(Select id from directors where director = "Michael Curtiz")'),
        movieId: Sequelize.literal('(select id from movies where title = "Yankee Doodle Dandy")')
      },

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MoviesDirectors')
  }
};
