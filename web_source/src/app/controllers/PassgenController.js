class PassgenController {
    // [GET] /
    index(req, res, next) {
        res.render('passgen', {
            passgenActive: true
        });
    }
}

module.exports = new PassgenController;