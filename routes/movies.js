const router = require('express').Router();
const createError = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const utilities = require("../utilities/")
const moviesController = require('../controllers/movies');

const { moviesValidation, validate } = require('../middleware/validation');

router.get('/', moviesController.getAll);
router.get('/:id', moviesController.getSingle);
router.post('/', moviesValidation, utilities.handleErrors(moviesController.createMovie));
router.put('/:id',moviesValidation, validate, utilities.handleErrors((moviesController.updateMovie)));
router.delete('/:id',moviesValidation, validate, utilities.handleErrors((moviesController.deleteMovie)));

module.exports = router;