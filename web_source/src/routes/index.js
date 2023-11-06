const loginRouter = require('./login');

const homepageRouter = require('./homepage');
const passmanRouter = require('./passman');
const passgenRouter = require('./passgen');
const feedbackRouter = require('./feedback');

const adminHomepageRouter = require('./adminHomepage');

function route(app) {
    app.use('/login', loginRouter);
    app.use('/homepage', homepageRouter);
    app.use('/passman', passmanRouter);
    app.use('/passgen', passgenRouter);
    app.use('/feedback', feedbackRouter);

    app.use('/adminHomepage', adminHomepageRouter);
}

module.exports = route;