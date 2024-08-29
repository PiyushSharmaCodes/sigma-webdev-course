// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
const password1 = "Password123"; 
const password2 = "pass123";     
const password3 = "PASSWORD123"; 
const password4 = "Passw@rd";    

function validatePassword(password) {
    
    const hasUpperCase = /[A-Z]/.test(password); 
    const hasLowerCase = /[a-z]/.test(password); 
    const hasDigit = /\d/.test(password);       
    const isValidLength = password.length >= 8;
    return hasUpperCase && hasLowerCase && hasDigit && isValidLength;
}

console.log(validatePassword(password1));
console.log(validatePassword(password2));
console.log(validatePassword(password3));
console.log(validatePassword(password4));