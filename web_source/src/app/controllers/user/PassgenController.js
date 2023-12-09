async function generatePassword(length = 14, useDigit=true, digits='', specialChars= true, useSpecialchar='') {
    if (length < 8 || length >= 33) {
        throw new Error("Password length must be in the range of 8 to 32");
    } 
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // const digits = includeDigits ? '0123456789' : '';
    // const specialChars = includeSpecialChars ? '!@#$%&?' : '';
    let Letter = lowercaseLetters + uppercaseLetters;

    // Fisher-Yates shuffle algorithm
    const characters = Letter.split('');
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    Letter = characters.join('');


    let indicesOfDigits = [];
    if (useDigit) {
      let randomNumber = Math.floor(Math.random() * 3) + 1;
      while (indicesOfDigits.length < randomNumber) {
          let randomIndex = Math.floor(Math.random() * length);
          if (!indicesOfDigits.includes(randomIndex)) {
              indicesOfDigits.push(randomIndex);
          }
      }
    }
    let indicesOfSpecialChars = [];
    if (useSpecialchar) {
    let randomSpecial = Math.floor(Math.random() * 3) + 1;
      while (indicesOfSpecialChars.length < randomSpecial) {
          let randomIndex = Math.floor(Math.random() * length);
          if (!indicesOfSpecialChars.includes(randomIndex) && !indicesOfDigits.includes(randomIndex)) {
              indicesOfSpecialChars.push(randomIndex);
          }
      }
    }
    let password = '';
    for (let i = 0; i < length; i++) {
        if (indicesOfDigits.includes(i) && useDigit) {
            password += digits[Math.floor(Math.random() * digits.length)];
        } else if (indicesOfSpecialChars.includes(i) && useSpecialchar) {
            password += specialChars[Math.floor(Math.random() * specialChars.length)];
        } else {
            password += characters[Math.floor(Math.random() * Letter.length)];
        }
    }
    return password;
}
class PassgenController {
    // [GET] /
    index(req, res, next) {
        if(req.session.password) {
            const password = req.session.password;
            req.session.password = null;
            res.render('user/passgen', {
                passgenActive: true,
                password: password
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
        // console.log(req.body)
        const useDigit = req.body.useDigit === 'on';
        const digits = useDigit ? req.body.digits: '';
        const useSpecialchar = req.body.useSpecialchar === 'on';
        const specialChars = useSpecialchar?  req.body.specialChars : '';
        const password = await generatePassword(length,useDigit, digits, specialChars, useSpecialchar);
        req.session.password = password;
        res.redirect('/passgen');
    }
}



module.exports = new PassgenController; 