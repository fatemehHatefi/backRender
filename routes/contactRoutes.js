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
const nodemailer = require('nodemailer');
const router = express.Router();

require('dotenv').config(); // Load environment variables

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace with your email service
  auth: {
    user: process.env.EMAIL_USER, // Your email from .env
    pass: process.env.EMAIL_PASS, // Your email password from .env
  },
});

// POST route to handle contact form submissions
router.post('/contact', async (req, res) => {
  
  console.log("testname");
  const { name, email, message } = req.body;
  console.log(name);

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Replace with your email
    subject: `Contact Form Submission from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message.' });
  }
});

module.exports = router;
