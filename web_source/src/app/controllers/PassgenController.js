function generatePassword(length = 14, includeDigits = true, includeSpecialChars = true) {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = includeDigits ? '0123456789' : '';
    const specialChars = includeSpecialChars ? '!@#$%^&*()-=_+[]{}|;:,.<>?' : '';
    const Letter = lowercaseLetters + uppercaseLetters;
    const characters = Letter + digits + specialChars;
    if (length < 8 || length >= 33) {
        throw new Error("Password length must be in the range of 8 to 32");
    }
    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

class PassgenController {
    // [GET] /
    index(req, res, next) {
        if(req.session.password) {
            res.render('passgen', {
                passgenActive: true,
                password: req.session.password
            });
        }
        else{
            res.render('passgen', {
            passgenActive: true
            });
        }
    }
    // [POST] /generate
    async generate(req, res, next) {
        const length = req.body.length;
        const includeDigits = req.body.includeDigits;
        const includeSpecialChars = req.body.includeSpecialChars;
        const password = generatePassword(length, includeDigits, includeSpecialChars);
        req.session.password = password;
        res.redirect('/passgen');
    }
}



module.exports = new PassgenController;