class UserInfoController {
    // [GET] /
    index(req, res, next) {
        res.render('userinfo', {
            userinfoActive: true
        });
    }
}

module.exports = new UserInfoController;