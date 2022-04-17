const router = require('express').Router();
//Import all API routes from /api/index.js
const apiRoutes = require('./api');

//Add prefix of `/api` to all api routes
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>404 error</h1>');
});

module.exports = router;