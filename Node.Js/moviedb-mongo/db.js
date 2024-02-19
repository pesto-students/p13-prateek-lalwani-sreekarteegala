// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/MovieDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected Successfully"))
    .catch(error => console.log(error.message));

// Define schemas for collections
const directorSchema = new mongoose.Schema({
    "name": String,
    "nationality": String,
    "moviesDirected": [String]
    // "moviesDirected": [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

const actorSchema = new mongoose.Schema({
    "name": String,
    "nationality": String,
    "moviesActedIn": [String]
    // "moviesActedIn": [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

const movieSchema = new mongoose.Schema({
    "title": String,
    "releaseYear": Number,
    "genre": String,
    "director": String,
    "actors": [String]
    // "actors": [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }]
});

// Create models for collections
const Director = mongoose.model('Director', directorSchema);
const Actor = mongoose.model('Actor', actorSchema);
const Movie = mongoose.model('Movie', movieSchema);

module.exports = {
    Director, Actor, Movie
}

// Insert sample data for directors
const directorData = [
    { name: 'Frank Darabont', nationality: 'American' },
    { name: 'Francis Ford Coppola', nationality: 'American' },
    { name: 'Robert Zemeckis', nationality: 'American' },
    { name: 'Peter Jackson', nationality: 'New Zealand' },
    { name: 'James Cameron', nationality: 'Canadian' },
];
Director.insertMany(directorData);

// Insert sample data for actors
const actorData = [
    { name: 'Actor 1', nationality: 'Nationality 1' },
    { name: 'Actor 2', nationality: 'Nationality 2' },
    { name: 'Actor 3', nationality: 'Nationality 3' },
    { name: 'Actor 4', nationality: 'Nationality 4' },
    { name: 'Actor 5', nationality: 'Nationality 3' },
    { name: 'Actor 6', nationality: 'Nationality 4' },
    { name: 'Actor 7', nationality: 'Nationality 3' },
    { name: 'Actor 8', nationality: 'Nationality 4' },
    // Add more actor data as needed
];
Actor.insertMany(actorData);

// Insert sample data for movies
const movieData = [
    { title: 'Movie 1', releaseYear: 2020, genre: 'Drama' },
    { title: 'Movie 2', releaseYear: 2019, genre: 'Fiction' },
    { title: 'Movie 3', releaseYear: 2019, genre: 'Action' },
    { title: 'Movie 4', releaseYear: 2021, genre: 'Thriller' },
    { title: 'Movie 5', releaseYear: 2022, genre: 'Action' },
    { title: 'Movie 6', releaseYear: 2023, genre: 'Drama' },
    { title: 'Movie 7', releaseYear: 2020, genre: 'Thriller' },
    { title: 'Movie 8', releaseYear: 2019, genre: 'Fiction' },
    { title: 'Movie 9', releaseYear: 2018, genre: 'Drama' },
    { title: 'Movie 10', releaseYear: 2019, genre: 'Thriller' },
    // Add more movie data as needed
];
Movie.insertMany(movieData);


/*
==========================================
Updated collections with reference Data:
==========================================


Update directors with moviesDirected references
db.directors.updateOne({ name: 'Frank Darabont' }, { $set: { moviesDirected: ["Movie 1", "Movie 10"] } });
db.directors.updateOne({ name: 'Francis Ford Coppola' }, { $set: { moviesDirected: ["Movie 2", "Movie 9"] } });
db.directors.updateOne({ name: 'Robert Zemeckis' }, { $set: { moviesDirected: ["Movie 3", "Movie 8"] } });
db.directors.updateOne({ name: 'Peter Jackson' }, { $set: { moviesDirected: ["Movie 4", "Movie 7"] } });
db.directors.updateOne({ name: 'James Cameron' }, { $set: { moviesDirected: ["Movie 5", "Movie 6"] } })

Update actors with moviesActedIn references
db.actors.updateOne({ name: 'Actor 1' }, { $set: { moviesActedIn: ["Movie 1", "Movie 2"] } });
db.actors.updateOne({ name: 'Actor 2' }, { $set: { moviesActedIn: ["Movie 10", "Movie 5"] } });
db.actors.updateOne({ name: 'Actor 3' }, { $set: { moviesActedIn: ["Movie 4", "Movie 2"] } });
db.actors.updateOne({ name: 'Actor 4' }, { $set: { moviesActedIn: ["Movie 9", "Movie 3"] } });
db.actors.updateOne({ name: 'Actor 5' }, { $set: { moviesActedIn: ["Movie 1", "Movie 3"] } });
db.actors.updateOne({ name: 'Actor 6' }, { $set: { moviesActedIn: ["Movie 8", "Movie 6", "Movie 10"] } });
db.actors.updateOne({ name: 'Actor 7' }, { $set: { moviesActedIn: ["Movie 5", "Movie 4", "Movie 3"] } });
db.actors.updateOne({ name: 'Actor 8' }, { $set: { moviesActedIn: ["Movie 7", "Movie 2", "Movie 9"] } });

Update Movies with director and actors references
db.movies.updateOne({ title: 'Movie 1' }, { $set: { director: "Frank Darabont", actors: ["Actor 1", "Actor 5"] } });
db.movies.updateOne({ title: 'Movie 2' }, { $set: { director: "Francis Ford Coppola", actors: ["Actor 1", "Actor 3", "Actor 8"] } });
db.movies.updateOne({ title: 'Movie 3' }, { $set: { director: "Robert Zemeckis", actors: ["Actor 4", "Actor 5", "Actor 7"] } });
db.movies.updateOne({ title: 'Movie 4' }, { $set: { director: "Peter Jackson", actors: ["Actor 3", "Actor 7"] } });
db.movies.updateOne({ title: 'Movie 5' }, { $set: { director: "James Cameron", actors: ["Actor 2", "Actor 7"] } });
db.movies.updateOne({ title: 'Movie 6' }, { $set: { director: "James Cameron", actors: ["Actor 6"] } });
db.movies.updateOne({ title: 'Movie 7' }, { $set: { director: "Peter Jackson", actors: ["Actor 8"] } });
db.movies.updateOne({ title: 'Movie 8' }, { $set: { director: "Robert Zemeckis", actors: ["Actor 6"] } });
db.movies.updateOne({ title: 'Movie 9' }, { $set: { director: "Francis Ford Coppola", actors: ["Actor 4", "Actor 8"] } });
db.movies.updateOne({ title: 'Movie 10' }, { $set: { director: "Frank Darabont", actors: ["Actor 2", "Actor 6"] } });

======================
Questions To Solve
======================


a) Find all movies released in a specific year.
db.movies.find({releaseYear:2020})

b) Find all movies in a specific genre
db.movies.find({genre:"Action"});

c) Find all movies directed by a specific director.
db.movies.find({director: "Peter Jackson"})

d) Find all movies that a specific actor acted in.
db.actors.findOne({ name: 'Actor 1' },{'moviesActedIn':1})

e) Find all directors from a specific nationality.
db.directors.find({"nationality": "Nationality 4"})

f) Find all actors from a specific nationality.
db.actors.find({"nationality": "Nationality 4"})

*/
