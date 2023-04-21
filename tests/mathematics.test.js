const sum = require('../mathematics.js');

describe('sum', () => {
    it('is defined', () => {
        expect(sum).toBeDefined();
    });
    it('1 + 1 = 2', () => {
        expect(sum(1, 1)).toBe(2);
    });
    it('throw error if a or b are NaN', () => {
        expect(()=>sum("a", "b")).toThrowError("a must be a number");
    });
    it('throw error if a or b are NaN', () => {
        expect(()=>sum(1, "b")).toThrowError("b must be a number");
    });
    it('throw error if b is null', () => {
        expect(()=>sum(1, null)).toThrowError("b must be a number");
    });
    it('throw error if b is undefined', () => {
        expect(()=>sum(1, undefined)).toThrowError("b must be a number");
    });
});