const express = require('express')
const path = require('path');
const bodyParse = require('body-parser');
const exphbs = require('express-handlebars'); 

const app = express()
const port = 3000

const route = require('./routes');

app.use(bodyParse.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParse.urlencoded({
    extended: true
}));

const hbsHelpers = exphbs.create({
    helpers: require("./helpers/handlebars.js").helpers,
    extname: '.hbs'
});

app.engine('hbs', hbsHelpers.engine);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

route(app);

app.listen(port, () => console.log(`App listening on port ${port}`))