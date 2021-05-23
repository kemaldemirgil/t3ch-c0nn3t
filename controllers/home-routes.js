const router = require('express').Router();


// Home route
router.get('/', async (req, res) => {
    // res.render('signup');
    try { 
        const sg = "signed in"
        // TODO: Send over the 'loggedIn' session variable to the 'homepage' template
        res.render('signup', {
          sg,
          loggedIn: req.session.loggedIn
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});


router.get('/home', async (req, res) => {
    try {
      const lg = "loggeed in homepage"
      res.render('home', {
        lg,
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// Login route
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;