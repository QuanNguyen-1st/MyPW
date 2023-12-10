function passwordEntropy(password) {
  const length = password.length;
  const hasDigit = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  console.log(hasSpecialChars);
  console.log(hasDigit);
  // Your code here

}

async function analyze(password) {
  

}

