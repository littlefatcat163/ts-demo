/*
 * @Autor: maxuebin
 * @Date: 2021-03-17 07:58:21
 * @LastEditors: maxuebin
 * @LastEditTime: 2021-03-17 21:01:04
 * @FilePath: \ts-demo\src\single-list\index.test.ts
 */
import { SingleList } from './index';

describe('单向链表测试增删改查', () => {
    const singleList: SingleList = new SingleList({ id: 0, name: '三国猛将排行' });
    test('单向链表初始化三国猛将排行篇', () => {
        expect(singleList.size()).toEqual(0);
        expect(singleList.head.name).toEqual('三国猛将排行');
    });
    test('乱序添加三国前六猛将', () => {
        singleList.add({ id: 6, name: '张飞' });
        singleList.add({ id: 3, name: '典韦' });
        singleList.add({ id: 4, name: '关羽' });
        singleList.add({ id: 1, name: '吕布' });
        singleList.add({ id: 5, name: '马超' });
        singleList.add({ id: 2, name: '赵云' });
        expect(singleList.size()).toBe(6);
    });
    test('按照序号查看对应的下标位置的猛将排行', () => {
        expect(singleList.find(1)?.name).toBe('吕布');
        expect(singleList.find(3)?.name).toBe('典韦');
        expect(singleList.find(6)?.name).toBe('张飞');
    });
    test('第一个无法删除，即头不能撼动的', () => {
        expect(singleList.remove(0)).toBeFalsy();
        expect(singleList.size()).toBe(6);
    });
    test('查找第0个元素，查不到头', () => {
        expect(singleList.find(0)).toBeUndefined();
        expect(singleList.findReverse(0)).toBeUndefined();
    });
    test('查不到超出范围的', () => {
        expect(singleList.find(7)?.name).toBeUndefined();
        expect(singleList.findReverse(7)?.name).toBeUndefined();
    });
    test('删除前六个猛将', () => {
        expect(singleList.remove(3)).toBeTruthy();
        expect(singleList.remove(6)).toBeFalsy();
        expect(singleList.remove(5)).toBeTruthy();
        expect(singleList.remove(4)).toBeTruthy();
        expect(singleList.remove(2)).toBeTruthy();
        expect(singleList.remove(2)).toBeTruthy();
        expect(singleList.size()).toBe(1);
        expect(singleList.remove(1)).toBeTruthy();
        expect(singleList.remove(1)).toBeFalsy();
        expect(singleList.size()).toBe(0);
    });
});

describe('单向链表反转', () => {
    const singleList: SingleList = new SingleList({ id: 0, name: '水浒传天罡前十' });
    singleList.add({ id: 6, name: '林冲' });
    singleList.add({ id: 8, name: '呼延灼' });
    singleList.add({ id: 10, name: '柴进' });
    singleList.add({ id: 4, name: '公孙胜' });
    singleList.add({ id: 5, name: '关胜' });
    singleList.add({ id: 1, name: '宋江' });
    singleList.add({ id: 7, name: '秦明' });
    singleList.add({ id: 2, name: '卢俊义' });
    singleList.add({ id: 3, name: '吴用' });
    singleList.add({ id: 9, name: '花荣' });
    test('人物数量10', () => {
        expect(singleList.size()).toBe(10);
    });
    test('反转之前的顺序1-10', () => {
        expect(singleList.find(1)?.name).toBe('宋江');
        expect(singleList.find(2)?.name).toBe('卢俊义');
        expect(singleList.find(3)?.name).toBe('吴用');
        expect(singleList.find(4)?.name).toBe('公孙胜');
        expect(singleList.find(5)?.name).toBe('关胜');
        expect(singleList.find(6)?.name).toBe('林冲');
        expect(singleList.find(7)?.name).toBe('秦明');
        expect(singleList.find(8)?.name).toBe('呼延灼');
        expect(singleList.find(9)?.name).toBe('花荣');
        expect(singleList.find(10)?.name).toBe('柴进');
        expect(singleList.findReverse(10)?.name).toBe('宋江');
        expect(singleList.findReverse(9)?.name).toBe('卢俊义');
        expect(singleList.findReverse(8)?.name).toBe('吴用');
        expect(singleList.findReverse(7)?.name).toBe('公孙胜');
        expect(singleList.findReverse(6)?.name).toBe('关胜');
        expect(singleList.findReverse(5)?.name).toBe('林冲');
        expect(singleList.findReverse(4)?.name).toBe('秦明');
        expect(singleList.findReverse(3)?.name).toBe('呼延灼');
        expect(singleList.findReverse(2)?.name).toBe('花荣');
        expect(singleList.findReverse(1)?.name).toBe('柴进');
    });
    test('反转之后的顺序1-10', () => {
        singleList.reverse();
        expect(singleList.findReverse(1)?.name).toBe('宋江');
        expect(singleList.findReverse(2)?.name).toBe('卢俊义');
        expect(singleList.findReverse(3)?.name).toBe('吴用');
        expect(singleList.findReverse(4)?.name).toBe('公孙胜');
        expect(singleList.findReverse(5)?.name).toBe('关胜');
        expect(singleList.findReverse(6)?.name).toBe('林冲');
        expect(singleList.findReverse(7)?.name).toBe('秦明');
        expect(singleList.findReverse(8)?.name).toBe('呼延灼');
        expect(singleList.findReverse(9)?.name).toBe('花荣');
        expect(singleList.findReverse(10)?.name).toBe('柴进');
        expect(singleList.find(1)?.name).toBe('柴进');
        expect(singleList.find(2)?.name).toBe('花荣');
        expect(singleList.find(3)?.name).toBe('呼延灼');
        expect(singleList.find(4)?.name).toBe('秦明');
        expect(singleList.find(5)?.name).toBe('林冲');
        expect(singleList.find(6)?.name).toBe('关胜');
        expect(singleList.find(7)?.name).toBe('公孙胜');
        expect(singleList.find(8)?.name).toBe('吴用');
        expect(singleList.find(9)?.name).toBe('卢俊义');
        expect(singleList.find(10)?.name).toBe('宋江');
    });
    test('再次反转的顺序1-10', () => {
        singleList.reverse();
        expect(singleList.find(1)?.name).toBe('宋江');
        expect(singleList.find(2)?.name).toBe('卢俊义');
        expect(singleList.find(3)?.name).toBe('吴用');
        expect(singleList.find(4)?.name).toBe('公孙胜');
        expect(singleList.find(5)?.name).toBe('关胜');
        expect(singleList.find(6)?.name).toBe('林冲');
        expect(singleList.find(7)?.name).toBe('秦明');
        expect(singleList.find(8)?.name).toBe('呼延灼');
        expect(singleList.find(9)?.name).toBe('花荣');
        expect(singleList.find(10)?.name).toBe('柴进');
        expect(singleList.findReverse(10)?.name).toBe('宋江');
        expect(singleList.findReverse(9)?.name).toBe('卢俊义');
        expect(singleList.findReverse(8)?.name).toBe('吴用');
        expect(singleList.findReverse(7)?.name).toBe('公孙胜');
        expect(singleList.findReverse(6)?.name).toBe('关胜');
        expect(singleList.findReverse(5)?.name).toBe('林冲');
        expect(singleList.findReverse(4)?.name).toBe('秦明');
        expect(singleList.findReverse(3)?.name).toBe('呼延灼');
        expect(singleList.findReverse(2)?.name).toBe('花荣');
        expect(singleList.findReverse(1)?.name).toBe('柴进');
    });
    
});

