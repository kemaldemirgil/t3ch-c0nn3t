const router = require('express').Router();
const apiRoutes = require('./api');
const enter = require('./enter-site.js');
// const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', enter);
router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/home', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;