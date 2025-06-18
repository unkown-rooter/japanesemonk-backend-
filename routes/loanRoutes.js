// routes/loanRoutes.js

const express = require('express');
const router = express.Router();

// Loan application endpoint
router.post('/apply', (req, res) => {
  const { name, amount } = req.body;

  if (!name || !amount) {
    return res.status(400).json({ message: '⚠️ Missing name or amount' });
  }

  console.log('📥 New loan application received:', { name, amount });

  // ✅ Send confirmation response
  res.status(201).json({ message: `✅ Loan application received from ${name}` });
});

module.exports = router;
