const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send("Movies Project");});

router.use('/movies', require('./movies'));

module.exports = router;