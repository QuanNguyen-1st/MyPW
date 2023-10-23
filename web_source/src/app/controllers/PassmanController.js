class PassmanController {
    // [GET] /
    index(req, res, next) {
        res.render('passman', {
            passmanActive: true
        });
    }
}

module.exports = new PassmanController;