require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

cloudinary.uploader.upload('./Bak.jpg', { folder: 'spegel' })
  .then(result => console.log('✅ Lastet opp:', result.secure_url))
  .catch(err => console.error('❌ Feil:', err));
