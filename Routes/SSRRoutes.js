const express = require('express');
const Routes = express.Router();
const {handleSSRGetAllURL} = require('../Controllers/SSRController')


Routes.get('/',handleSSRGetAllURL)

module.exports = Routes;
