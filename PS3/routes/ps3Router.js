var express = require('express');
var router = express.Router();

/* GET home page. */

router.route('/')
    .get((req, res, next)=> {
        //res.send({ string: 'Subnautica' });
        res.render('index', { title: 'Subnautica' });
    })
    .post((req, res, next)=> {
        res.render('post', { title: String(req.body.string) , body:String(req.body.string.length-1)  });
    })

module.exports = router;