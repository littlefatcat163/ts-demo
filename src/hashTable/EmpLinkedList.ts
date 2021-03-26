interface Emp {
    id: number;
    name: string;
    next: Emp | null;
}

export default class EmpLinkedList {
    private head: Emp | null = null;
    public length: number = 0;

    public add(newEmp: Emp) {
        if (this.head === null) {
            this.head = newEmp;
            this.length ++;
            return;
        }
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = newEmp;
        this.length ++;
    }

    public findById(id: number) {
        let temp = this.head;
        while (temp !== null) {
            if (id === temp.id) {
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }
}