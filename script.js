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



// this is for handle input
// create function handleInput()
function handleInput() {
	// get the font size:
	const fontSize = inputSize.value
	// Set the style. add + 'px' to make sure it implements it into the font size
	display.style.fontSize = fontSize + 'px' 
	// Show the size
    showSize.innerHTML = fontSize 

    const fontFamily = selectFont.value
    display.style['font-family'] = fontFamily
    showFont.innerHTML = fontFamily

    const fontColor = inputColor.value
    display.style.color = fontColor
    showColor.innerHTML = fontColor

    const bgColor = inputBGColor.value
    display.style.backgroundColor = bgColor
    showBGColor.innerHTML = bgColor

    const headline = enterText.value
    display.innerHTML = headline
} 

// call the function
handleInput()