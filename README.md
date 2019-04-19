# PMT
Simple PMT function. 
Credit to [Tobias Lanz](https://stackoverflow.com/users/7354661/tobias-lanz) @StackOverflow

## Parameters
```js
/**
 * @param {number} rate - Monthly interest rate
 * @param {number} nperiod - Number of periods (months)
 * @param {number} pv - Present value
 * @param {number} fv - Future value
 * @param {number} type - 0 = end of period, 1 = beginning of period
 * @param {object} options - Options. See defaultOptions for available options
 */
```
## Options

```js
const defaultOptions = {
    round: false, // If the result should be rounded
    positive: false // If the result should be a positive number
}
```

## Example usage
### Require the module
```js
const pmt = require('@marcusthelin/pmt')
```

### Usage
```js
const interestRate = 0.475 / 12

const periods = 36

const presentValue = 99330

const futureValue = 56760

const type = 1

const pmtVal = pmt(interestRate, months, presentVal, futureVal, type, {
    round: true,
    positive: true
}) // 1490
```
