/**
 * @description 计数排序，将数据值转换为key存储在额外开辟的数组中，统计对应数据的个数
 * @see 计数排序.gif O(n + k)，高效的排序算法
 * @param {number[]} arr
 */
export default function counting(arr: number[]) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const bucker = Array(max - min);
    for (const num of arr) {
        const j = num - min;
        if (!bucker[j]) {
            bucker[j] = 1;
        } else {
            bucker[j]++;
        }
    }

    let index = 0;
    let i = 0;
    while (index < arr.length) {
        if (!!bucker[i]) {
            arr[index] = i + min;
            bucker[i]--;
            index ++;
        } else {
            i++;
        }
    }
}