/**
 * @description 冒泡排序，重复比相邻的元素
 * @see 冒泡排序.gif O(n^2)，很低效的排序算法
 * @param {number[]} arr
 */
export default function bubble(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j  = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}