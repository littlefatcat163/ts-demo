/**
 * @description 插入排序，分成两个数组，左边为已排序，右边为未排序
 * - 如果右边的值小于左边最后一个元素，将右边的值作为插入元素
 * - 从右往左遍历左边已排序的数组，逐个往后移，直到找出比插入元素小的位置，将元素插入
 * @see 插入排序.gif 时间复杂度O(n^2)，低效的排序算法
 * @param {number[]} arr
 */
export default function insert(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            const waitSorted = arr[i];
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] > waitSorted) {
                    arr[j + 1] = arr[j]
                }
                if (j === 0 || arr[j - 1] < waitSorted) {
                    arr[j] = waitSorted;
                    break;
                }
            }
        }
    }
}