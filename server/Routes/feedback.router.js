
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
router.post('/review', (req, res) => {
    
    let feedback = req.body;
    console.log(feedback);

    const sqlText =
        (`INSERT INTO "feedback" ("feeling", "understanding", "support", "comment")
        VALUES ($1, $2, $3, $4)`);

        const sqlParams = [req.body.feedback];
        console.log(sqlParams);
    
            pool.query(sqlText, sqlParams)
                .then((dbRes)=>{
                    console.log('in POST router');
                    res.sendStatus(201);
                })
                .catch((err)=>{
                    console.log('POST router failed', err);
                    res.sendStatus(500);
                });
    
    });



module.exports = router;