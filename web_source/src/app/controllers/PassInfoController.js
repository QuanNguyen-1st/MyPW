class PassInfoController {
    // [GET] /
    index(req, res, next) {
        res.render('passinfo', {
            passmanActive: true
        });
    }
}

module.exports = new PassInfoController;