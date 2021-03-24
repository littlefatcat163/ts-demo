/**
 * @description 选择排序
 * - 首先在数组中找到最小元素，存放到数组开始位置
 * - 再从剩余的元素中继续寻找最小元素，放到已排序序列末尾，直到所有元素排序完毕
 * @see 选择排序.gif O(n^2)，低效的排序算法
 * @param {number[]} arr
 */
export default function choose(arr: number[]) {
    let sortIndex = 0;
    let minIndex = 0;
    while (sortIndex < arr.length) {
        for (let i = sortIndex + 1; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        if (minIndex !== sortIndex) {
            const temp = arr[minIndex];
            arr[minIndex] = arr[sortIndex];
            arr[sortIndex] = temp;
        }
        minIndex = ++sortIndex;
    }
}