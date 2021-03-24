/**
 * @description 归并算法，采用分治策略将数组对半拆分为两个子数组，反复拆分直到子数组长度为一
 * - 再将拆分的数组左右逐个排序放入新数组
 * @see 分治排序(2).png 时间复杂度O(n log n)
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
export function mergeSort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }
    // 对半分组直到分成每个元素只有一个
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let leftIndex = 0;
    let rightIndex = 0;
    let index = 0;
    const result = Array<number>(left.length + right.length);
    while (index < result.length) {
        if (leftIndex >= left.length) {
            result[index] = right[rightIndex++];
        }
        else if (rightIndex >= right.length) {
            result[index] = left[leftIndex++];
        }
        else if (left[leftIndex] < right[rightIndex]) {
            result[index] = left[leftIndex++];
        }
        else {
            result[index] = right[rightIndex++];
        }
        index++;
    }
    return result;
}