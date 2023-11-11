class AdminUserListController {
    // [GET] /
    index(req, res, next) {
        res.render('userlist', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
    // [GET] /"check-user-list"
    OpenCheckUserListForm(req, res, next) {
        res.render('checkuserlist', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
    OpenCheckUserInfoForm(req, res, next) {
        res.render('checkuserinfo', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
}

module.exports = new AdminUserListController;