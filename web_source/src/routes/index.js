const loginRouter = require('./login');

const homepageRouter = require('./homepage');
const passmanRouter = require('./passman');
const passgenRouter = require('./passgen');
const feedbackRouter = require('./feedback');
const userinfoRouter = require('./userinfo');

const adminHomepageRouter = require('./adminHomepage');
const adminUserListRouter = require('./adminUserList');

function route(app) {
    app.use('/login', loginRouter);
    
    app.use('/homepage', homepageRouter);
    app.use('/passman', passmanRouter);
    app.use('/passgen', passgenRouter);
    app.use('/feedback', feedbackRouter);
    app.use('/userinfo', userinfoRouter);
    
    app.use('/admin-homepage', adminHomepageRouter);
    app.use('/user-list', adminUserListRouter);
}

module.exports = route;