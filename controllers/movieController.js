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
const Movie = require('../models/Movie');
const User = require('../models/User');

exports.addMovie = async (req, res) => {
  const { title, description, rating, releaseYear, image, summary } = req.body;
  try {
    const newMovie = new Movie({ title, description, rating, releaseYear, image, summary });
    const movie = await newMovie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('wishlist');
    res.json(user.wishlist);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addToWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const movie = await Movie.findById(req.params.movieId);
    if (!movie) return res.status(404).json({ msg: 'Movie not found' });

    if (!user.wishlist.includes(req.params.movieId)) {
      user.wishlist.push(req.params.movieId);
      await user.save();
    }
    res.json(user.wishlist);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
// back/controllers/movieController.js


exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

