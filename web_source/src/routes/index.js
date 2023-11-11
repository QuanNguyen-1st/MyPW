const loginRouter = require('./login');

const homepageRouter = require('./homepage');
const passmanRouter = require('./passman');
const passgenRouter = require('./passgen');
const feedbackRouter = require('./feedback');
const userinfoRouter = require('./userinfo');

const adminHomepageRouter = require('./adminHomepage');
const adminPassmanRouter = require('./adminPassman');
const adminPassgenRouter = require('./adminPassgen');
const adminFeedbackRouter = require('./adminFeedback');
const adminUserListRouter = require('./adminUserList');
const adminInfoRouter = require('./adminInfo');

function route(app) {
    app.use('/login', loginRouter);
    
    app.use('/homepage', homepageRouter);
    app.use('/passman', passmanRouter);
    app.use('/passgen', passgenRouter);
    app.use('/feedback', feedbackRouter);
    app.use('/userinfo', userinfoRouter);
    
    app.use('/admin-homepage', adminHomepageRouter);
    app.use('/admin-passman', adminPassmanRouter);
    app.use('/admin-passgen', adminPassgenRouter);
    app.use('/admin-feedback', adminFeedbackRouter);
    app.use('/user-list', adminUserListRouter);
    app.use('/admin-info', adminInfoRouter);
}

module.exports = route;