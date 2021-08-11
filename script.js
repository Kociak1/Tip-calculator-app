const inputs = document.getElementsByName('r1')
const custom = document.querySelector('#custom')
const bill = document.querySelector('#bill')
const numbers = document.querySelector('#numbers')

const amount = document.querySelector('#amount')
const total = document.querySelector('#total')


let tip = 0, peoples =0, Bill = 0, Amount = 0, Total = 0

custom.addEventListener('input', () => {
    inputs.forEach(input => input.checked = false)
    tip = parseFloat(custom.value) || 0
    calculate()
})

bill.addEventListener('input', () => {
    Bill = parseFloat(bill.value) || 0
    calculate()
})

numbers.addEventListener('input', () => {
    numbers.parentNode.classList.remove('zero')
    let val= parseInt(numbers.value) 
    peoples = val || 0
    calculate()
    if(val < 1) numbers.parentNode.classList.add('zero')
})

inputs.forEach(input => input.addEventListener('click', () => {
    custom.value = ''
    tip = parseInt(input.value) || 0
    calculate()
}))

function calculate() {
let warunek = [tip, peoples, Bill].every(w => w != 0)
if(warunek) {
    Amount = Math.round(Bill / peoples *  tip) / 100
    amount.textContent = Amount
    Total = Math.round(Bill / peoples * 100) / 100 + Amount
    total.textContent = Total
} else {
    amount.textContent = '0.00'
    total.textContent = '0.00'
}
}