export function filterAddons(array, mode) {
    let value = {
        array: null,
        price: null
    }

    let filtered = array.filter((each) => {
        if (each.checked === true) {
            return each
        }
    })

    value.array = filtered.map((each) => {
        return each
    })

    value.price = filtered.map((each) => {
        return (each.pricing[mode])
    })

    return value
}