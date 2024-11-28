// middleware/authenticate.js

import jwt from 'jsonwebtoken';

// Secret key for JWT (same as used in the token generation function)
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// Middleware function to verify the JWT token
export default (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract the token from the Authorization header

  if (!token) {
    return res.status(401).json({ success: 'false', error: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: 'false', error: 'Invalid or expired token' });
    }

    // Attach the decoded user info to the request object
    req.user = decoded;
    next();
  });
};
