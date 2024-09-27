const body = document.querySelector('body')
const underedlist = document.querySelector('.output')
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const history = document.querySelector('#history')
const display = document.querySelector('#display')
const Orderedlist = document.createElement('ol')
const warning = document.createElement('p')
const message = document.createElement('h3')
body.insertBefore(message, underedlist)

function checker() {
    message.textContent = 'MADE BY MAVERICK'
    warning.textContent = ''
    underedlist.textContent = ''
    let number = input.value
    input.value = ''

    if (number >= 1) {
        const list = document.createElement('li')
        list.textContent = number
        list.setAttribute('value', `${number}`)
        Orderedlist.appendChild(list)
        message.textContent = `Prime number`
        if (number > 20000) message.textContent += 's of 20000'
         else if (number > 2) message.textContent += `s of  ${number}`; else message.textContent += ` of  ${number}`;
    }

    Lebel:
    for (i = 2; i <= number; i++) {
        for (a = 2; a < i; a++) {
            if (i == 20001) {
        warning.setAttribute('class', 'warning')
        warning.textContent = 'Showing Only prime numbers from 1 - 20000 to aboved Crashing you Device.'
        body.insertBefore(warning, underedlist)
        break Lebel
    }
            if (i % a === 0) continue Lebel
        }
        let list = document.createElement ('li')
        list.textContent = i
        underedlist.appendChild(list)
    }
}

button.addEventListener ('click', checker)
input.focus()

let click = 0
function ColorSelection() {
    let count = ++click
    if (count === 10) {
        click = 0
    }
     if (count === 1) {
        body.style.backgroundColor = "rgb(0, 0, 139)"
        display.style.color = "rgb(73, 52, 52)";
        display.textContent = "◐"
    }
     if (count === 2) {
        body.style.backgroundColor = "rgb(73, 52, 52)"
        display.style.color = "rgb(52, 94, 94)";
        display.textContent = "◑"
    }
     if (count === 3) {
        body.style.backgroundColor = "rgb(52, 94, 94)"
        display.style.color = "rgb(52, 52, 94)"
        display.textContent = "◐"
    }
     if (count === 4) {
        body.style.backgroundColor = "rgb(52, 52, 94)";
        display.style.color = "rgb(73, 52, 94)"
        display.textContent = "◑"
    }
     if (count === 5) {
        body.style.backgroundColor = "rgb(73, 52, 94)"
        display.style.color = "rgb(94, 73, 52)"
        display.textContent = "◐"
    }
     if (count === 6) {
        body.style.backgroundColor = "rgb(94, 73, 52)"
        display.style.color = "rgb(94, 52, 73)"
        display.textContent = "◑"
    }
     if (count === 7) {
        body.style.backgroundColor = "rgb(94, 52, 73)"
        display.style.color = "rgb(52, 94, 73)"
        display.textContent = "◐"
    }
     if (count === 8) {
        body.style.backgroundColor = "rgb(52, 94, 73)"
        display.style.color = "rgb(94, 52, 52)"
        display.textContent = "◑"
    }
     if (count === 9) {
        body.style.backgroundColor = "rgb(94, 52, 52)"
        display.style.color = "rgb(94, 94, 52)"
        display.textContent = "◐"
    }
     if (count === 10) {
        body.style.backgroundColor = "rgb(94, 94, 52)"
        display.style.color ="rgb(0, 0, 139)"
        display.textContent = "◑"
    }
        
}
history.addEventListener('click', () => {
    message.textContent = 'Recent Search'
    underedlist.textContent = ''
    underedlist.appendChild(Orderedlist)
})

display.addEventListener('click', ColorSelection)