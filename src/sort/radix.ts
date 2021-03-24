/**
 * @description 属于分配式排序，创建一个10长度的二维数组，分别对应0-1基数的数组
 * - 从待排序数组中个数到最大位数逐个放进对应的基数数组中
 * - 最后通过基数顺序取出，期间没做任何比较，只是对应放入顺序基数中
 * @see 基数排序.gif O (nk)
 * @param {Array<number>} arr
 */
export default function radix(arr: number[]) {
    const max = Math.max(...arr);
    const maxDigit = `${max}`.length;
    const bucketList: number[][] = [[],[],[],[],[],[],[],[],[],[]];
    for (let i = 0, dig = 1; i < maxDigit; i++, dig *= 10) {
        // 往桶里面装入数据
        for (const item of arr) {
            const num = Math.floor(item / dig) % 10;
            bucketList[num].push(item);
        }
        // 清理桶
        let index = 0;
        for (let j = 0; j < bucketList.length; j++) {
            for (const item of bucketList[j]) {
                arr[index++] = item;
            }
            bucketList[j] = [];
        }
    }
}