class AdminUserListController {
    // [GET] /
    index(req, res, next) {
        res.render('admin/userlist', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
    
    // [GET] /check-user-list
    openCheckUserListForm(req, res, next) {
        res.render('admin/checkuserlist', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
    
    // [GET] /check-user-info
    openCheckUserInfoForm(req, res, next) {
        res.render('admin/checkuserinfo', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
    
    // [GET] /check-frequence
    openCheckFrequenceForm(req, res, next) {
        res.render('admin/checkfrequence', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
}

module.exports = new AdminUserListController;