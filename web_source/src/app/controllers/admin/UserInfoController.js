class AdminUserInfoController {
    // [GET] /
    index(req, res, next) {
        res.render('admin/info', {
            layout: 'main-admin',
            userinfoActive: true
        });
    }
}

module.exports = new AdminUserInfoController;