const mongoose = require('mongoose');

const fileuploadSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    imageLink : {
        type : String,
        required : true
    },
    tags : {
        type : String
    }

});

const FileUpload = mongoose.model('fileUpload',fileuploadSchema);
module.exports = FileUpload;