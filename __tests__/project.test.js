import { 
    capitalize,
    reverseString, 
    makeCalculator,
    caesar,
    analyze
 } from '../project'

describe('Testing string outcomes', () => {
    const string = 'test'

    test('Returned string\'s first character is capitalised', () => {
        expect(capitalize(string)).toBe('Test')
    })

    test('String is reversed in correct order', ()=> { 
        expect(reverseString(string)).toBe('tset')
        
    })

})

describe('Testing Calculator', () => {

    test('Returns an Object', () => {
        expect(typeof makeCalculator(3, 2)).toBe('object')
        expect(makeCalculator(3, 2) instanceof Array  === false).toBeTruthy()
        expect(makeCalculator(3, 2) !== null).toBeTruthy()
    })

    test('Calculator has method "add"', () => {
        expect(makeCalculator()).toHaveProperty('add')
    })

    test('Calculator has method "subtract"', () => {
        expect(makeCalculator()).toHaveProperty('subtract')
    })

    test('Calculator has method "divide"', () => {
        expect(makeCalculator()).toHaveProperty('divide')
    })

    test('Calculator has method "multiply"', () => {
        expect(makeCalculator()).toHaveProperty('multiply')
    })

    test('Calculator can correctly sum parameters', () => {
        expect(makeCalculator(3, 2).add()).toBe(5)
        expect(makeCalculator('3', 2).add()).toBe(5)
    })
    test('Calculator can correctly subtract parameters', () => {
        expect(makeCalculator(3, 2).subtract()).toBe(1)
        expect(makeCalculator('3', 2).subtract()).toBe(1)
        expect(makeCalculator(2, 3).subtract()).toBe(-1)
        expect(makeCalculator(5.3, 2.1).subtract()).toBeCloseTo(3.2)
    })
    test('Calculator can correctly divide parameters', () => {
        expect(makeCalculator(10, 2).divide()).toBe(5)
        expect(makeCalculator('10', 2).divide()).toBe(5)
        expect(makeCalculator('5', 2).divide()).toBe(2.5)
        expect(makeCalculator(3.3, 1.1).divide()).toBeCloseTo(3)
        expect(makeCalculator(-10, 2).divide()).toBe(-5)
        
    })
    test('Calculator can correctly multiply parameters', () => {
        expect(makeCalculator(3, 2).multiply()).toBe(6)
        expect(makeCalculator('3', 2).multiply()).toBe(6)
        expect(makeCalculator(3.3, 1.1).multiply()).toBeCloseTo(3.63)
        expect(makeCalculator(-10, 2).multiply()).toBe(-20)
    })
})

describe('Caesar Cipher tests', () => {

    test('It shifts letter to the right using the shift number ', () =>{
        expect(caesar('a',1)).toBe('b')
    })
    test('It shifts letter to the left using the shift number ', () =>{
        expect(caesar('a',-2)).toBe('y')
    })
    test('It works with uppercase letters ', () =>{
        expect(caesar('A',2)).toBe('C')
    })
    test('It works with multiple letters', () =>{
        expect(caesar('ABCD',1)).toBe('BCDE')
    })
    test('It works with punctuation and special symbols', () =>{
        expect(caesar('abc!',1)).toBe('bcd!')
    })
    test('It works with space between', () =>{
        expect(caesar('abc, abc!',1)).toEqual('bcd, bcd!')
    })

})

describe('Array Analysis tests', () => {
    const array = [1,8,3,4,2,6]
    test('It returns an Object', () => {
        expect(typeof analyze(array)).toBe('object')
        expect(analyze(array) instanceof Array  === false).toBeTruthy()
        expect(analyze(array) !== null).toBeTruthy()
    })
    test('It contains property name that is "average"', () => {
        expect(analyze(array)).toHaveProperty('average')
    })
    test('It contains property name that is "min"', () => {
        expect(analyze(array)).toHaveProperty('min')
    })
    test('It contains property name that is "max"', () => {
        expect(analyze(array)).toHaveProperty('max')
    })
    test('It contains property name that is "length"', () => {
        expect(analyze(array)).toHaveProperty('length')
    })
    test('"average" property returns number that is the average of whole array', () => {
        expect(analyze(array).average).toBe(4)
    })
    test('"min" property returns the smallest number', () => {
        expect(analyze(array).min).toBe(1)
    })
    test('"max" property returns the biggest number in the array', () => {
        expect(analyze(array).max).toBe(8)
    })
    test('"length" property returns the length of the array', () => {
        expect(analyze(array).length).toBe(6)
    })
})


