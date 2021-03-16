/*
 * @Autor: maxuebin
 * @Date: 2021-03-16 17:35:20
 * @LastEditors: maxuebin
 * @LastEditTime: 2021-03-16 20:57:45
 * @FilePath: \ts-demo\src\circle-queue\index.ts
 */
export default class CircleQueue {
    private max: number = 0;
    private start: number = 0;
    private end: number = 0;
    private arr!: any[];

    constructor(max: number) {
        this.max = max;
        this.arr = Array(max);
    }

    private isEmpty(): boolean {
        return this.start === this.end;
    }

    private isFull(): boolean {
        return (this.end + 1) % this.max === this.start;
    }

    public push(num: number = Math.floor((Math.random() * 100) + 1)): void {
        if (this.isFull()) {
            return;
        }
        this.arr[this.end] = num;
        this.end = (this.end + 1) % this.max;
    }

    public shift(): number | void {
        if (this.isEmpty()) {
            return;
        }
        const num = this.arr[this.start];
        this.arr[this.start] = undefined;
        this.start = (this.start + 1) % this.max;
        return num;
    }

    public size() {
        return this.arr.filter((item: any) => !!item).length;
    }

    public length() {
        return this.arr.length;
    }
}