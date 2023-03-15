const express = require('express');
const weatherRouter = express.Router();

const weatherController = require('../controller/weatherController');

weatherRouter.post('/', weatherController.getData, (req, res) => res.status(200).json(res.locals.response));

module.exports = weatherRouter;
