const cloudinary = require('cloudinary');
const path = require('path');
const fs = require('fs');
const { StatusCodes } = require('http-status-codes');
const imageService = require('../Service/image');
const service = new imageService();

const imageUpload = async (req, res) => {


    try {
        const file = req.file;
        const filePath = path.join(__dirname, '..', 'temp', 'storage', file.filename);
        const result = await cloudinary.uploader.upload(file.path, {
            resource_type: 'auto',
            folder: 'Jinex Storage'
        });
        const response = await service.create({
            email : req.body.email,
            name : req.body.name,
            imageLink : result.url
        });
        fs.unlinkSync(file.path);
        res.status(StatusCodes.OK).json({
            data : response,
            message: 'file upload',
            success : true
        })


    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'file not upload',
            success : false
        })
    }


}

module.exports = {
    imageUpload
}