class LoginController {
    // [GET] /
    index(req, res, next) {
        res.render('login', {
            layout: 'userAuth'
        });
    }
}

module.exports = new LoginController;