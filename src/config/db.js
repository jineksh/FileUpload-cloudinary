const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MONGOURL = process.env.MONGOURL;


const connect = async()=>{
    await mongoose.connect(MONGOURL);
};


module.exports = connect;