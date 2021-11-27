class BinaryTree<T>{
    value: any;
    left: null | BinaryTree<T>;
    right: null | BinaryTree<T>;
    root?: BinaryTree<T>

    constructor() {
        this.value = null;
        this.left = null;
        this.right = null;
    }

    createNewNode(data: T) {

        if (this.root === null || this.root === undefined) {
            this.root = new BinaryTree();
            this.root.value = data;
            return this.root;
        } else {
            var newNode = new BinaryTree();
            newNode.value = data;
        }

        return this.add(this.root, newNode);
    }

    add(node: BinaryTree<T>, newNode: BinaryTree<T>): BinaryTree<T> {//добавление нового узла

        if (node.value > newNode.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                return this.add(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                return this.add(node.right, newNode);
            }
        }

        return node;
    }

    search(element: number, node?: BinaryTree<T> | null): BinaryTree<T> | null {//поиск заданного узла
        if (node === null) {
            return null;
        }

        node = node || this.root;

        if (element === node.value) {
            return node;
        } else if (element < node.value) {
            return this.search(element, node.left);
        } else if (element > node.value) {
            return this.search(element, node.right);
        }

        return node;
    }

    findMinimalNode(node: BinaryTree<T>): BinaryTree<T> {//поиск минимального узла в левых ветках
        // debugger
        if (node.left === null) {
            return node;
        }

        return this.findMinimalNode(node.left);
    }

    delete(element: number, node?: BinaryTree<T>) {
        // debugger
        node = node || this.root;

        if (node === null) {
            return null;
        } else if (element < node.value) {
            node.left = this.delete(element, node.left);
            return node;
        } else if (element > node.value) {
            node.right = this.delete(element, node.right);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node == null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
        }

        let minNode = this.findMinimalNode(node.right);
        node.value = minNode.value;
        node.right = this.delete(minNode.value, node.right);

        return minNode;
    }

}

const arrayForNode = [33, 1, 4, 9, 7, 44, 706, 88, 22, 65, 8, 45, 710, 3, 2, 10, 99, 27, 17, 100, -2];

const binaryTree = new BinaryTree();

for (let i = 0; i < arrayForNode.length; i++) {
    binaryTree.createNewNode(arrayForNode[i]);
};

//#2 Написать сортировку двумя различными методами

interface Array<T> {
    insertSort(func: (value1: T, value2: T) => Array<T>): Array<T>;
    selectionSort(func: (value1: T, value2: T) => Array<T>): Array<T>;
}

Array.prototype.insertSort = function<T> (callback: (value1: T, value2: T) => T): Array<T> {

    for (let i: number = 0; i < this.length; i++) {
        let buf = this[i];
        let j: number = i - 1;
        while (j >= 0 && callback(this[j], buf)) {
            this[j + 1] = this[j];
            j--;
        }
        this[j + 1] = buf;
    }
    return this;
}

Array.prototype.selectionSort = function<T> (callback: (value1: T, value2: T) => T): Array<T> {

    for (let i: number = 0; i < this.length - 1; i++) {
        let min = i;
        for (let j: number = i + 1; j < this.length; j++) {
            if (callback(this[j], this[min])) {
                min = j;
            }
        }
        let buf = this[min];
        this[min] = this[i];
        this[i] = buf;
    }
    return this;
}