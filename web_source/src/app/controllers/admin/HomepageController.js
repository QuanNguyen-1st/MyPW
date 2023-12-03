const account = require('../../models/account');

class AdminHomepageController {
    // [GET] /
    index(req, res, next) {
        res.render('admin/homepage', {
            layout: 'main-admin',
            homepageActive: true
        });
    }

    login(req, res, next) {
        res.redirect('/login');
    }

    async tpest(req, res, next) {
        console.log(await account.getExampleData());
        res.render('admin/homepage', {
            layout: 'main-admin',
            homepageActive: true
        });
    }
}

module.exports = new AdminHomepageController;