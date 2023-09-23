const express = require('express');
const path = require('path');
const router = express.Router();

router.post('/success', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'Views', 'success.html'));
});

module.exports = router; 
