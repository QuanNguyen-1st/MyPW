class PassmanController {
    // [GET] /
    index(req, res, next) {
        res.render('user/passman', {
            passmanActive: true
        });
    }
}

module.exports = new PassmanController;