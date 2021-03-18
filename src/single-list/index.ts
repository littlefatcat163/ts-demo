/*
 * @Autor: maxuebin
 * @Date: 2021-03-17 07:31:46
 * @LastEditors: maxuebin
 * @LastEditTime: 2021-03-18 08:31:46
 * @FilePath: \ts-demo\src\single-list\index.ts
 */
/**
 * @description 单向链表，永远存在next属性指向下一个节点
 * - 只能从头往后遍历节点
 */
export interface NodeItem {
    next?: NodeItem;
    name: string;
    id: number;
}
export class SingleList {
    // 头部不能动的
    public head!: NodeItem;

    constructor(hNodeItem: NodeItem) {
        this.add(hNodeItem);
    }

    public size(): number {
        // 不包括头部节点
        let lenght = 0;
        let curNode = this.head;
        while (!!curNode.next) {
            lenght ++;
            curNode = curNode.next;
        }
        return lenght;
    }

    public add(newNode: NodeItem): boolean {
        if (!this.head) {
            this.head = newNode;
            return true;
        }
        let tempNode: NodeItem = this.head;
        while(!!tempNode.next) {
            if (tempNode.id === newNode.id) {
                return false;
            }
            if (tempNode.next.id > newNode.id) {
                newNode.next = tempNode.next;
                tempNode.next = newNode;
                return true;
            }
            tempNode = tempNode.next;
        }
        tempNode.next = newNode;
        return true;
    }

    public remove(index: number): boolean {
        if (index < 1 ) {
            return false;
        }
        let curNode = this.head;
        let i = 1;
        while (!!curNode.next) {
            if (i === index) {
                curNode.next = curNode.next.next;
                return true;
            }
            curNode = curNode.next;
            i++;
        }
        return false;
    }

    /**
     * @description 删除指定节点
     * - 1. 通过一个临时变量来查找上一个节点，找出后指向删除节点的下一个节点
     * - 2. 删除的节点与下一个节点数据进行交换（速度快，但是无法删除最后一个节点）
     * @param {NodeItem} node 待删除的节点
     * @returns {boolean}
     */
    public removeNode(node?: NodeItem): boolean {
        if (!node || !node.next) {
            // 尾节点，不知道前面的节点是什么，无法删除
            return false;
        } else {
            // 该节点与下一节点交换，然后将该节点的指针指向下一个节点的后续节点
            node.id = node.next.id;
            node.name = node.next.name;
            node.next = node.next.next;
            return true;
        }
    }
    
    /**
     * @description 正序查找很简单，节点开始往后遍历到index对应的下标
     * @param {number} index 下标
     * @returns {NodeItem|undefined} 找得到返回节点，找不到undefined
     */
    public find(index: number): NodeItem | undefined {
        if (index < 1) {
            return undefined;
        }
        let curNode = this.head;
        let i = 1;
        while (!!curNode.next) {
            if (i === index) {
                return curNode.next;
            }
            curNode = curNode.next;
            i++;
        }
        return undefined;
    }

    /**
     * @description 寻找中间节点
     */
    public findMiddle(): NodeItem {
        // 快指针走两步
        let quick = this.head.next as NodeItem;
        // 慢指针走一步
        let slow = this.head.next as NodeItem;
        while(!!quick && !!quick.next) {
            quick = quick.next.next as NodeItem;
            slow = slow.next as NodeItem;
        }
        return slow;
    }

    /**
     * @description 倒序查找
     * @param {number} index 下标
     * @returns {NodeItem|undefined} 找得到返回节点，找不到undefined
     */
    public findReverse(index: number): NodeItem | undefined {
        if (index < 1) {
            return undefined;
        }
        // 通过两个指针遍历查找
        let firstNode = this.head;
        let secondNode = this.head;
        // firstNode从 1 ~ index-1遍历链表
        // 然后同时移动first、second指针，循环直到尾部null，second就是倒数index的元素
        for (let i = 1; i <= index - 1; i++) {
            if (!firstNode) {
                return undefined;
            }
            firstNode = firstNode.next as NodeItem;
        }
        if (!firstNode.next) {
            return undefined;
        }
        while (!!firstNode.next) {
            firstNode = firstNode.next;
            secondNode = secondNode.next as NodeItem;
        }
        return secondNode;
    }

    public reverse() {
        let curNode = this.head.next;
        let preNode: NodeItem | undefined; // 排在前面元素最终是要到最后的，所以前一个节点是null
        while (!!curNode) {
            const nextNode = curNode.next;
            curNode.next = preNode;
            preNode = curNode;
            curNode = nextNode;
        }
        this.head.next = preNode;
    }

    /**
     * @description 反向输出链表
     * - 1.使用栈遵循后进先出的原则输出
     * - 2.通过递归的方式执行
     */
    public reverseOutput() {
        const msgs: string[] = [];
        let curNode: NodeItem = this.head.next as NodeItem;
        while (!!curNode) {
            msgs.push(`id-${curNode.id}, name-${curNode.name}`);
            curNode = curNode.next as NodeItem;
        }
        let msg = msgs.pop();
        while (!!msg) {
            console.log(msg);
            msg = msgs.pop();
        }
    }

    public output() {
        let curNode: NodeItem = this.head;
        const msgs: string[] = [];
        while (!!curNode.next) {
            msgs.push(`id-${curNode.id}, name-${curNode.name}`);
            curNode = curNode.next;
        }
        console.log(msgs);
    }
}