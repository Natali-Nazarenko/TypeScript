//#1 Написать свою реализацию функций bind, call.

interface Function {
    myBind(obj: object): Function;
    myCall(obj: object): void;
    myApply(obj: object, data: []): void;
}
Function.prototype.myBind = function (context: {}, ...args: any): Function {
    return (...rest: any) => {
        let bufferObj = Object.create(context);
        bufferObj.func = this;
        let result = bufferObj.func(...args, ...rest);
        return result;
    }
}

Function.prototype.myCall = function (context: {}, ...args: any) {
    let bufferObj = Object.create(context);
    bufferObj.func = this;
    let result = bufferObj.func(...args);
    return result;
}

Function.prototype.myApply = function (context: {}, argsArray: []) {
    let bufferObj = Object.create(context);
    bufferObj.func = this;
    let result = bufferObj.func(...argsArray);
    return result;
}

//#2 Написать свою реализацию функций map, filter, reduce, forEach.

interface Array<T> {
    myMap(func: (value: T, index?: number, array?: Array<T>) => Array<T>): Array<T>;
    myFilter(func: (value: T, index?: number, array?: Array<T>) => boolean): Array<T>;
    myReduce(func: (value: T, index?: number, array?: Array<T>) => T, value?: T): T;
    myForEach(func: (value: T, index?: number, array?: Array<T>) => undefined): T;
}

Array.prototype.myMap = function<T> (callback: (value: T, index?: number, array?: Array<T>) => T): Array<T> {
    const resultArrayElem: Array<T> = [];
    for (let i: number = 0; i < this.length; i++) {
        resultArrayElem[i] = callback(this[i], i, this);
    }
    return resultArrayElem;
};

Array.prototype.myFilter = function<T> (callback: (value: T, index?: number, array?: Array<T>) => boolean): Array<T> {
    const resultArrayElements: Array<T>  = [];
    for (let i: number = 0; i < this.length; i++) {
        const isTrueElement: boolean = callback(this[i], i, this);
        if (isTrueElement) {
            resultArrayElements[resultArrayElements.length] = this[i];
        }
    }
    return resultArrayElements;
};

Array.prototype.myReduce = function<T> (callback: (value: T, index?: number, array?: Array<T>) => T, initialValue?: T): T {
    let result: any;
    let i: number = 0;

    if (arguments.length >= 2) {
        result = initialValue;
    } else {
        result = this[i];
        i++;
    }
    for (; i < this.length; i++) {
        result = callback(this[i], i, this);
    }
    return result;
};


Array.prototype.myForEach = function<T> (callback: (value: T, index?: number, array?: Array<T>) => T): undefined {
    for (let i: number = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
    return;
};

//#3 Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи.
//(Реализовать с помощью итератора и генератора)

function* generateFibonacci() {
    let first: number = 0;
    let second: number = 1;
    while (true) {
        let current: number = first;
        first = second;
        second = current + first;
        yield current;
    }
};

let generator = generateFibonacci();

for (let i: number = 0; i < 10; i++) {
    console.log(generator.next().value);
};


let objFibonacciIterator = {
    first: 0,
    second: 1,
    last: 100,
    [Symbol.iterator]: function () {
        return {
            current: this.first,
            first: this.first,
            second: this.second,
            last: this.last,
            next() {
                if (this.current <= this.last) {
                    if (this.current === 0) {
                        return { done: false, value: this.current++ }
                    }
                    this.current = this.first + this.second;
                    this.first = this.second;
                    this.second = this.current;
                    return { done: false, value: this.first };
                } else {
                    return { done: true };
                }
            }
        }
    }
}