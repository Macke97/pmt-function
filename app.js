const pmt = require('./lib/pmt')


const interestRate = 0.0475 / 12

const months = 24

const presentVal = 20000

const futureVal = 100000

const type = 1

const pmtVal = pmt(interestRate, months, presentVal, futureVal, type, {
    round: false,
    positive: false
})

console.log(pmtVal)