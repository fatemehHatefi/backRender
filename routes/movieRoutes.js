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
const express = require('express');
const { addMovie, getWishlist, addToWishlist } = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, addMovie);
router.get('/wishlist', authMiddleware, getWishlist);
router.post('/wishlist/:movieId', authMiddleware, addToWishlist);

module.exports = router;
