const express = require('express');
const router = express.Router();

// Calculate endpoint
router.post('/calculate', (req, res) => {
  const { expression } = req.body;

  try {
    // Simple evaluation (in production, use a safer library like math.js)
    const result = Function('"use strict"; return (' + expression + ')')();
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid expression' });
  }
});

module.exports = router;
