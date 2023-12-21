const userModel = require('../../models/user');

class AdminUserListController {
    // [GET] /
    index(req, res, next) {
        res.render('admin/userlist', {
            layout: 'main-admin',
            userlistActive: true
        });
    }
    
    // openCheckUserListForm(req, res, next) {
    //     res.render('admin/checkuserlist', {
    //         layout: 'main-admin',
    //         userlistActive: true
    //     });
    // }

    // [GET] /check-user-list
    async openCheckUserListForm(req, res, next) {
        const userlist = await userModel.getAllData();
        res.render('admin/checkuserlist', {
            layout: 'main-admin',
            userlistActive: true,
            userItems: userlist
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