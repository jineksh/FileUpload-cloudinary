
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Upload folder ka sahi path banao
const uploadPath = path.join(__dirname, 'uploads');

// Agar folder nahi hai to bana do
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);  // Yahan sahi path use karo
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

module.exports = upload;
