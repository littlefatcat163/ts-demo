import HashTable from './HashTable';

describe('哈希表', () => {
    const size = 5;
    const hashTable = new HashTable(size);
    test('添加 id: 1, name: Lan', () => {
        hashTable.add(1, 'Lan');
        expect(hashTable.getLinkedListIndex(1)).toBe(0);
        expect(hashTable.findById(1)?.name).toBe('Lan');
    });
    test('添加 id: 2, name: Dalin', () => {
        hashTable.add(2, 'Dalin');
        expect(hashTable.getLinkedListIndex(2)).toBe(1);
        expect(hashTable.findById(2)?.name).toBe('Dalin');
    });
    test('从3开始，添加27个员工', () => {
        for (let i = 3; i <= 30; i++) {
            const name = `emp-${i}`;
            hashTable.add(i, name);
            expect(hashTable.getLinkedListIndex(i)).toBe((i - 1) % size);
            expect(hashTable.findById(i)?.name).toBe(name);
        }
    });
    test('查找所有员工', () => {
        for (let i = 1; i < 32; i++) {
            if (i > 30) {
                expect(hashTable.findById(i)).toBeNull();
            }
            else {
                expect(hashTable.getLinkedListIndex(i)).toBe((i - 1) % size);
                expect(hashTable.findById(i)?.id).toBe(i);
            }
        }
    });
});