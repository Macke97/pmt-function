# PMT
Simple PMT function. 
Credit to [M Arfan](https://stackoverflow.com/users/1109197/m-arfan) @StackOverflow

## Options

```js
const defaultOptions = {
    round: false,
    positive: false
}
```

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