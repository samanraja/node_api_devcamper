//jshint version:6
require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(5000,function(){
    console.log("your server is running on port 5000");
  });