const router = require('express').Router();
const { User, Post } = require('../models');


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
  const postData = await Post.findAll().catch((err) => { 
      res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render('home', { posts });
});


router.get('/dashboard', async (req, res) => {
  try {
    const lg = "loggeed in dashboard"
    res.render('dashboard', {
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