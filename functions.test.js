let myFunctions = require('./functions')

test("testing return2 function", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("testing greeting function", () => {
    expect(myFunctions.greeting('James')).toBe("Hello, James.")
})

test("testing greeting function", () => {
    expect(myFunctions.greeting("Jill")).toBe("Hello, Jill.")
})

test("testing add function", () => {
    expect(myFunctions.add(1,2)).toBe(3)
})

test("testing add function", () => {
    expect(myFunctions.add(5,9)).toBe(14)
})


describe("testing the math functions", () => {
    test("add function", () => {
        expect(myFunctions.add(20,21)).toBe(41)
    })
    test("subtract function", () => {
        expect(myFunctions.subtract(9,6)).toBe(3)
    })
    test("multiply function", () => {
        expect(myFunctions.multiply(4,5)).toBe(20)
    })
    test("divide function", () => {
        expect(myFunctions.divide("hello")).toBe(9)
    })
})