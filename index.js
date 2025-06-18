const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Connect routes
const loanRoutes = require('./routes/loanRoutes');
app.use('/api/loans', loanRoutes); // 👈 This must be included

// Start server
app.listen(PORT, () => {
  console.log(`🔥 Server is running on port ${PORT}`);
});
