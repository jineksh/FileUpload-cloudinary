const mongoose = require('mongoose');

const fileuploadSchema = mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String
    },
    imageLink : {
        type : String
    },
    tags : {
        type : String
    }

});

const FileUpload = mongoose.model('fileUpload',fileuploadSchema);
module.exports = FileUpload;