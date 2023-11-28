class HomepageController {
    // [GET] /
    index(req, res, next) {
        res.render('user/homepage', {
            homepageActive: true
        });
    }

    login(req, res, next) {
        res.redirect('/login');
    }
}

module.exports = new HomepageController;