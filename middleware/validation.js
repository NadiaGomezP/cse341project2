const { check, body, validationResult } = require('express-validator');
const validate = {}

validate.moviesValidation = () => {
    return [
      // movie name is required and must be string
      body("movieName")
        .trim()
        .escape()
        .notEmpty()
        .isLength({ min: 1 })
        .withMessage("Please provide a valid movie name."), // on error this message is sent.
  
      // genre is required and must be string
      body("genre")
        .trim()
        .escape()
        .notEmpty()
        .isLength({ min: 1 })
        .withMessage("Please provide a valid genre."), // on error this message is sent.
  
    // directors name is required and must be string
    body("directorsName")
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 1 })
    .withMessage("Please provide a valid Directors Name."), // on error this message is sent.

    // minutes is required and must be string
    body("minutes")
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 1 })
    .isInt()
    .withMessage("Please provide valid minutes."), // on error this message is sent.
    
    // genre is required and must be string
    body("releaseDate")
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 1 })
    .withMessage("Please provide a valid release date"), // on error this message is sent.

    ]
  }




  validate.validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
  }
  
  module.exports = validate