const express = require('express')
const sql = require('mssql/msnodesqlv8');
const path = require('path');
const bodyParse = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars'); 
const session = require('express-session')
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
app.use(
    session({
        secret: 'HCMUTN3V3RD13',
        resave: false,
        saveUninitialized: false,
  }));
  
app.engine('hbs', hbsHelpers.engine);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

route(app);

process.on('SIGINT', () => {
    sql.close().then(() => {
      console.log('Connection closed.');
      process.exit();
    });
  });
  

app.listen(port, () => console.log(`App listening on port ${port}`))