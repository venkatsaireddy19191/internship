const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config(); 


cloudinary.config({ 
    cloud_name: 'dzjfzbzyt', 
    api_key: '459794515323733', 
    api_secret: 'zQGxMOHYE3w0E9aNCS83jkek5u8' 
});


const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        if (!req.body.language || !req.body.category) {
            throw new Error("Language and category are required for file uploads");
        }
        return {
            folder: `pdfs/${req.body.language}/${req.body.category}`, 
            resource_type: 'raw',  
            format: 'pdf', 
            public_id: `${Date.now()}-${file.originalname.split('.')[0]}` 
        };
    }
});

// ✅ Multer Middleware for handling file uploads
const upload = multer({ storage });

module.exports = { upload, cloudinary };
