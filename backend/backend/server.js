const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/ai', require('./src/routes/ai'));
app.use('/api/dashboard', require('./src/routes/dashboard'));

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Sunucu hatasi!' });
});

app.listen(PORT, () => {
  console.log('Server ' + PORT + ' portunda calisiyor');
});
