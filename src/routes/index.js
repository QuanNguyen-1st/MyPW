const exampleRouter = require('./example');

function route(app) {
    app.use('/example', exampleRouter);
}

module.exports = route;