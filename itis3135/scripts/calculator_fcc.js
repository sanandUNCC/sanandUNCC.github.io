const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator__keys")
const display = document.querySelector('.calculator__display')
const key = e.target
const action = key.dataset.action
const previousKeyType = calculator.dataset.previousKeyType

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
        }
    }


})

if (!action) {
    if (displayedNum === '0') {
        display.textContent = keyContent
    } else {
        display.textContent = displayedNum + keyContent
    }
}



if (action === 'decimal') {
    alert('decimal key!')
}

if (action === 'clear') {
    alert('clear key!')
}

if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum

    display.textContent = calculate(firstValue, operator, secondValue)
}

