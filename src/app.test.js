const rewire = require("rewire")
const app = rewire("./app")
const logRequests = app.__get__("logRequests")
// @ponicode
describe("logRequests", () => {
    test("0", () => {
        let callFunction = () => {
            logRequests("DELETE", 429, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            logRequests("GET", 404, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            logRequests("POST", 429, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            logRequests("POST", 500, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            logRequests("DELETE", 400, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            logRequests("", undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
