const router = require('express').Router();

// Home route
router.get('/', async (req, res) => {
  // res.render('signup');
  try { 
      const sg = "signed in"
      res.render('signup', {
        sg,
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// Login route
router.get('/login', (req, res) => {
  req.session.save(() => {
    req.session.loggedIn = true;
  })
  res.render('login');
});




router.get('/home', (req, res) => {
  document.location.replace('/api/users/home')
  res.render('home');
});
router.get('/dashboard', (req, res) => {
  document.location.replace('/api/users/dashboard')
  res.render('dashboard');
});


module.exports = router;