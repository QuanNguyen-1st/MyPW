class AdminHomepageController {
    // [GET] /
    index(req, res, next) {
        res.render('homepage', {
            layouts: 'main-admin',
            homepageActive: true
        });
    }
}

module.exports = new AdminHomepageController;