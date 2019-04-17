const defaultOptions = {
    round: false,
    positive: false
}
module.exports = (rate, nperiod, pv, fv, type, options = defaultOptions) => {
    /**
     * @param rate - Monthly interest rate
     * @param nperiod - Number of periods (months)
     * @param pv - Present value
     * @param fv - Future value
     * @param type - 0 = end of period, 1 = beginning of period
     */
    let roundResult = options.round || false
    let returnPositive = options.positive || false
    if (!fv) fv = 0;
    if (!type) type = 0;

    if (rate == 0) return -(pv + fv) / nperiod;

    let pvif = Math.pow(1 + rate, nperiod);
    let pmt = rate / (pvif - 1) * -(pv * pvif + fv);

    if (type == 1) {
        pmt /= (1 + rate);
    };
    if (roundResult) {
        pmt = Math.round(pmt);
    }

    if (returnPositive) {
        pmt = pmt * -1
    }

    return pmt
}