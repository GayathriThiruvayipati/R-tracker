const router = require('express').Router();


router.route('/').get((req,res)=>{

 
});

router.route('/add').post((req,res)=>{

    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);



});

module.exports = router;