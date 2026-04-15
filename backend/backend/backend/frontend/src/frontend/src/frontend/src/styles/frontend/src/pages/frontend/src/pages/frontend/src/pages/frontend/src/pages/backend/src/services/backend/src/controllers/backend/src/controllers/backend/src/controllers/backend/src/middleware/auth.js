const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Token gerekli' });
  try {
    req.user = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(403).json({ error: 'Gecersiz token' });
  }
};
