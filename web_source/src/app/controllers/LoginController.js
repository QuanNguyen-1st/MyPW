const accountModel = require('../models/account');

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
                        if (result[0].isAdmin === false) {
                            return res.redirect('homepage');
                        }
                        else {
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