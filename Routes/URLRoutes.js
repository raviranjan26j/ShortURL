const express = require('express');
const Routes = express.Router();
const {HandleCreateNewURL,HandleGetShortURL,HandleGetRedirectURL} = require('../Controllers/URLController')

Routes.post('/',HandleCreateNewURL).get('/',HandleGetShortURL)

Routes.get('/:ID',HandleGetRedirectURL)

module.exports = Routes
