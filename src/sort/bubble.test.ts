import bubble from './bubble';

describe('冒泡排序', () => {
    test('[9,3,-1,-9,0,2] => [-9,-1,0,2,3,9]', () => {
        const arr = [9,3,-1,-9,0,2];
        bubble(arr);
        expect(arr).toEqual([-9,-1,0,2,3,9]);
    });
    test('[9,3,-1,-9,0,20] => [-9,-1,0,3,9,20]', () => {
        const arr = [9,3,-1,-9,0,20];
        bubble(arr);
        expect(arr).toEqual([-9,-1,0,3,9,20]);
    });
    test('随机90000个数据冒泡排序', () => {
        const arr = Array(90000);
        for (let i = 0; i < 90000; i++) {
            arr[i] = Math.random() * 90000;
        }
        bubble(arr);
    });
});