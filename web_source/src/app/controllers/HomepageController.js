class HomepageController {
    // [GET] /
    index(req, res, next) {
        // res.render('test', {
        //     homepageActive: true
        // });
        res.render('homepage', {
            homepageActive: true
        });
    
    
    }
}

module.exports = new HomepageController;