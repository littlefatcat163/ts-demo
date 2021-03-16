/*
 * @Autor: maxuebin
 * @Date: 2021-03-16 18:08:06
 * @LastEditors: maxuebin
 * @LastEditTime: 2021-03-16 21:16:21
 * @FilePath: \ts-demo\src\circle-queue\index.test.ts
 */
import CircleQueue from './index';
test('初始化环形队列', () => {
    const queue = new CircleQueue(3);
    expect(queue.length()).toBe(3);
});

describe('长度为3的队列', () => {
    const max: number = 3;
    const queue = new CircleQueue(max);
    test(`队列中的元素个数为${max}`, () => {
        expect(queue.length()).toEqual(max);
    });
    test('1.没有出入队列操作，有效元素个数为0', () => {
        expect(queue.size()).toEqual(0);
    });
    test('2.入队列2次，队列始终会有一个空元素', () => {
        queue.push();
        queue.push();
        expect(queue.size()).toEqual(max - 1);
    });
    test('3.出队列2次，队列为空了', () => {
        queue.shift();
        queue.shift();
        expect(queue.size()).toEqual(0);
    });
    test('4.入队1、2、3，再出队', () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.size()).toEqual(max - 1);
        expect(queue.shift()).toEqual(1);
        expect(queue.size()).toEqual(max - 2);
        expect(queue.shift()).toEqual(2);
        expect(queue.size()).toEqual(0);
        expect(queue.shift()).toBeUndefined();
        queue.push(3);
        expect(queue.size()).toEqual(1);
        expect(queue.shift()).toEqual(3);
        expect(queue.size()).toEqual(0);
    });
});

describe('长度为10的队列，实际有效元素为9个', () => {
    const max: number = 10;
    const queue = new CircleQueue(max);
    test(`队列中的元素个数为${max}`, () => {
        expect(queue.length()).toEqual(max);
    });
    test('入队列10个', () => {
        for (let i = 1; i <= max; i++) {
            queue.push(i);
        }
        expect(queue.size()).toEqual(max - 1);
    });
    test('出队列10个', () => {
        for (let i = 1; i <= max - 1; i++) {
            expect(queue.shift()).toEqual(i);
        }
        expect(queue.shift()).toBeUndefined();
        expect(queue.size()).toEqual(0);
        expect(queue.length()).toEqual(max);
    });
    test('入队5个', () => {
        for (let i = 1; i <= 5; i++) {
            queue.push(i);
        }
        expect(queue.size()).toEqual(5);
        expect(queue.length()).toEqual(max);
    });
    test('出队2个', () => {
        expect(queue.shift()).toEqual(1);
        expect(queue.shift()).toEqual(2);
        expect(queue.size()).toEqual(3);
        expect(queue.length()).toEqual(max);
    });
    test('入队3个，从10开始', () => {
        queue.push(10);
        queue.push(11);
        queue.push(12);
        expect(queue.size()).toEqual(6);
        expect(queue.length()).toEqual(max);
    });
    test('出队4个, 剩下2个', () => {
        expect(queue.shift()).toEqual(3);
        expect(queue.shift()).toEqual(4);
        expect(queue.shift()).toEqual(5);
        expect(queue.shift()).toEqual(10);
        expect(queue.size()).toEqual(2);
        expect(queue.length()).toEqual(max);
    });
});