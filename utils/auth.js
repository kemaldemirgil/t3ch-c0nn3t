const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      alert("session expired")
      res.redirect('/login');
    } else {
      next();
    }
};
  
module.exports = withAuth;