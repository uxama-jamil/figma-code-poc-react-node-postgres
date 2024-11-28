// utils/jwt.js

import jwt from 'jsonwebtoken';

// Secret key for signing the token (you should store this in an environment variable)
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// Generate JWT token
const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  // Create and sign the token with a 1-hour expiry
  const tokenType = 'bearer'
  const accessToken = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1h' });
  const expiresIn = new Date(new Date().getTime() + 60 * 60 * 1000); 


  return { accessToken, tokenType, expiresIn };
};

export {
    generateToken
};
