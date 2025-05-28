const imageRepo = require('../Repository/Image');

class imageService{

    constructor(){
        this.repo = new imageRepo();
    }

    async create(obj){
        try {
            const result = await this.repo.create(obj);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = imageService;
