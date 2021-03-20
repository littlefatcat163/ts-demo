interface Item {
    value: number | string;
    next?: Item;
}
/**
 * @description 链表实现栈，遵循后入先出的原则，头部永远指向新的节点
 */
export default class Stack {
    private head!: Item;
    public length: number = 0;

    /**
     * @description 入栈，head总是指向新节点，所以总是从头部插入
     * @param {number|string} value
     */
    public push(value: number | string) {
        if (!this.head) {
            this.head = { value };
        } else {
            this.head = { value, next: this.head };
        }
        this.length++;
    }

    public pop(): number | string {
        if (this.length === 0) {
            throw Error('栈空');
        }
        const item = this.head.value;
        this.head = this.head.next as Item;
        this.length --;
        return item;
    }

    public peek(): number | string {
        return this.head.value;
    }

    /**
     * @description 有效节点数
     * @returns {number}
     */
    public size(): number {
        let count = 0;
        let temp: any = this.head;
        while (!!temp) {
            count++;
            temp = temp.next;
        }
        return count;
    }

}