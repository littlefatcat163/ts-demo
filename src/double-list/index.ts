interface Item {
    id: number;
    pre?: Item;
    next?: Item;
}

export default class DoubleList {
    // 头部节点
    private head!: Item | undefined;
    // 当前节点，因为添加都是从尾部加，所以可以认为是尾部节点
    private tail!: Item | undefined;
    public length: number = 0;

    /**
     * @description 添加节点，pre指向上一个节点，next指向下一个节点
     * @param {number} id
     */
    public add(id: number) {
        const newItem: Item = { id };
        if (!this.head) {
            this.head = newItem;
        } else {
            newItem.pre = this.tail;
            if (!!this.tail) {
                this.tail.next = newItem;
            }
        }
        this.tail = newItem;
        this.length ++;
    }

    /**
     * @description 任意位置之前插入
     * @param {number} position 位置
     * @param {number} id
     */
    public insert(position: number, id: number): boolean {
        if (!this.head) {
            this.add(id);
            return true;
        }
        let posItem = this.find(position);
        if (!posItem) {
            return false;
        }
        const newItem: Item = { id, next: posItem, pre: posItem.pre };
        if (!!posItem.pre) {
            posItem.pre.next = newItem;
        } else {
            this.head = newItem;
        }
        posItem.pre = newItem;
        while (!!posItem.next) {
            posItem = posItem?.next;
        }
        this.tail = posItem;
        this.length ++;
        return true;
    }

    public find(position: number): Item | undefined {
        if (!this.head || position < 0 || position >= this.length) {
            return;
        }
        // 查找的位置是从在中间节点的前面，从头部开始找
        if (position <= this.length / 2) {
            let temp: any = this.head;
            for (let i = 0; i < position; i++) {
                temp = temp.next;
            }
            return temp;
        }
        // 从尾部开始查找
        else {
            let temp: any = this.tail;
            for (let i = this.length - 1; i > position; i--) {
                temp = temp.pre;
            }
            return temp;
        }
    }

    public remove(position: number): boolean {
        const posItem = this.find(position);
        if (!posItem) {
            return false;
        }
        if (!!posItem.next) {
            posItem.next.pre = posItem.pre;
        }
        if (!!posItem.pre) {
            posItem.pre.next = posItem.next;
        } else {
            this.head = posItem.next;
        }
        let temp = posItem.pre;
        posItem.next = undefined;
        posItem.pre = undefined;
        while (!!temp && !!temp.next) {
            temp = temp.next;
        }
        if (!!temp) {
            this.tail = temp;
        }
        this.length --;
        return true;
    }

    public delRepeat() {
        if (this.length < 2) {
            return;
        }
        const set = new Set<number>();
        let temp = this.head;
        while (!!temp) {
            if (set.has(temp.id)) {
                if (!!temp.next) {
                    temp.next.pre = temp.pre;
                }
                else  {
                    this.tail = temp.pre;
                }

                if (temp.pre) {
                    temp.pre.next = temp.next;
                }
                this.length --;
            } else {
                set.add(temp.id);
            }
            temp = temp.next;
        }
    }

    /**
     * @description 前后节点之间的指向是正确的有效节点数量,
     * @returns {number}
     */
    public size(): number {
        let num = 0;
        if (!!this.head) {
            num++;
            let pre = this.head;
            let temp = this.head.next;
            while(!!temp && temp.pre === pre && pre.next === temp) {
                pre = pre.next;
                temp = temp.next;
                num ++;
            }
        }
        return num;
    }
}