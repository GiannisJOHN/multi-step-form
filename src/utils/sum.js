
function sum(planPrice, addonsArray) {
    let sum = planPrice
    if (addonsArray.length > 0) {
        for (let i = 0; i < addonsArray.length; i++) {
            sum += addonsArray[i]
        }
        return sum
    } else {
        return sum
    }
}

export default sum