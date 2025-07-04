const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB error:", err));

// Simple test route
app.get('/hello', (req, res) => {
  res.send("Japanesemonk backend is live!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
