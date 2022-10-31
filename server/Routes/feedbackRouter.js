
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all feedback, display on the review page
router.get('/', (req, res) => {

    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /review', error);
        res.sendStatus(500);  
    });
})

// POST a new feedback on submit
router.post('/', (req, res) => {
    console.log('req.body is', req.body);
    

    const sqlText =
        (`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)`);

        const sqlParams = [
             req.body.feeling,
             req.body.understanding,
             req.body.support,
             req.body.comment];
             
        console.log('sqlparams is', sqlParams);
    
            pool.query(sqlText, sqlParams)
                .then((dbRes)=>{
                    console.log('sucessfully posted to database!');
                    res.sendStatus(201);
                })
                .catch((err)=>{
                    console.log('POST router failed', err);
                    res.sendStatus(500);
                });
    
    });



module.exports = router;