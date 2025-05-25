const cloudinary = require('cloudinary');
const path = require('path');
const fs = require('fs');
const {StatusCodes} = require('http-status-codes');


const imageUpload = async (req, res) => {


    try {
        const file = req.file;
        console.log(file.path);
       const filePath = path.join(__dirname, '..', 'temp', 'storage', file.filename);
        const result = await cloudinary.uploader.upload(file.path, {
            resource_type: 'auto',
            folder : 'Jinex Storage'
        });
        console.log(result);

        fs.unlinkSync(file.path);
        res.status(StatusCodes.OK).json({
            message : 'file upload'
        })


    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).json({
            message : 'file not upload'
        })
    }


}

module.exports = {
    imageUpload
}