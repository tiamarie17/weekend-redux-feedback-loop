
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
router.post('/review', async (req, res) => {
    
    const req.body =  {
            feeling,
            understanding,
            support,
            comment
        };
    const sqlText =
        (`INSERT INTO "feeedback" ("feeling", "understanding", "support", "comment")
        VALUES ($1, $2, $3, $4, $5, $6)`);


});


module.exports = router;