import priceFormat from "./price-format";

test('transforms a number to a string', () => {
    expect(priceFormat(8, 'monthly', '+')).toMatch('+$8/mo')
})