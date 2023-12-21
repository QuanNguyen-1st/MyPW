const userModel = require('../../models/user');

class AdminUserListController {
    // [GET] /
    index(req, res, next) {
        res.render('admin/userlist', {
            layout: 'main-admin',
            userlistActive: true
        });
    }

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
    // async openCheckUserInfoForm(req, res, next) {
    //     const userInfo = await userModel.findUsername('john_doe');
    //     res.render('admin/checkuserinfo', {
    //         layout: 'main-admin',
    //         userlistActive: true,
    //         userInfoItem: userInfo
    //     });
    // }

    // [GET] /check-user-info/:username
    async openCheckUserInfoFormUsername(req, res, next) {
        const username = req.params.username;
        const userInfo = await userModel.findUsername(username);
        res.render('admin/checkuserinfo', {
            layout: 'main-admin',
            userlistActive: true,
            userInfoItem: userInfo
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