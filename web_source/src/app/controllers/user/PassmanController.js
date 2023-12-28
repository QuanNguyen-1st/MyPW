const passwordModel = require('../../models/password');

class PassmanController {
    // [GET] /
    async index(req, res, next) {
        const username = req.session.user.username;
        var passwordItems = await passwordModel.getPasswordsFrom(username);
        res.render('user/passman', {
            passmanActive: true,
            passwordItems: passwordItems,
        });
    }
    async get_passwordList(req, res, next){
        const username = req.session.user.username;
        var passwordItems = await passwordModel.getPasswordsFrom(username);
        // res.render('user/passman', {
        //     passwordItems: passwordItems,
        // });
        res.status(200).json({passwordItems: passwordItems});
    }
}

module.exports = new PassmanController;