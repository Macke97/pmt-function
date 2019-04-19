const defaultOptions = {
    round: false,
    positive: false
}
export default (monthlyRate, monthlyPayments, presentValue, residualValue, advancedPayments, options = defaultOptions) => {
    /**
     * @param {number} monthlyRate - Monthly interest rate
     * @param {number} monthlyPayments - Number of periods (months)
     * @param {number} presentValue - Present value
     * @param {number} residualValue - Future value
     * @param {number} advancedPayments - 0 = end of period, 1 = beginning of period
     * @param {object} options - Options. See defaultOptions for available options
     */
    const roundResult = options.round || false
    const returnPositive = options.positive || false
    const t1 = 1 + monthlyRate
    const t2 = Math.pow(t1, monthlyPayments)
    const t3 = Math.pow(t1, (monthlyPayments - advancedPayments))
    let pmt = (presentValue - (residualValue / t2)) / (((1 - (1 / (t3))) / monthlyRate) + advancedPayments)
    if (roundResult) {
        pmt = Math.round(pmt);
    }

    if (!returnPositive) {
        pmt = pmt * -1
    }
    return pmt
}