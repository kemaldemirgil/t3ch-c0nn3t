const { Post } = require('../models');

const postData = [
    {
        title: "Meteor Rush v1.2 is now available!",
        content: "After being released, Meteor Rush now has more then 2 million active users, with the new release this number is expected to be around 3 million. Check out https://kemaldemirgil.github.io/meteor-rush/ for more!",
        user_id: 3
    },
    {
        title: "Skewed News hits all time records!",
        content: "Serving the top news without choosing sides; Skewed News has gotten extremely popular lately. With it's new features such as the 'Currency Calculator', 'Weather Dashboard' and 'Jokes Panel', even young users started using this great news website.",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
        content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 2

    },
    {
        title: "Tech-Connect has been released!",
        content: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site will be built from scratch and deployed to Heroku. The app will follow MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
        user_id: 5
    },
    {
        title: "Fastest Way to Build a Team : Team Profile Generator",
        content: "Are you spending too much time on keeping track of your team positions? Well this application created by gam3fac3 will make your life way much easier while orgnaizing your team and keeping a record on their information. Access the application here -> https://github.com/kemaldemirgil/teamBuilder",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;