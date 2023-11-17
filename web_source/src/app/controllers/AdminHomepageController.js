class AdminHomepageController {
    // [GET] /
    index(req, res, next) {
        res.render('adminHomepage', {
            layout: 'main-admin',
            homepageActive: true
        });
    }
}

module.exports = new AdminHomepageController;