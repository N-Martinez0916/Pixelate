// Your code here
// const ul = document.getElementById('the-ul')
// const newLi = document.createElement('li')
// ul.appendChild(newLi)

const addRow = document.getElementById('add-row')
addRow.addEventListener('click', makeRow)

const table = document.getElementById('table')
function makeRow() {
const row = document.createElement('tr')
for (let i = 0; i < 20; i++) {
const td = document.createElement('td')
row.appendChild(td)
}
table.appendChild(row)
}