describe('中间节点', () => {
    const singleList: SingleList = new SingleList({ id: 0, name: '西游记力量排行' });
    singleList.add({ id: 1, name: '二郎神' });
    expect(singleList.findMiddle().name).toBe('二郎神');
    singleList.add({ id: 2, name: '牛魔王' });
    expect(singleList.findMiddle().name).toBe('牛魔王');
    singleList.add({ id: 3, name: '狮驼王' });
    expect(singleList.findMiddle().name).toBe('牛魔王');
    singleList.add({ id: 4, name: '大鹏王' });
    expect(singleList.findMiddle().name).toBe('狮驼王');
    singleList.add({ id: 5, name: '白象王' });
    expect(singleList.findMiddle().name).toBe('狮驼王');
    singleList.add({ id: 6, name: '孙悟空' });
    expect(singleList.findMiddle().name).toBe('大鹏王');
    singleList.add({ id: 7, name: '黑熊精' });
    expect(singleList.findMiddle().name).toBe('大鹏王');
});

describe('删除指定节点', () => {
    const singleList: SingleList = new SingleList({ id: 0, name: '红楼梦金陵十二钗' });
    singleList.add({ id: 1, name: '林黛玉' });
    singleList.add({ id: 2, name: '薛宝钗' });
    singleList.add({ id: 3, name: '贾元春' });
    singleList.add({ id: 4, name: '贾探春' });
    singleList.add({ id: 5, name: '史湘云' });
    singleList.add({ id: 6, name: '妙玉' });
    singleList.add({ id: 7, name: '贾迎春' });
    singleList.add({ id: 8, name: '贾惜春' });
    singleList.add({ id: 9, name: '王熙凤' });
    singleList.add({ id: 10, name: '贾巧姐' });
    singleList.add({ id: 11, name: '李纨' });
    singleList.add({ id: 12, name: '秦可卿' });
    test('十二金钗', () => {
        expect(singleList.size()).toBe(12);
    });
    test('无法移除最后一个', () => {
        expect(singleList.removeNode(singleList.find(12))).toBeFalsy();
        expect(singleList.size()).toBe(12);
    });
    test('移除第三个, 贾元春', () => {
        expect(singleList.removeNode(singleList.find(3))).toBeTruthy();
        expect(singleList.size()).toBe(11);
        expect(singleList.find(2)?.next?.name).toBe('贾探春');
        expect(singleList.find(3)?.name).toBe('贾探春');
    });
    test('移除第7个, 贾惜春', () => {
        expect(singleList.removeNode(singleList.find(7))).toBeTruthy();
        expect(singleList.size()).toBe(10);
        expect(singleList.find(6)?.name).toBe('贾迎春');
        expect(singleList.find(6)?.next?.name).toBe('王熙凤');
        expect(singleList.find(7)?.name).toBe('王熙凤');
    });
});