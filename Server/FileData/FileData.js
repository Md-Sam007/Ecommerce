import express from 'express';
import multer from 'multer';

// Set up Multer to store files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets'); // Define the directory where files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname); // Use a unique name for the uploaded file
    }
});

const upload = multer({ storage: storage }).single('file'); // 'file' matches the name in your form

// Middleware to handle file and form data
const FileData = (req, res, next) => {
    
    upload(req, res, function (err) {
        if (err) {
            console.error("File upload error:", err);
            return res.status(500).json({ error: 'File upload failed' });
        }
       
        
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        next();
    })
}
export{FileData};