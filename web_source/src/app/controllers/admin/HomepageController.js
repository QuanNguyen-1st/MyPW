class AdminHomepageController {
    // [GET] /
    index(req, res, next) {
        res.render('admin/homepage', {
            layout: 'main-admin',
            homepageActive: true
        });
    }

    homepage(req, res, next) {
        res.redirect('/admin/homepage');
    }
}

module.exports = new AdminHomepageController;