'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [
      {
        title: '12 Angry Men',
        releaseDate: '4/10/1957',
        runTime: '95 mins',
        ratings: "Not Rated"
      },
      {
        title: '2001: A Space Odyssey',
        releaseDate: '4/3/1968',
        runTime: '140 mins',
        ratings: "G"
      },
      {
        title: 'A Clockwork Orange',
        releaseDate: '12/19/1971',
        runTime: '137 mins',
        ratings: "R"
      },
      {
        title: 'A Night At The Opera',
        releaseDate: '11/15/1935',
        runTime: '90 mins',
        ratings: "Passed"
      },
      {
        title: 'A Streetcar Named Desire',
        releaseDate: '3/22/1952',
        runTime: '125 mins',
        ratings: "PG"
      },
      {
        title: 'All About Eve',
        releaseDate: '10/27/1950',
        runTime: '138 mins',
        ratings: "Passed",
      },
      {
        title: "All The President's Men",
        releaseDate: "4/1/1976",
        ratings: "PG",
        runTime: '136 mins'
      },
      {
        title: "American Graffiti",
        releaseDate: "8/11/1973",
        ratings: "PG",
        runTime: '110 mins'
      },
      {
        title: "Annie Hall",
        releaseDate: "4/20/1977",
        ratings: "PG",
        runTime: '94 mins'
      },
      {
        title: "Apocalypse Now",
        releaseDate: "8/15/1979",
        ratings: "R",
        runTime: '157 mins'
      },
      {
        title: "Ben-Hur",
        releaseDate: "1/29/1960",
        ratings: "G",
        runTime: '212 mins'
      },
      {
        title: "Blade Runner",
        releaseDate: "6/25/1982",
        ratings: "R",
        runTime: '124 mins'
      },
      {
        title: "Bonnie And Clyde",
        releaseDate: "8/13/1967",
        ratings: "R",
        runTime: '111 mins'
      },
      {
        title: "Bringing Up Baby",
        releaseDate: "2/18/1938",
        ratings: "Not Rated",
        runTime: '102 mins'
      },
      {
        title: "Butch Cassidy And The Sundance Kid",
        releaseDate: "10/24/1969",
        ratings: "PG",
        runTime: '112 mins'
      },
      {
        title: "Cabaret",
        releaseDate: "2/13/1972",
        ratings: "PG",
        runTime: '124 mins'
      },
      {
        title: "Casablanca",
        releaseDate: "1/23/1943",
        ratings: "PG",
        runTime: '103 mins'
      },
      {
        title: "Chinatown",
        releaseDate: "6/20/1974",
        ratings: "R",
        runTime: '132 mins'
      },
      {
        title: "Citizen Kane",
        releaseDate: "9/5/1941",
        ratings: "PG",
        runTime: '119 mins'
      },
      {
        title: "City Lights",
        releaseDate: "3/7/1931",
        ratings: "G",
        runTime: '87 mins'
      },
      {
        title: "Do The Right Thing",
        releaseDate: "6/30/1989",
        ratings: "R",

        runTime: '120 mins'
      },
      {
        title: "Double Indemnity",
        releaseDate: "4/24/1944",
        ratings: "Passed",
        runTime: '106 mins'
      },
      {
        title: "Dr. Strangelove",
        releaseDate: "1/29/1964",
        ratings: "PG",
        runTime: '102 mins'
      },
      {
        title: "Duck Soup",
        releaseDate: "11/17/1933",
        ratings: "Not Rated",
        runTime: '80 mins'
      },
      {
        title: "E.T",
        releaseDate: "6/11/1982",
        ratings: "PG",
        runTime: '120 mins'
      },
      {
        title: "Easy Rider",
        releaseDate: "7/14/1969",
        ratings: "R",
        runTime: '95 mins'
      },
      {
        title: "Forrest Gump",
        releaseDate: "7/6/1994",
        ratings: "PG-13",
        runTime: '142 mins'
      },
      {
        title: "Gone With The Wind",
        releaseDate: "1/17/1940",
        ratings: "Passed",
        runTime: '220 mins'
      },
      {
        title: "Goodfellas",
        releaseDate: "9/19/1990",
        ratings: "R",
        runTime: '146 mins'
      },
      {
        title: "High Noon",
        releaseDate: "7/30/1952",
        ratings: "PG",
        runTime: '87 mins'
      },
      {
        title: "In The Heat Of The Night",
        releaseDate: "8/2/1967",
        ratings: "Not Rated",
        runTime: '110 mins'
      },
      {
        title: "Intolerance",
        releaseDate: "9/5/1916",
        ratings: "Passed",
        runTime: '197 mins'
      },
      {
        title: "It Happened One Night",
        releaseDate: "2/23/1934",
        ratings: "Not Rated",
        runTime: '105 mins'
      },
      {
        title: "It'S A Wonderful Life",
        releaseDate: "1/7/1947",
        ratings: "PG",
        runTime: '132 mins'
      },
      {
        title: "Jaws",
        releaseDate: "6/20/1975",
        ratings: "PG",
        runTime: '124 mins'
      },
      {
        title: "King Kong",
        releaseDate: "4/7/1933",
        ratings: "Passed",
        runTime: '110 mins'
      },
      {
        title: "Lawrence Of Arabia",
        releaseDate: "12/16/1962",
        ratings: "Approved",
        runTime: '180 mins'
      },
      {
        title: "M*A*S*H",
        releaseDate: "3/1/1970",
        ratings: "R",
        runTime: '116 mins'
      },
      {
        title: "Midnight Cowboy",
        releaseDate: "5/25/1969",
        ratings: "R",
        runTime: '113 mins'
      },
      {
        title: "Modern Times",
        releaseDate: "2/21/1936",
        ratings: "G",
        runTime: '87 mins'
      },
      {
        title: "Mr. Smith Goes to Washington",
        releaseDate: "10/19/1939",
        ratings: "Not Rated",
        runTime: '130 mins'
      },
      {
        title: "Nashville",
        releaseDate: "6/11/1975",
        ratings: "R",
        runTime: '157 mins'
      },
      {
        title: "Network",
        releaseDate: "11/14/1976",
        ratings: "R",
        runTime: '121 mins'
      },
      {
        title: "North By Northwest",
        releaseDate: "9/26/1959",
        ratings: "Not Rated",
        runTime: '136 mins'
      },
      {
        title: "On The Waterfront",
        releaseDate: "6/22/1954",
        ratings: "Not Rated",
        runTime: '107 mins'
      },
      {
        title: "One Flew Over The Cuckoo's Nest",
        releaseDate: "11/19/1975",
        ratings: "R",
        runTime: '133 mins'
      },
      {
        title: "Platoon",
        releaseDate: "12/19/1986",
        ratings: "R",
        runTime: '120 mins'
      },
      {
        title: "Psycho",
        releaseDate: "9/8/1960",
        ratings: "R",
        runTime: '108 mins'
      },
      {
        title: "Pulp Fiction",
        releaseDate: "10/14/1994",
        ratings: "R",
        runTime: '154 mins'
      },
      {
        title: "Raging Bull",
        releaseDate: "12/19/1980",
        ratings: "R",
        runTime: '129 mins'
      },
      {
        title: "Raiders Of The Lost Ark",
        releaseDate: "6/12/1981",
        ratings: "PG",
        runTime: '115 mins'
      },
      {
        title: "Rear Window",
        releaseDate: "9/1/1954",
        ratings: "PG",
        runTime: '112 mins'
      },
      {
        title: "Rocky",
        releaseDate: "12/3/1976",
        ratings: "PG",

        runTime: '121 mins'
      },
      {
        title: "Saving Private Ryan",
        releaseDate: "7/24/1998",
        ratings: "R",

        runTime: '170 mins'
      },
      {
        title: "Schindler's List",
        releaseDate: "12/15/1993",
        ratings: "R",

        runTime: '185 mins'
      },
      {
        title: "Shane",
        releaseDate: "8/1/1953",
        ratings: "Not Rated",

        runTime: '118 mins'
      },
      {
        title: "Singin' In The Rain",
        releaseDate: "4/11/1952",
        ratings: "G",

        runTime: '103 mins'
      },
      {
        title: "Snow White And The Seven Dwarfs",
        releaseDate: "2/4/1938",
        ratings: "G",
        runTime: '86 mins'
      },
      {
        title: "Some Like It Hot",
        releaseDate: "4/14/1959",
        ratings: "Not Rated",
        runTime: '120 mins'
      },
      {
        title: "Sophie'S Choice",
        releaseDate: "12/10/1982",
        ratings: "R",
        runTime: '157 mins'
      },
      {
        title: "Spartacus",
        releaseDate: "11/17/1960",
        ratings: "PG-13",
        runTime: '195 mins'
      },
      {
        title: "Star Wars",
        releaseDate: "5/25/1977",
        ratings: "PG",
        runTime: '123 mins'
      },
      {
        title: "Sullivan's Travels",
        releaseDate: "2/6/1942",
        ratings: "Not Rated",
        runTime: '91 mins'
      },
      {
        title: "Sunrise",
        releaseDate: "11/4/1927",
        ratings: "Passed",
        runTime: '94 mins'
      },
      {
        title: "Sunset Blvd",
        releaseDate: "9/29/1950",
        ratings: "Not Rated",
        runTime: '115 mins'
      },
      {
        title: "Swing Time",
        releaseDate: "9/4/1936",
        ratings: "Not Rated",
        runTime: '103 mins'
      },
      {
        title: "Taxi Driver",
        releaseDate: "2/7/1976",
        ratings: "R",
        runTime: '112 mins'
      },
      {
        title: "The African Queen",
        releaseDate: "3/21/1952",
        ratings: "PG",
        runTime: '106 mins'
      },
      {
        title: "The Apartment",
        releaseDate: "9/16/1960",
        ratings: "Not Rated",
        runTime: '125 mins'
      },
      {
        title: "The Best Years Of Our Lives",

        releaseDate: "5/29/1947",

        ratings: "Approved",
        runTime: '172 mins'
      },
      {
        title: "The Bridge On The River Kwai",
        releaseDate: "12/14/1957",
        ratings: "PG",
        runTime: '161 mins'
      },
      {
        title: "The Deer Hunter",
        releaseDate: "12/8/1978",
        ratings: "R",
        runTime: '183 mins'
      },
      {
        title: "The French Connection",
        releaseDate: "10/1/1971",
        ratings: "R",
        runTime: '104 mins'
      },
      {
        title: "The General",
        releaseDate: "2/5/1927",
        ratings: "Passed",
        runTime: '77 mins'
      },
      {
        title: "The Godfather",
        releaseDate: "3/24/1972",
        ratings: "R",
        runTime: '177 mins'
      },
      {
        title: "The Godfather Part Ii",
        releaseDate: "2/20/1974",
        ratings: "R",
        runTime: '200 mins'
      },
      {
        title: "The Gold Rush",
        releaseDate: "8/16/1925",
        ratings: "Not Rated",
        runTime: '74 mins'
      },
      {
        title: "The Graduate",
        releaseDate: "12/21/1967",
        ratings: "PG",
        runTime: '105 mins'
      },
      {
        title: "The Grapes Of Wrath",
        releaseDate: "3/15/1940",
        ratings: "Passed",
        runTime: '129 mins'
      },
      {
        title: "The Last Picture Show",
        releaseDate: "10/1/1971",
        ratings: "R",
        runTime: '118 mins'
      },
      {
        title: "The Lord Of The Rings: The Fellowship Of The Ring",
        releaseDate: "12/19/2001",
        ratings: "PG-13",
        runTime: '178 mins'
      },
      {
        title: "The Maltese Falcon",
        releaseDate: "10/18/1941",
        ratings: "Not Rated",
        runTime: '100 mins'
      },
      {
        title: "The Philadelphia Story",
        releaseDate: "1/17/1941",
        ratings: "Not Rated",
        runTime: '112 mins'
      },
      {
        title: "The Searchers",
        releaseDate: "5/26/1956",
        ratings: "Passed",
        runTime: '119 mins'
      },
      {
        title: "The Shawshank Redemption",
        releaseDate: "10/14/1994",
        ratings: "R",
        runTime: '142 mins'
      },
      {
        title: "The Silence Of The Lambs",
        releaseDate: "2/14/1991",
        ratings: "R",
        runTime: '120 mins'
      },
      {
        title: "The Sixth Sense",
        releaseDate: "8/6/1999",
        ratings: "PG-13",
        runTime: '107 mins'
      },
      {
        title: "The Sound Of Music",
        releaseDate: "4/1/1965",
        ratings: "G",
        runTime: '175 mins'
      },
      {
        title: "The Treasure Of The Sierra Madre",
        releaseDate: "1/24/1948",
        ratings: "Passed",
        runTime: '128 mins'
      },
      {
        title: "The Wild Bunch",
        releaseDate: "6/18/1969",
        ratings: "R",
        runTime: '135 mins'
      },
      {
        title: "The Wizard Of Oz",
        releaseDate: "8/25/1939",
        ratings: "PG-13",
        runTime: '97 mins'
      },
      {
        title: "Titanic",
        releaseDate: '12/19/1997',
        ratings: 'PG-13',
        runTime: "197 mins"
      },
      {
        title: "To Kill A Mockingbird",
        releaseDate: "12/25/1962",
        ratings: "Not Rated",
        runTime: '129 mins'
      },
      {
        title: "Tootsie",
        releaseDate: "12/17/1982",
        ratings: "PG",
        runTime: '116 mins'
      },
      {
        title: "Toy Story",
        releaseDate: "11/22/1995",
        ratings: "G",
        runTime: '81 mins'
      },
      {
        title: "Unforgiven",
        releaseDate: "8/7/1992",
        ratings: "R",
        runTime: '130 mins'
      },
      {
        title: "Vertigo",
        releaseDate: "5/28/1958",
        ratings: "PG",
        runTime: '120 mins'
      },
      {
        title: "West Side Story",
        releaseDate: "12/23/1961",
        ratings: "Not Rated",
        runTime: '155 mins'
      },
      {
        title: "Who's Afraid Of Virginia Woolf?",
        releaseDate: "6/22/1966",
        ratings: "Not Rated",
        runTime: '131 mins'
      },
      {
        title: "Yankee Doodle Dandy",
        releaseDate: "1/2/1943",
        ratings: "Passed",
        runTime: '126 mins'
      },

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies')

  }
};
