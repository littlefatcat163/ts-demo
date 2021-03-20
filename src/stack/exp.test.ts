import expOperate from './expOperate';

describe('基本算术表达式运算', () => {
    test('1', () => {
        expect(expOperate('1')).toBe(1);
    });
    test('1+2=3', () => {
        expect(expOperate('1+2')).toBe(3);
    });
    test('1+2+3=6', () => {
        expect(expOperate('1+2+3')).toBe(6);
    });
    test('1+2+3-5-6=-5', () => {
        expect(expOperate('1+2+3-5-6')).toBe(-5);
    });
    test('1+2*3-5=2', () => {
        expect(expOperate('1+2*3-5')).toBe(2);
    });
    test('999+99*99+99/3+66*66=15189', () => {
        expect(expOperate('999+99*99+99/3+66*66')).toBe(15189);
    });
    test('999+99*99+99/3+66*66+101/101+11*11+5*5*5*6+33/3*6/2=16094', () => {
        expect(expOperate('999+99*99+99/3+66*66+101/101+11*11+5*5*5*6+33/3*6/2')).toBe(16094);
    });
    test('1-1-3=-3', () => {
        expect(expOperate('1-1-3')).toBe(-3);
    });
    test('999+99*99-99/3-66*66=6411', () => {
        expect(expOperate('999+99*99-99/3-66*66')).toBe(6411);
    });
    test('999+99*99/1-99/3*3*3/3-66*66/2*4*6/6-50-1000=939', () => {
        expect(expOperate('999+99*99/1-99/3*3*3/3-66*66/2*4*6/6-50-1000')).toBe(939);
    });
});