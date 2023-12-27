const accountModel = require('../models/account');
const userModel = require('../models/user');

class LoginController {
    // [GET] /
    index(req, res, next) {
        res.render('login', {
            layout: 'userAuth'
        });
    }

    // [POST] /
    verify(req, res) {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.render('login', {
                    no_user: true,
                    layout: 'userAuth'
                });
            }
            accountModel.findUsername(username)
                .then((result) => {
                    // console.log(result);
                    if (result && result[0].password === password) {
                        userModel.updateAccess(username);
                        const user = { username: username};
                        if (result[0].isAdmin === false) {
                            req.session.user = user;
                            req.session.user.role = 'user';
                            return res.redirect('homepage');
                        }
                        else {
                            req.session.user = user;
                            req.session.user.role = 'admin';
                            return res.redirect('admin/homepage');
                        }  
                    }
                    return res.render('login', {
                        no_user: true,
                        layout: 'userAuth'
                    });
                })

        }
        catch (error) {
            // res.send("Invalid information");
        }
    }
}

module.exports = new LoginController;