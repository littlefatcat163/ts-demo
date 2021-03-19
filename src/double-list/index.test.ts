import DoubleList from './index';

describe('添加节点', () => {
    const list = new DoubleList();
    test('初始化没有节点长度为0', () => {
        expect(list.length).toBe(0);
        expect(list.size()).toBe(0);
    });
    const num = Math.ceil(Math.random() * 100);
    test(`随机添加个${num}节点，长度和有效节点数量都为${num}`, () => {
        for (let i = 1; i <= num; i++) {
            list.add(i);
            expect(list.length).toBe(i);
            expect(list.size()).toBe(i);
        }
    });
});

describe('查找节点', () => {
    const list = new DoubleList();
    for (let i = 0; i <= 8; i++) {
        list.add(i);
    }
    test('长度为9', () => {
        expect(list.length).toBe(9);
        expect(list.size()).toBe(9);
    });
    test('头部之前和尾部之后没有元素', () => {
        expect(list.find(-1)).toBeUndefined();
        expect(list.find(9)).toBeUndefined();
    });
    test('查找n个元素', () => {
        for (let i = 0; i <= 8; i++) {
            expect(list.find(i)?.id).toBe(i);
        }
    });
});

describe('插入节点', () => {
    const list = new DoubleList();
    test('链表初始化没有节点，任意位置插入，都是添加到尾部', () => {
        expect(list.insert(66, 0)).toBeTruthy();
        expect(list.length).toBe(1);
        expect(list.size()).toBe(1);
        expect(list.find(0)?.id).toBe(0);
    });
    test('从头部插入, 尾部还是0', () => {
        let length = list.length;
        for (let i = -10; i < 0; i++) {
            expect(list.insert(0, i)).toBeTruthy();
            length ++;
            expect(list.length).toBe(length);
            expect(list.size()).toBe(length);
            expect(list.find(0)?.id).toBe(i);
        }
        expect(list.find(length - 1)?.id).toBe(0);
    });
    test('从尾部插入, 尾部还是0', () => {
        let length = list.length;
        for (let i = 1; i <= 10; i++) {
            expect(list.insert(length - 1, i)).toBeTruthy();
            length ++;
            expect(list.length).toBe(length);
            expect(list.size()).toBe(length);
            expect(list.find(length - 2)?.id).toBe(i);
        }
        expect(list.find(length - 1)?.id).toBe(0);
    });
    test('随机位置插入', () => {
        let length = list.length;
        for (let i = 1; i <= 999; i++) {
            const num = Math.ceil(Math.random() * 100);
            const pos = Math.floor(Math.random() * 1000);
            if (pos >= length) {
                expect(list.insert(pos, num)).toBeFalsy();
            } else {
                expect(list.insert(pos, num)).toBeTruthy();
                length ++;
                expect(list.find(pos)?.id).toBe(num);
            }
            expect(list.length).toBe(length);
            expect(list.size()).toBe(length);
        }
    });
});

