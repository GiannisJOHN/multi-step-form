function priceFormat(num, mode, option = '') {
    let plan = mode === 'monthly'
        ? 'mo'
        : 'yr'
    let value = `${option}$${num}/${plan}`
    return value
}

export default priceFormat