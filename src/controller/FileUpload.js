const { StatusCodes } = require('http-status-codes'); 


const fileUpload = async(req,res)=>{

    try {
        console.log(req.body);
        const file = req.files.file;
        console.log(file);
        const extension =  file.name.split('.').pop();
        const PATH = __dirname + '/Files/' + Date.now() + '.' + extension;
        await file.mv(PATH);
        res.status(StatusCodes.BAD_REQUEST).json({
            message : 'File is Upload',
            sucsess : false
        })

    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).json({
            message : 'File is Not Upload',
            sucsess : false
        })
    }

} 
module.exports = {
    fileUpload
}