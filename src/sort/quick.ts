/**
 * @description 快速排序，高效算法，使用分治策略把数组按照期中一个元素为基准拆分数组
 * - 小于基准数的放在左边
 * - 大于基准数的放在右边
 * - 循环递归处理直到两边的数组个数为1
 * @see 快速排序.png O(n log n)
 * @param {Array<number>} arr 未排序的数组
 * @param {number} left 左边指针
 * @param {number} right 右边指针
 */
export default function quick(arr: number[], left: number = 0, right: number = arr.length - 1) {
    if (left < right) {
        const pivot = arr[left];
        let l = left;
        let r = right;
        while (l < r) {
            // 从右往左一直找，如果比基准值大，r右指针往前移一位，直到找出比基准值小的数
            while (l < r && arr[r] > pivot) {
                r--;
            }
            // 将左边空出的位置放上比基准值小的数
            if (l < r) {
                arr[l] = arr[r];
                l++;
            }

            // 从左往右一致找，如果比基准值小，l左指针往后移一位，直到找出比基准值大的数
            while (l < r && arr[l] < pivot) {
                l++;
            }
            // 将右边空出的位置放上比基准值大的数
            if (l < r) {
                arr[r] = arr[l];
                r--;
            }
        }
        // l 和 r 重叠，放上基准值
        arr[l] = pivot;
        // 继续处理左边的数组
        quick(arr, left, l - 1);
        // 处理右边的数组
        quick(arr, l + 1, right);
    }
}