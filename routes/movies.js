/*****************************************************************************
*
WEB422 – Project
*
I declare that this assignment is my own work in accordance with SenecaAcademic Policy.
*
No part of this assignment has been copied manually or electronically from any other source
*
(including web sites) or distributed to other students.
*
*
Group member Names: Fatemeh Hatefi, Dhruv Sahni 
Student IDs: 142616218, 143525228 
Date: 08/13/2024
*****************************************************************************/
// back/routes/movies.js

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Route to get movie details by ID
router.get('/:id', movieController.getMovieById);

module.exports = router;
