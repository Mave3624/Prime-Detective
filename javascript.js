const body = document.querySelector('body')
const output = document.querySelector('.out')
const input = document.querySelector('#input')
const button = document.querySelector('#button')

const message = document.createElement('h3')
button.addEventListener ('click', () => {
        message.textContent = ''
        output.textContent = ''
    let n = input.value
    input.value = ''

    if (n > 1) {
        message.textContent = `Prime number`
         if (n > 2) message.textContent += `s of  ${n}`; else message.textContent += ` of  ${n}`

        body.insertBefore(message, output)
    }

    Lebel:
    for (i = 2; i <= n; i++) {
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
console.log('Made by MAVERICK')