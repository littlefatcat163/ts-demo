import Josephu from './josephu';

describe('约瑟夫：一个小孩', () => {
    const josephu = new Josephu(1);
    test('怎么查都是1', () => {
        expect(josephu.find(1)?.no).toBe(1);
        expect(josephu.find(10)?.no).toBe(1);
        expect(josephu.find(100)?.no).toBe(1);
    });
    test('一个小孩出列后，链表为空', () => {
        expect(josephu.outCircle(9, 1)).toBeTruthy();
        expect(josephu.find(1)).toBeUndefined();
        expect(josephu.outCircle(1, 1)).toBeFalsy();
    });
});

describe('约瑟夫：两个小孩', () => {
    const josephu = new Josephu(2);
    test('奇数是1，偶数是2', () => {
        expect(josephu.find(1)?.no).toBe(1);
        expect(josephu.find(11)?.no).toBe(1);
        expect(josephu.find(111)?.no).toBe(1);
        expect(josephu.find(2)?.no).toBe(2);
        expect(josephu.find(22)?.no).toBe(2);
        expect(josephu.find(222)?.no).toBe(2);
    });
    test('从第一个开始出列', () => {
        expect(josephu.outCircle(0, 1)).toBeTruthy();
        expect(josephu.find(1)?.no).toBe(2);
        expect(josephu.find(2)?.no).toBe(2);
        expect(josephu.outCircle(3, 1)).toBeTruthy();
        expect(josephu.find(1)).toBeUndefined();
    });
});

describe('约瑟夫：三个小孩', () => {
    const num = 3;
    const josephu = new Josephu(num);
    test('11个查找', () => {
        for (let i = 1; i < 11; i++) {
            const mod = i % num;
            if (mod === 0) {
                expect(josephu.find(i)?.no).toBe(num);
            } else {
                expect(josephu.find(i)?.no).toBe(mod);
            }
        }
    });
    test('第一个开始，数2, 出列3, 剩下1和2', () => {
        expect(josephu.outCircle(2, 1)).toBeTruthy();
        expect(josephu.find(1)?.no).toBe(1);
        expect(josephu.find(2)?.no).toBe(2);
        expect(josephu.find(3)?.no).toBe(1);
        expect(josephu.find(4)?.no).toBe(2);
    });
    test('第二个开始，数2, 出列2, 剩下1', () => {
        expect(josephu.outCircle(2, 2)).toBeTruthy();
        expect(josephu.find(1)?.no).toBe(1);
        expect(josephu.find(2)?.no).toBe(1);
        expect(josephu.find(3)?.no).toBe(1);
    });
    test('无论从哪个开始，怎么出列都是1，链表为空', () => {
        expect(josephu.outCircle(Math.random() * 10 + 1, Math.random() * 10 + 1)).toBeTruthy();
        expect(josephu.find(1)?.no).toBeUndefined();
    });
});

describe('约瑟夫：五个小孩', () => {
    const num = 5;
    const josephu = new Josephu(num);
    test('111个查找', () => {
        for (let i = 1; i < 111; i++) {
            const mod = i % num;
            if (mod === 0) {
                expect(josephu.find(i)?.no).toBe(num);
            } else {
                expect(josephu.find(i)?.no).toBe(mod);
            }
        }
    });
    test('第三个开始，数3, 出列1, 剩下2、3、4、5', () => {
        expect(josephu.outCircle(3, 3)).toBeTruthy();
        expect(josephu.find(1)?.no).toBe(2);
        expect(josephu.find(2)?.no).toBe(3);
        expect(josephu.find(3)?.no).toBe(4);
        expect(josephu.find(4)?.no).toBe(5);
    });
    test('第四个开始，数6, 出列3, 剩下4、5、2', () => {
        expect(josephu.outCircle(6, 4)).toBeTruthy();
        expect(josephu.find(1)?.no).toBe(4);
        expect(josephu.find(2)?.no).toBe(5);
        expect(josephu.find(3)?.no).toBe(2);
    });
    test('第一个开始，数1, 出列5, 剩下2、4', () => {
        expect(josephu.outCircle(1, 1)).toBeTruthy();
        expect(josephu.find(1)?.no).toBe(2);
        expect(josephu.find(2)?.no).toBe(4);
    });
    test('第二个开始，数10, 出列2, 剩下4', () => {
        expect(josephu.outCircle(10, 2)).toBeTruthy();
        expect(josephu.find(1)?.no).toBe(2);
    });
    test('无论从哪个开始，怎么出列都是2，链表为空', () => {
        expect(josephu.outCircle(Math.random() * 10 + 1, Math.random() * 10 + 1)).toBeTruthy();
        expect(josephu.find(1)?.no).toBeUndefined();
    });
});