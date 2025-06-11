const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

// POST endpoint to handle lead form submissions
router.post('/submit', async (req, res) => {
  try {
    const { name, email, company, phone, message, subscribe, timestamp } = req.body;

    // Send data to Google Apps Script web app
    const response = await axios.post(GOOGLE_APPS_SCRIPT_URL, {
      timestamp,
      name,
      email,
      company,
      phone,
      message: message || '',
      subscribe
    });

    if (response.data.status === 'success') {
      res.status(200).json({ message: 'Lead data saved successfully' });
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('Error saving lead data:', error);
    res.status(500).json({ error: 'Failed to save lead data' });
  }
});

module.exports = router; 