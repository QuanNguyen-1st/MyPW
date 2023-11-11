class AdminHomepageController {
    // [GET] /
    index(req, res, next) {
        res.render('homepage', {
            layout: 'main-admin',
            homepageActive: true
        });
    }
}

module.exports = new AdminHomepageController;