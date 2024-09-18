// RANDOM PASSWORD GENERATOR

const password = document.getElementById("password");

function uniquePassword(){

    function generate(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
        const numbersChars = "0123456789";
        const symbolsChars = "!@#$%^&*";

        let allowedChars = "";
        let pass = "";

        allowedChars += includeLowercase ? lowercaseChars: "";
        allowedChars += includeUppercase ? uppercaseChars: "";
        allowedChars += includeNumbers ? numbersChars:  "";
        allowedChars += includeSymbols ? symbolsChars: "";

        if (length <= 0) {
            return `(password Length must be at least 1)`;
        }
        if (allowedChars.length === 0) {
         return `(At least 1  set of character needs to be selected)`
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            pass += allowedChars[randomIndex];

        }
    
        return pass;

    }

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase =  true;
const includeNumbers = true;
const includeSymbols = true;

const generatePassword = generate(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

password.textContent = `Password:  ${generatePassword}`

}