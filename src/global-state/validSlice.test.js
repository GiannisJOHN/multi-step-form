import { validate } from "./validSlice"

test('turn the state to be true', () => {

    expect(validate(true).payload).toBe(true)
})