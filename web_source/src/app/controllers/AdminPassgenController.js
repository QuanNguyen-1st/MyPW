class AdminPassgenController {
    // [GET] /
    index(req, res, next) {
        res.render('passgen', {
            layout: 'main-admin',
            passgenActive: true
        });
    }
}

module.exports = new AdminPassgenController;