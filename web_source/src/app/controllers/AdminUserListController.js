class AdminUserListController {
    // [GET] /
    index(req, res, next) {
        res.render('userlist', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
}

module.exports = new AdminUserListController;