// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access denied.');
  
    try {
      const decoded = jwt.verify(token, '21532153');
      req.user = decoded;
      next();
    } catch (error) {
      res.status(400).send('Invalid token.');
    }
  };

  module.exports = router;

  // post layer, verification layer, 