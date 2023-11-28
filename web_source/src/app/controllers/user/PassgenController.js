function generatePassword(length = 14, digits = '', specialChars ='') {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // const digits = includeDigits ? '0123456789' : '';
    // const specialChars = includeSpecialChars ? '!@#$%^&*()-=_+[]{}|;:,.<>?' : '';
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
            res.render('user/passgen', {
                passgenActive: true,
                password: req.session.password
            });
        }
        else{
            res.render('user/passgen', {
            passgenActive: true
            });
        }
    }
    // [POST] /generate
    async generate(req, res, next) {
        const length = req.body.length;
        // console.alert(req.body)
        const digits = req.body.digits;
        const specialChars = req.body.specialChars;
        const password = await generatePassword(length, digits, specialChars);
        req.session.password = password;
        res.redirect('/passgen');
    }
}



module.exports = new PassgenController; 