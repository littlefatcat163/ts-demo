import EmpLinkedList from './EmpLinkedList';

export default class HashTable {
    private size: number = 0;
    private empLinkedList!: EmpLinkedList[];

    constructor(size: number) {
        this.size = size;
        this.empLinkedList = Array<EmpLinkedList>(size);
        for (let i = 0; i < size; i++) {
            this.empLinkedList[i] = new EmpLinkedList();
        }
    }

    public getLinkedListIndex(id: number) {
        return (id - 1) % this.size;
    }

    public add(id: number, name: string) {
        const index = this.getLinkedListIndex(id);
        this.empLinkedList[index].add({id, name, next: null});
    }

    public findById(id: number) {
        const index = this.getLinkedListIndex(id);
        return this.empLinkedList[index].findById(id);
    }
}