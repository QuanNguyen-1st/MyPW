class AdminUserListController {
    // [GET] /
    index(req, res, next) {
        res.render('admin/userlist', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
    // [GET] /"check-user-list"
    OpenCheckUserListForm(req, res, next) {
        res.render('admin/checkuserlist', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
    OpenCheckUserInfoForm(req, res, next) {
        res.render('admin/checkuserinfo', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
    OpenCheckFrequenceForm(req, res, next) {
        res.render('admin/checkfrequence', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
}

module.exports = new AdminUserListController;