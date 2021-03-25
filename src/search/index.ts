export default class Search {
    /**
     * @description 线性查找，从头到尾遍历，找到值之后返回下标
     * @param {number[]} arr
     * @param {number} val
     * @returns {number}
     */
    public static linear(arr: number[], val: number): number {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                return i;
            }
        }
        return -1;
    }

    /**
     * @description 二分查找，要求数组是排序好的有序序列
     * @param {number[]} arr 源数组
     * @param {number} key 关键词
     * @param {number} low 开始
     * @param {number} hegh 结束
     * @returns {number} 找到返回对应的下标，找不到-1
     */
    public static binary(arr: number[], key: number, low: number = 0, hegh: number = arr.length - 1): number {
        if (low > hegh || key < arr[0]  || key > arr[arr.length - 1]) {
            return -1;
        }
        const mid = low + Math.floor((hegh - low) / 2);
        const midVal = arr[mid];
        if (key < midVal) {
            return this.binary(arr, key, low, mid - 1);
        } else if (key > midVal) {
            return this.binary(arr, key, mid + 1, hegh);
        }
        return mid;
    }

    /**
     * @description 插入查找
     * @param {number[]} arr
     * @param {number} key 
     * @returns {number}
     */
    public static insert(arr: number[], key: number): number {
        let low = 0;
        let hegh = arr.length - 1;
        if (key < arr[low] || key > arr[hegh]) {
            return -1;
        }
        do {
            // 找出数据大概在哪个指针附近
            // 1. (key - arr[low]) / (arr[hegh] - arr[low]) 找出数据在所有数据中所处于的百分比
            // 2. * (hegh - low) 匹配到对应的下标
            const mid = low + Math.floor((key - arr[low]) / (arr[hegh] - arr[low]) * (hegh - low));
            if (key < arr[mid]) {
                hegh = mid - 1;
            } else if (key > arr[mid]) {
                low = mid + 1;
            }
            return mid;
        } while (low < hegh);
    }
}