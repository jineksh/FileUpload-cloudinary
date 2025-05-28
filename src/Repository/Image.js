const FileUpload = require('../model/Fileupload');

class imageRepo{

    
    async create(obj){
        try {
            const result = await FileUpload.create(obj);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }




}

module.exports = imageRepo;