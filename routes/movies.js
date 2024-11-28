const router = require('express').Router();
const createError = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const utilities = require("../utilities/")
const moviesController = require('../controllers/movies');

const { moviesValidation, handleValidation } = require('../middleware/validation');

router.get('/', moviesController.getAll);
router.get('/:id', moviesController.getSingle);
router.post('/', moviesValidation, handleValidation, moviesController.createMovie);
router.put('/:id',moviesValidation,handleValidation, moviesController.updateMovie);
router.delete('/:id', moviesController.deleteMovie);

module.exports = router;