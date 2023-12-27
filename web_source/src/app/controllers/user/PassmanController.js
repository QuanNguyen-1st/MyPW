const passwordModel = require('../../models/password');

const formatDateTime = (date) => {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    };
    return date.toLocaleString('en-US', options);
};

class PassmanController {
    // [GET] /
    async index(req, res, next) {
        const username = req.session.user.username;
        var passwordItems = await passwordModel.getPasswordsFrom(username);
        if (passwordItems) {
            passwordItems = passwordItems.map((item) => ({
                ...item,
                dayCreate: formatDateTime(item.dayCreate),
                dayExpire: formatDateTime(item.dayExpire),
                lastAccessDay: formatDateTime(item.lastAccessDay)
            }))
        }
        res.render('user/passman', {
            passmanActive: true,
            passwordItems: passwordItems
        });
    }

    
}

module.exports = new PassmanController;