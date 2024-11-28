const { check, body, validationResult } = require('express-validator');
const validate = {}

const moviesValidation = [
      // movie name is required and must be string
      body("movieName")
        .trim()
        .notEmpty()
        .withMessage("Please provide a valid movie name."), // on error this message is sent.
  
      // genre is required and must be string
      body("genre")
        .trim()
        .notEmpty()
        .withMessage("Please provide a valid genre."), // on error this message is sent.
  
    // directors name is required and must be string
    body("directorsName")
    .trim()
    .notEmpty()
    .withMessage("Please provide a valid Directors Name."), // on error this message is sent.

    // minutes is required and must be string
    body("minutes")
    .trim()
    .notEmpty()
    .isNumeric()
    .withMessage("Please provide valid minutes."), // on error this message is sent.
    
    // genre is required and must be string
    body("releaseDate")
    .trim()
    .notEmpty()
    .withMessage("Please provide a valid release date"), // on error this message is sent.

    ]


const handleValidation = (req, res, next) => {
        const errors = validationResult(req)
    
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            })
        }
        next()
    }
  
    module.exports = { moviesValidation, handleValidation }