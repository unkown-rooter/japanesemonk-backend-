require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI);

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Loan Application Schema
const loanSchema = new mongoose.Schema({
  memberName: String,
  groupName: String,
  loanAmount: Number,
  loanPurpose: String,
  repaymentPeriod: String,
  createdAt: { type: Date, default: Date.now }
});

const Loan = mongoose.model('Loan', loanSchema);

// POST endpoint for loan applications
app.post('/api/loans', async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json({ message: 'Loan application submitted successfully' });
  } catch (error) {
    console.error('Error saving loan:', error);
    res.status(500).json({ error: 'Failed to submit loan application' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
