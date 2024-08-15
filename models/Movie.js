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
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  releaseYear: { type: Number, required: true },
  image: { type: String },
  summary: { type: String },
  category: { type: String}
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
