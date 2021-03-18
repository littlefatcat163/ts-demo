/**
 * @description 环形单向链表，最后一个节点next指向开始节点；
 * josephu（约瑟夫）问题：编号为 1、2、3...n的n个人坐成一圈，从1开始报数，数到m的人出列，
 * 下一位又从1开始报数，数到m的那个人出列，一次类推，知道所有人出列
 */

class Boy {
    public no!: number;
    public next!: Boy;

    constructor(no: number) {
        this.no = no;
    }
}

export default class Josephu {
    private first!: any;
    constructor(num: number) {
        if (num < 1) {
            return;
        }
        let temp!: Boy;
        for (let i = 1; i <= num; i++) {
            const newBoy = new Boy(i);
            if (i === 1) {
                this.first = newBoy;
                this.first.next = this.first;
                temp = this.first;
            } else {
                temp.next = newBoy;
                temp.next.next = this.first;
                temp = temp.next;
            }
        }
    }
    /**
     * @description 出列
     * @param count 数几个
     * @param startNo 从哪里开始
     * 
     */
    public outCircle(count: number = 2, startNo: number = 1): boolean {
        if (!this.first || startNo < 1) {
            return false;
        }
        let lastBoy: Boy = this.first;
        if (lastBoy === this.first.next) {
            this.first.next = undefined;
            this.first = undefined;
            return true;
        }
        if (startNo === 1) {
            while (lastBoy.next !== this.first) {
                lastBoy = lastBoy.next;
            }
        }
        for (let i = 1; i < startNo; i++) {
            this.first = this.first.next;
            if (i < startNo - 1) {
                lastBoy = lastBoy.next;
            }
        }
        for (let i = 1; i <= count; i++) {
            this.first = this.first.next;
            lastBoy = lastBoy.next;
        }
        this.first = this.first.next;
        lastBoy.next = this.first;
        return true;
    }

    public find(index: number): Boy | undefined {
        if (index < 1) {
            return;
        }
        let boy = this.first;
        if (!boy) {
            return boy;
        }
        if (boy.next === this.first) {
            return boy;
        }
        for (let i = 1; i < index; i++) {
            boy = boy.next;
        }
        return boy;
    }
}