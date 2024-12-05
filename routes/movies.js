const router = require('express').Router();
const createError = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const utilities = require("../utilities/")
const moviesController = require('../controllers/movies');
const { moviesValidation, handleValidation } = require('../middleware/validation');
const { isAuthenticated } = require('../middleware/authenticate');


router.get('/', moviesController.getAll);
router.get('/:id', moviesController.getSingle);
router.post('/', isAuthenticated, moviesValidation, handleValidation, moviesController.createMovie);
router.put('/:id', isAuthenticated, moviesValidation,handleValidation, moviesController.updateMovie);
router.delete('/:id', isAuthenticated, moviesController.deleteMovie);

module.exports = router;