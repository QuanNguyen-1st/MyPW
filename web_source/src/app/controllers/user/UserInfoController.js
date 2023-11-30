class UserInfoController {
    // [GET] /
    index(req, res, next) {
        res.render('user/userinfo', {
            userinfoActive: true
        });
    }
}

module.exports = new UserInfoController;