export default class ArrBinaryTree {
    private arr!: number[];

    constructor(arr: number[]) {
        this.arr = arr;
    }

    public front(index: number = 0, res: number[] = []) {
        if (this.arr === undefined || this.arr.length === 0) {
            return;
        }
        res.push(this.arr[index]);
        if (index * 2 + 1 < this.arr.length) {
            this.front(index * 2 + 1, res);
        }
        if (index * 2 + 2 < this.arr.length) {
            this.front(index * 2 + 2, res);
        }
        return res;
    }

    public middle(index: number = 0, res: number[] = []) {
        if (this.arr === undefined || this.arr.length === 0) {
            return;
        }
        if (index * 2 + 1 < this.arr.length) {
            this.middle(index * 2 + 1, res);
        }
        
        res.push(this.arr[index]);
        
        if (index * 2 + 2 < this.arr.length) {
            this.middle(index * 2 + 2, res);
        }
        return res;
    }

    public back(index: number = 0, res: number[] = []) {
        if (this.arr === undefined || this.arr.length === 0) {
            return;
        }
        if (index * 2 + 1 < this.arr.length) {
            this.back(index * 2 + 1, res);
        }

        if (index * 2 + 2 < this.arr.length) {
            this.back(index * 2 + 2, res);
        }
        
        res.push(this.arr[index]);
        return res;
    }
}