let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput; // nie zadziała, bo Input jest UNKNOWN, a Name ma gwarantowany STRING

// NEVER - taka funckja zawsze zamknie nasz skrypt
function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code}
}

const result = generateError('An error occured!', 500)

console.log(result)