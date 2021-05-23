// const path = require('path');
// const express = require('express');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers');

// const app = express();
// app.set('port', (process.env.PORT || 3002));


// app.set("views", path.join(__dirname, "views"));
// app.engine('handlebars', exphbs({defaultLayout: "main"}));
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// app.listen(app.get('port'), () => console.log(`Server started on port ${app.get("port")}`))

/////////////////////////////////////////////////////////////////////////////////////////



const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3002;

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
};
  
app.use(session(sess));

app.set("views", path.join(__dirname, "views"));
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});