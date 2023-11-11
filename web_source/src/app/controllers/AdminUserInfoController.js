class AdminUserInfoController {
    // [GET] /
    index(req, res, next) {
        res.render('userinfo', {
            layout: 'main-admin',
            userinfoActive: true
        });
    }
}

module.exports = new AdminUserInfoController;