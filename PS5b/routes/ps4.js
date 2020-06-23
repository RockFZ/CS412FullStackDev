const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../config/config.js');


/* GET home page. */
router.route('/')

    .get((req, res, next)=> {
        res.render('index', { title: 'Express' });})

    .post(async (req, res, next) => {
        let result = await fetch( CONFIG.url + req.body.number);
        let tim = await result.json();
        tim = tim.results;
        res.render('play',{quest:tim});
    })

// for each object in list grab question correct ans incorrect answers

module.exports = router;
