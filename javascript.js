const body = document.querySelector('body')
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const history = document.querySelector('#history')
const display = document.querySelector('#display')
const Orderedlist = document.createElement('ol')
const underedlist = document.createElement('ul')
const warning = document.createElement('p')
const message = document.createElement('h3')
warning.setAttribute('class', 'warning')
body.append(message)

function checker() {
    message.textContent = 'MADE BY MAVERICK'
    body.append(underedlist)
    Orderedlist.remove()
    warning.textContent = ''
    underedlist.textContent = ''
    let number = input.value
    number = Number(number)
    
    if (number >= Number() && number > 0) {
        message.textContent = `Prime number`
        number > 20000 ? number = 20000:
        number > 2 ? message.textContent += `s of  ${number}`:
        message.textContent += ` of  ${number}`;

        const list = document.createElement('li')
        list.textContent = input.value
        list.setAttribute('value', number)
        Orderedlist.appendChild(list)
    
    list.addEventListener('click',() => {
        Orderedlist.remove()
        underedlist.textContent = 
        warning.textContent = ''
        body.appendChild(underedlist)
    
        message.textContent = `Prime number`
        number > 20000 ? number = 20000:
        number > 2 ? message.textContent += `s of  ${number}`:
        message.textContent += ` of  ${number}`;
    out:
        for (i = 2; i <= number; i++) {
            for (a = 2; a < i; a++) {
                if (i === 20000) {
                warning.textContent = 'Showing Only prime numbers from 1 - 20000 to aboved Crashing you Device.'
                body.insertBefore(warning, underedlist)
                break out
            }
                if (i % a === 0) continue out
        }
            let prime = document.createElement ('li')
            prime.textContent = i
            underedlist.appendChild(prime)
            }
        }
    ) 
    }
    
out:
    for (i = 2; i <= number; i++) {
        for (a = 2; a < i; a++) {
            if (i === 20000) {
            warning.textContent = 'Showing Only prime numbers from 1 - 20000 to aboved Crashing you Device.'
            body.insertBefore(warning, underedlist)
            break out
        }
            if (i % a === 0) continue out
    }
        let prime = document.createElement ('li')
        prime.textContent = i
        underedlist.appendChild(prime)
    }
    input.value = ''
}

button.addEventListener ('click', checker,)

history.addEventListener('click', () => {
    message.textContent = 'Recent Search'
    body.append(Orderedlist)
    warning.textContent = ''
    underedlist.remove()
})

let click = 0
display.addEventListener('click', function ColorSelection() {
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
        
})