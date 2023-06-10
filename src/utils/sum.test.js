import sum from "./sum";


test('adds one number to an array of numbers', () => {
    expect(sum(10, [10 + 10])).toBe(30)
})