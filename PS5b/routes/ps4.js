const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../config/config.js');
const redis = require('redis');
const client = redis.createClient();


/* GET home page. */
router.route('/')

    .get((req, res, next)=> {
        res.render('index', { title: 'Express' });})

    .post(async (req, res, next) => {

            let num = req.body.number;
            num = String(num);

            client.exists(num, async (err, match) => {
                if(err) { throw new Error(err) }
                if (match==1) {
                        client.get(num, (err, response) => {
                                console.table(response);
                                let rep = JSON.parse(response);
                                rep.cached = "YES";
                                res.send(JSON.stringify(rep));
                        })
                } else {
                        let result = await fetch( CONFIG.url + req.body.number);
                        let tim = await result.json();
                        tim = tim.results;
                        tim = {
                                "response": JSON.stringify(tim),
                                "cached": "No"
                        }
                        tim = JSON.stringify(tim);
                        client.set(num, tim, (err, response) => { //name = key, reversedName = value
                                console.table(tim);
                                setTimeout(() => { client.del(num,(err, success) => {
                                        if (err) { throw new Error(err)}
                                });}, 30000);
                                res.send(JSON.stringify(tim));
                        })
                }
            })
//redis end
    })

// for each object in list grab question correct ans incorrect answers

module.exports = router;
