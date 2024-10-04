const button = document.querySelector('button')
const list = document.querySelector('table')
const rows = document.querySelector('#rows')

let rowCount = 0

const addJokerRow = () => {
    const row = list.insertRow() // luo uusi rivi

    for(let i = 0; i < 7; i++) { // tee 7 kertaa
        const cell = row.insertCell() // luo uusi solu
        const randomNumber = Math.floor(Math.random() * 10) // arvo satunnaisluku 0-9 välillä
        cell.textContent = randomNumber // aseta luku soluun
    }
}

button.addEventListener('click', () => {
    addJokerRow() // lisää rivi

    rowCount++ //lisää 1 laskuriin
    rows.textContent = rowCount // vie laskurin arvo käyttöliittymään
})



