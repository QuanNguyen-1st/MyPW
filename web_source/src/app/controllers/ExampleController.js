class ExampleController {
    // [GET] /
    index(req, res, next) {
        res.render('example');
    }
}

module.exports = new ExampleController;