const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://unkown-rooter:mongoDB54321BDongom@cluster0.5s9zgyc.mongodb.net/japanesemonkdb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.log('❌ MongoDB Error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('JapaneseMonk Backend is working 🚀');
});

app.get('/api/loans', (req, res) => {
  res.json([]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
