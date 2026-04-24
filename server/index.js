const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

try {
  const { execSync } = require('child_process');
  const fs = require('fs');
  const path = require('path');
  
  // Seed the 10 roadmaps
  console.log('Running seedRoadmaps.js...');
  execSync('node seedRoadmaps.js', { cwd: __dirname, stdio: 'inherit' });
  
  // Dump users to debug login issue
  setTimeout(async () => {
    try {
      const User = require('./models/User');
      const users = await User.find({}).select('email name role');
      fs.writeFileSync(path.join(__dirname, 'db_users.txt'), JSON.stringify(users, null, 2));
      console.log('Successfully wrote user info to db_users.txt');
    } catch (err) {
      console.error('Error dumping users:', err);
    }
  }, 3000); // Wait 3s for mongo to connect
} catch (e) {
  console.error('Injection error:', e);
}

const authRoutes = require('./routes/auth');
const roadmapRoutes = require('./routes/roadmaps');
const progressRoutes = require('./routes/progress');
const quizRoutes = require('./routes/quiz');
const adminRoutes = require('./routes/admin');
const userRoadmapRoutes = require('./routes/userRoadmaps');

const app = express();

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads/thumbnails');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/roadmaps', roadmapRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/roadmap', userRoadmapRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'OK', message: 'Tripod Roadmap API running' }));

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tripod-roadmap';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });
