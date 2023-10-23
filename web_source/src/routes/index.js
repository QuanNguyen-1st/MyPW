const loginRouter = require('./login');

const homepageRouter = require('./homepage');
const passmanRouter = require('./passman');
const passgenRouter = require('./passgen');
const feedbackRouter = require('./feedback');

function route(app) {
    app.use('/login', loginRouter);
    app.use('/homepage', homepageRouter);
    app.use('/passman', passmanRouter);
    app.use('/passgen', passgenRouter);
    app.use('/feedback', feedbackRouter);
}

module.exports = route;