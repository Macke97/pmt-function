const pmt = require('./')
console.log(pmt)

const interestRate = 4.75 / 1200

const months = 36

const presentVal = 99330

const futureVal = 56760

const type = 1

const pmtVal = pmt(interestRate, months, presentVal, futureVal, type, {
    round: true,
    positive: true
})

console.log(pmtVal)