describe('删除节点', () => {
    const list = new DoubleList();
    test('添加10个节点', () => {
        for (let i = 0; i < 10; i++) {
            list.add(i);
        }
        expect(list.length).toBe(10);
        expect(list.size()).toBe(10);
    });
    test('从头部开始删除节点', () => {
        for (let i = 0; i < 10; i++) {
            expect(list.remove(0)).toBeTruthy();
            if (i === 9) {
                expect(list.find(0)?.id).toBeUndefined();
            } else {
                expect(list.find(0)?.id).toBe(i + 1);
            }
            expect(list.length).toBe(10 - i - 1);
            expect(list.size()).toBe(10 - i - 1);
        }
        expect(list.length).toBe(0);
        expect(list.size()).toBe(0);
    });
    test('重新添加20个节点', () => {
        for (let i = 0; i < 20; i++) {
            list.add(i);
        }
        expect(list.length).toBe(20);
        expect(list.size()).toBe(20);
    });
    test('从尾部开始删除节点', () => {
        let i = list.length - 1;
        while (i >= 0) {
            expect(list.remove(i)).toBeTruthy();
            i--;
            if (i < 0) {
                expect(list.find(i)?.id).toBeUndefined();
            } else {
                expect(list.find(i)?.id).toBe(i);
                expect(list.length).toBe(i + 1);
                expect(list.size()).toBe(i + 1);
            }
        }
        expect(list.length).toBe(0);
        expect(list.size()).toBe(0);
    });
    test('添加10个节点', () => {
        for (let i = 0; i < 10; i++) {
            list.add(i);
        }
        expect(list.length).toBe(10);
        expect(list.size()).toBe(10);
    });
    test('删除任意一个节点直到删除完毕', () => {
        expect(list.remove(6)).toBeTruthy();//9
        expect(list.remove(8)).toBeTruthy();//8
        expect(list.remove(3)).toBeTruthy();//7
        expect(list.remove(5)).toBeTruthy();//6
        expect(list.remove(6)).toBeFalsy();//6
        expect(list.remove(2)).toBeTruthy();//5
        expect(list.remove(4)).toBeTruthy();//4
        expect(list.remove(1)).toBeTruthy();//3
        expect(list.remove(1)).toBeTruthy();//2
        expect(list.remove(0)).toBeTruthy();//1
        expect(list.remove(0)).toBeTruthy();//0
        expect(list.length).toBe(0);
        expect(list.size()).toBe(0);
    });
    test('随机插入8000个节点', () => {
        for (let i = 0; i < 8000; i++) {
            const num = Math.floor(Math.random() * 8000);
            const position = Math.floor(Math.random() * i);
            expect(list.insert(position, num)).toBeTruthy();
        }
        expect(list.length).toBe(8000);
        expect(list.size()).toBe(8000);
    });
    test('随机删除一个节点直到删除完毕', () => {
        for (let i = 0; i < 8000; i++) {
            const position = Math.floor(Math.random() * (8000 - i));
            expect(list.remove(position)).toBeTruthy();
        }
        expect(list.length).toBe(0);
        expect(list.size()).toBe(0);
    });
});

describe('随机添加、删除节点', () => {
    const list = new DoubleList();
    test('初始化节点数量为0', () => {
        expect(list.length).toBe(0);
        expect(list.size()).toBe(0);
    });
    let length = 0;
    test('开始随机添加、删除节点', () => {
        for (let i = 0; i < 9999; i++) {
            const num = Math.floor(Math.random() * 9999);
            const position = Math.floor(Math.random() * length);
            if (Math.floor(Math.random() * 2) === 0) {
                expect(list.insert(position, num)).toBeTruthy();
                length++;
            } else {
                if (length > 0) {
                    expect(list.remove(position)).toBeTruthy();
                    length--;
                }
            }
        }
    });
    test(`操作完毕`, () => {
        expect(list.length).toBe(length);
        expect(list.size()).toBe(length);
    });
});

describe('去除重复节点', () => {
    const list = new DoubleList();
    test('添加两个1节点', () => {
        expect(list.add(1));
        expect(list.add(1));
        expect(list.length).toBe(2);
        expect(list.size()).toBe(2);
    });
    test('去重剩下一个1', () => {
        list.delRepeat();
        expect(list.length).toBe(1);
        expect(list.size()).toBe(1);
    });
    test('删除最后1', () => {
        expect(list.remove(list.length - 1)).toBeTruthy();
        expect(list.length).toBe(0);
        expect(list.size()).toBe(0);
    });
    let length = 0;
    const map = new Map<number, number>();
    test('随机插入10000个0-10的数据', () => {
        for (let i = 0; i < 9999; i++) {
            const num = Math.floor(Math.random() * 10);
            let numLength = 0;
            if (!map.has(num)) {
                map.set(num, 0);
            } else {
                numLength = map.get(num) || 0;
            }
            const position = Math.floor(Math.random() * length);
            expect(list.insert(position, num)).toBeTruthy();
            length++;
            map.set(num, numLength + 1);
        }
    });
    test('去重', () => {
        expect(list.length).toBe(length);
        list.delRepeat();
        expect(list.length).toBe(map.size);
        expect(list.size()).toBe(map.size);
    });
});