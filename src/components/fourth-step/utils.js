export function filterAddons(array, mode) {
    let value = {
        array: null,
        price: null
    }

    let filtered = array.filter((each) => {
        let returnValue
        if (each.checked === true) {
            returnValue = each
        }
        return returnValue
    })

    value.array = filtered.map((each) => {
        return each
    })

    value.price = filtered.map((each) => {
        return (each.pricing[mode])
    })

    return value
}