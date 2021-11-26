Function.prototype.myBind = function (context, ...args) {
    return (...rest) => {
        let bufferObj = Object.create(context);
        bufferObj.func = this;
        let result = bufferObj.func(...args, ...rest);
        return result;
    };
};
Function.prototype.myCall = function (context, ...args) {
    let bufferObj = Object.create(context);
    bufferObj.func = this;
    let result = bufferObj.func(...args);
    return result;
};
Function.prototype.myApply = function (context, argsArray) {
    let bufferObj = Object.create(context);
    bufferObj.func = this;
    let result = bufferObj.func(...argsArray);
    return result;
};
Array.prototype.myMap = function (callback) {
    const resultArrayElem = [];
    for (let i = 0; i < this.length; i++) {
        resultArrayElem[i] = callback(this[i], i, this);
    }
    return resultArrayElem;
};
Array.prototype.myFilter = function (callback) {
    const resultArrayElements = [];
    for (let i = 0; i < this.length; i++) {
        const isTrueElement = callback(this[i], i, this);
        if (isTrueElement) {
            resultArrayElements[resultArrayElements.length] = this[i];
        }
    }
    return resultArrayElements;
};
Array.prototype.myReduce = function (callback, initialValue) {
    let result;
    let i = 0;
    if (arguments.length >= 2) {
        result = initialValue;
    }
    else {
        result = this[i];
        i++;
    }
    for (; i < this.length; i++) {
        result = callback(this[i], i, this);
    }
    return result;
};
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
    return;
};
function* generateFibonacci() {
    let first = 0;
    let second = 1;
    while (true) {
        let current = first;
        first = second;
        second = current + first;
        yield current;
    }
}
;
let generator = generateFibonacci();
for (let i = 0; i < 10; i++) {
    console.log(generator.next().value);
}
;
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
                        return { done: false, value: this.current++ };
                    }
                    this.current = this.first + this.second;
                    this.first = this.second;
                    this.second = this.current;
                    return { done: false, value: this.first };
                }
                else {
                    return { done: true };
                }
            }
        };
    }
};
//# sourceMappingURL=deepTS.js.map