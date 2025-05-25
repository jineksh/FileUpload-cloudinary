const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/server');
const fileUpload = require('express-fileupload');
const connect = require('./config/db');
const ApiRoutes = require('./Routes/index');
const cloudinary = require('./config/cloudinary');
const Server = ()=>{

    const app = express();

    
    require('dotenv').config();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    
    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>{
        console.log('Server is Started');
        await connect();
        await cloudinary();
        console.log('Db Connect');
    })

}

Server();