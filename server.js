const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3002;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'whit3bird',
    cookie: { expires : 10 * 60 * 1000 },
    resave: true,
    saveUninitialized: true,
    rolling: true,
    store: new SequelizeStore({ db : sequelize }),
};
  
app.use(session(sess));

// app.set("views", path.join(__dirname, "views"));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});