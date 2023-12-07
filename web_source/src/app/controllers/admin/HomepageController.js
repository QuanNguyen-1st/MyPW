const accountModel = require('../../models/account');

class AdminHomepageController {
    // [GET] /
    async index(req, res, next) {
        var allUsers = await accountModel.getUsername();
        res.render('admin/homepage', {
            layout: 'main-admin',
            homepageActive: true,
            user_list: JSON.stringify(allUsers)
        });
    }

    login(req, res, next) {
        res.redirect('/login');
    }

}

module.exports = new AdminHomepageController;