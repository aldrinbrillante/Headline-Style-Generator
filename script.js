// The headline element
const display = document.querySelector('#display')
const inputBGColor = document.querySelector('#input-bg-color')
const inputColor = document.querySelector('#input-color')



// The input field for size
const inputSize = document.querySelector('#input-size')
// The element that displays the value 
const showSize = document.querySelector('#show-size')
// The element that displays the font
const showFont = document.querySelector('#show-font')
// The element that displays the color
const showColor = document.querySelector('#show-color')
// The element that displays the background color
const showBGColor = document.querySelector('#show-bg-color')
// The element that selects the font
const selectFont = document.querySelector('#select-font')
// The element that allows to enter text
const enterText = document.querySelector('#enter-text')


//all the .addEventListener  's
inputSize.addEventListener('input', handleInput)
inputBGColor.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
selectFont.addEventListener('input', handleInput)
enterText.addEventListener('input', handleInput)