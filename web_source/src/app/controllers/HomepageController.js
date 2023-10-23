class HomepageController {
    // [GET] /
    index(req, res, next) {
        res.render('homepage', {
            homepageActive: true
        });
    }
}

module.exports = new HomepageController;