// Assignment Code
let generateBtn = document.querySelector('#generate')

// Sets of characters used for password
let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ'
let num = '1234567890'
let symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

/**
 * Build password based on user input
 *
 * Returns generated password if valid inputs
 *
 * Returns "Choose at least one character type"
 * or "Invalid input" If invalid input
 */
function generatePassword() {
  // Ask user for length, convert to number
  let charLength = parseInt(
    prompt(
      'How many characters would you like your password to be? Please pick a number between 8 and 128.'
    )
  )
  if (charLength >= 8 && charLength <= 128) {
    // Ask user for character types
    let containsLower = confirm('Would you like lower case characters?')
    let containsUpper = confirm('Would you like upper case characters?')
    let containsNum = confirm('Would you like numbers?')
    let containsSym = confirm('Would you like symbols?')

    // String for storing different character sets
    let dictionary = ''

    // Build dictionary based on user selecter types
    if (containsSym) {
      dictionary += symbol
    }
    if (containsUpper) {
      dictionary += upperCase
    }
    if (containsLower) {
      dictionary += lowerCase
    }
    if (containsNum) {
      dictionary += num
    }

    // Validate that character type chosen
    if (dictionary.length === 0) {
      return 'Choose at least one character type'
    } else {
      // Empty string for generated password
      let generatedPassword = ''
      // Turn dictionary string to array
      let dictArray = dictionary.split('')

      // Iterate for `charLength` times to build password
      for (let i = 0; i < charLength; i++) {
        // Add random character to generated password
        // select random index from 0 to (length - 1)
        let randomIndex = Math.floor(Math.random() * (dictionary.length - 1))
        console.log(randomIndex, dictArray.length)
        generatedPassword += dictArray[randomIndex]
      }
      return generatedPassword
    }
  } else {
    return 'Invalid input'
  }
}

function writePassword() {
  let password = generatePassword()
  let passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
