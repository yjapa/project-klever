const express = require('express');
const HealthCheck = require('../utils/HealthCheck');
const StatusCode = require('../utils/StatusCode');

const health = express.Router();

health.get('/', async (_req, res) => {

  const healthCheck = await HealthCheck.check();

  return res.status(StatusCode.OK).send(healthCheck);
});

module.exports = health;
