const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Movies']
    const result = await mongodb.getDatabase().db().collection('movies').find();
    result.toArray().then((movies) =>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(movies);
    });
};
const getSingle = async (req, res) => {
    //#swagger.tags=['Movies']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('movies').find({_id: userId});
    result.toArray().then((movies) =>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(movies[0]);
    });
};

const createMovie = async (req, res) => {
    //#swagger.tags=['Movies']
    const movie = {
        movieName: req.body.movieName,
        genre: req.body.genre,
        directorsName: req.body.directorsName,
        minutes: req.body.minutes,
        releaseDate: req.body.releaseDate
    }

    const response = await mongodb.getDatabase().db().collection('movies').insertOne(movie);
    if (response.acknowledged){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error ocurred while creating the movie')
    }

}

const updateMovie = async (req, res) => {
    //#swagger.tags=['Movies']
    const userId = new ObjectId(req.params.id);
    const movie = {
        movieName: req.body.movieName,
        genre: req.body.genre,
        directorsName: req.body.directorsName,
        minutes: req.body.minutes,
        releaseDate: req.body.releaseDate
    }

    const response = await mongodb.getDatabase().db().collection('movies').replaceOne({_id: userId}, movie);
    if (response.modifiedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error ocurred while updating the movie')
    }
    
}

const deleteMovie = async (req, res) => {
    //#swagger.tags=['Movies']
    const userId = new ObjectId(req.params.id);

    const response = await mongodb.getDatabase().db().collection('movies').deleteOne({_id: userId}, true);
    if (response.deletedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error ocurred while deleting the movie')
    }

    
}







module.exports = {getAll, getSingle, createMovie, deleteMovie, updateMovie};