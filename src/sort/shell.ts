/**
 * @description 希尔排序，插入排序的一个高效版本，缩小增量排序
 * - 把数组对半拆分成分组，比如10个元素，将拆成2组5个元素的数组对
 * - 按照拆分的间隔进行比较，如上面的5，对比两个元素位置为 0:5, 1:6, 2:7, 3:8, 4:9
 * - 继续对半分解数组，间隔对比，直到间隔数为0
 * @see 希尔排序.gif O(n log2 n), 高效的排序算法
 * @param {number[]} arr
 */
export default function shell(arr: number[]) {
    let gen = Math.floor(arr.length / 2);
    while (gen > 0) {
        for (let i = gen; i < arr.length; i++) {
            const temp = arr[i];
            // 用位置替换
            let preIndex = i - gen;
            while (preIndex >= 0 && arr[preIndex] > temp) {
                arr[preIndex + gen] = arr[preIndex];
                preIndex -= gen;
            }
            arr[preIndex + gen] = temp;
            // 下面代码频繁交替位置，效率极低
            /* for (let j = i - gen; j >= 0; j -= gen) {
                if (arr[j] > temp) {
                    arr[j + gen] = arr[j];
                    arr[j] = temp;
                }
            } */
        }
        gen = Math.floor(gen / 2);
    }
}