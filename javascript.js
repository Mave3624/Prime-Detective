const body = document.querySelector('body')
const output = document.querySelector('.out')
const input = document.querySelector('#input')
const button = document.querySelector('#button')

const message = document.createElement('h3')
button.addEventListener ('click', () => {
        message.textContent = 'MADE BY MAVERICK'
        body.insertBefore(message, output)
        output.textContent = ''
    let number = input.value
    input.value = ''

    if (number > 1) {
        message.textContent = `Prime number`
         if (number > 2) message.textContent += `s of  ${number}`; else message.textContent += ` of  ${number}`;
    
        }

    Lebel:
    for (i = 2; i <= number; i++) {
        for (a = 2; a < i; a++) {
            if (i % a == 0) continue Lebel
        }
        let list = document.createElement ('li')
        list.textContent = i
        output.appendChild(list)
    }
}
)
input.focus()