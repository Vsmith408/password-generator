// Assignment Code
let generateBtn = document.querySelector('#generate')
let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ'
let num = '1234567890'
let symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

// Write password to the #password input

function writePassword() {
  let charLength = parseInt(
    prompt(
      'How many characters would you like your password to be? Please pick a number between 8 and 128.'
    )
  )
  if (charLength >= 8 && charLength <= 128) {
    let containsLower = confirm('Would you like lower case characters?')
    let containsUpper = confirm('Would you like upper case characters?')
    let containsNum = confirm('Would you like numbers?')
    let containsSym = confirm('Would you like symbols?')
  } else {
    alert('Invalid input')
  }

  console.log({
    charLength,
    containsLower,
    containsUpper,
    containsNum,
    containsSym,
  })
  let password = generatePassword()
  let passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
