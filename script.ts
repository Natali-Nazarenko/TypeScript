//BaseJS
//exercise №1 Написать функцию которая проверяет являются ли две строки анаграммой или нет
function verifyAnagrams(word1: string, word2: string): boolean {
    if (word1.length === word2.length) {
        let wordArray1: string[] = word1.split('').sort();
        let wordArray2: string[] = word2.split('').sort();

        let equalCount: number = 0;
        for (let i: number = 0; i < word1.length; i++) {
            if (wordArray1[i] === wordArray2[i]) {
                equalCount++;
            }
        }
        return equalCount === word1.length;
    }
    return false;
}

//exercise №3 Написать функцию, которая вычисляет количество каждой цифры в числе

function countingNumbers(data: number): {} {
    let enterNumber: string = `${data}`.replace(/[^\d]/g, ''); //убираем из числа "-" "," "." "е" и переводим в строку
    let arrNumbers: string[] = [];
    let count: number = 0;
    let amountNumbers: {} = {};
    let objectAmountNumbers: {} = {};
    arrNumbers = enterNumber.split(''); // разбиваем строку в массив
    for (let j: number = 0; j < arrNumbers.length; j++) {
        count = 0;
        //перебираем массив, ищем совпадения, увеличиваем счетчик
        for (let k: number = 0; k < arrNumbers.length; k++) {

            if (arrNumbers[j] === arrNumbers[k]) {
                count++;
            }
            amountNumbers = { // записываем результат в объект
                [arrNumbers[j]]: count,
            }
        }
        objectAmountNumbers = (<any>Object).assign(objectAmountNumbers, amountNumbers)
    }
    return objectAmountNumbers;
}

//exercise №4 Написать функцию которая вычисляет подсчет уникальных слов в предложении

function findUniqueWords(sentence: string): number {

    let spaceArray: string[] = [];
    let regPhrase: RegExp = /[!@#$%^&*(){}?`~:;'",.0-9\s]/;
    let uniqueCount: number = 0;
    let count: number = 0;

    spaceArray = sentence.split(regPhrase); // удаляем из предложения символы отличные от букв и записываем оставшиеся слова в массив
    for (let i: number = 0; i < spaceArray.length; i++) {
        for (let j: number = 0; j < spaceArray.length; j++) {
            if (spaceArray[i] == spaceArray[j]) {
                count++;
            }
        }
        if (count == 1) {
            uniqueCount++;
        }
        count = 0;
    }
    return uniqueCount;
}

//exercise №5 Написать функцию которая вычисляет вхождение каждого слова в предложение

function calculateUniqueWords(newSentence: string): {} {

    let spaceArray: string[] = [];
    let regPhrase: RegExp = /[!@#$%^&*(){}?`~:;'",.0-9\s]/;
    let objectUniqueWwords: {} = {};
    let amountUniqueWwords: {} = {};

    let uniqueCount: number = 0;

    spaceArray = newSentence.split(regPhrase); // удаляем из предложения символы отличные от букв и записываем оставшиеся слова в массив

    for (let i: number = 0; i < spaceArray.length; i++) {
        uniqueCount = 0;
        for (let j: number = 0; j < spaceArray.length; j++) {
            if (spaceArray[i] == spaceArray[j]) {
                uniqueCount++;
            }
        }
        amountUniqueWwords = { //записываем слово и его кол-во вхождений в предложении в объект
            [spaceArray[i]]: uniqueCount,
        }
        objectUniqueWwords = (<any>Object).assign(objectUniqueWwords, amountUniqueWwords)
    }
    return objectUniqueWwords;
}

//exercise №6 Написать функцию которая возвращает N первых чисел фибоначчи

function fibonacci(numberFibonacci: number): number | number[] {
    const arrNumbersFibonacci: number[] = [0, 1];
    if (numberFibonacci === 0 || numberFibonacci == 1) {
        return numberFibonacci;
    } else {
        for (let i: number = 2; i < numberFibonacci; i++) {
            arrNumbersFibonacci[i] = arrNumbersFibonacci[i - 2] + arrNumbersFibonacci[i - 1];
        }
    }
    return arrNumbersFibonacci;
}

//exercise №7 Вычислить периметр и площадь для прямоугольника, треугольника и круга

class PerimetrVsSquare {
    side1: number;
    side2: number;
    side3: number;
    constructor(side1: number, side2?: number, side3?: number) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    perimetrCircle() {
        return (2 * Math.PI * this.side1);
    }

    perimetrRectangle() {
        let perimetr: number = 0;
        if (this.side2 !== undefined) {
            perimetr = (2 * (this.side1 + this.side2));
        }
        return perimetr;
    }

    perimetrsquareTriangle() {
        let perimetr: number = 0;
        if (this.side2 !== undefined && this.side3 !== undefined) {
            perimetr = (this.side1 + this.side2 + this.side3);
        }
        return perimetr;
    }

    squareCircle() {
        return (Math.PI * (this.side1 * this.side1));
    }

    squareRectangle() {
        let square: number = 0;
        if (this.side2 !== undefined) {
            square = this.side1 * this.side2
        }
        return square;
    }

    squareTriangle() {
        let square: number = 0;
        let semiPerimeter: number = 0;
        if (this.side2 !== undefined && this.side3 !== undefined) {
            semiPerimeter = (this.side1 + this.side2 + this.side3) / 2;
            square = (Math.sqrt(semiPerimeter * 
            (semiPerimeter - this.side1) * 
            (semiPerimeter - this.side2) * 
            (semiPerimeter - this.side3)));
        }
        return square;
    }

}

//exercise №8 Вычислить факториал числа

function factorialCalculation(numberForFactorial: number): number {
    let factorialResult: number = 1;
    if (numberForFactorial > 0) {
        for (let i: number = 1; i < numberForFactorial + 1; i++) {
            factorialResult = factorialResult * i;
        }
        return factorialResult;
    }
    return factorialResult;
}

//exercise №9 Посчитать сумму всех элементов массива, только тех которые 
//(Кратные двум, кратные трем, только положительные и нечетные)

function sumElementsMultipleX(arrayNumbers: number[], x: number): number {
    let sumMultipleX: number = 0;
    for (let i: number = 0; i < arrayNumbers.length; i++) {

        if (arrayNumbers[i] % x == 0) {
            sumMultipleX += arrayNumbers[i];
        }
    }
    return sumMultipleX;
}

function sumElementsOnlyPositive(arrayNumbers: number[]): number {
    let sumOnlyPositive: number = 0;
    for (let i: number = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > 0) {
            sumOnlyPositive += arrayNumbers[i];
        }
    }
    return sumOnlyPositive;
}

function sumElementsOnlyUneven(arrayNumbers: number[]): number {
    let sumOnlyUneven: number = 0;
    for (let i: number = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] % 2 != 0) {
            sumOnlyUneven += arrayNumbers[i];
        }
    }
    return sumOnlyUneven;
}

//exercise №10 Посчитать количество элементов массива которые 
//(Нулевые, отрицательные, положительные, простые числа)

function amountZeroElements(arrayNumbers: number[]): number {
    let amountZeroElement: number = 0;
    for (let i: number = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] == 0) {
            amountZeroElement++;
        }
    }
    return amountZeroElement;
}

function amountNegativeElements(arrayNumbers: number[]):number {
    let amountNegativeElement: number = 0;
    for (let i: number = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] < 0) {
            amountNegativeElement++;
        }
    }
    return amountNegativeElement;
}

function amountPositiveElements(arrayNumbers: number[]): number {
    let amountPositiveElement: number = 0;

    for (let i: number = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > 0) {
            amountPositiveElement++;
        }
    }
    return amountPositiveElement;
}

function amountSimpleElements(arrayNumbers: number[]): number {
    let amountSimpleElement: number = 0;
    let countDenominator: number = 0;

    for (let i: number = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > 2) {
            countDenominator = 0;
            for (let j: number = 2; j < arrayNumbers[i]; j++) {
                if (arrayNumbers[i] % j == 0) {
                    countDenominator++;
                }
            }
            if (countDenominator == 0) {
                amountSimpleElement++;
            }
        }
    }
    return amountSimpleElement;
}

//exercise №11 Написать функции, которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону

function decimalNumberConversToBinaryNumber(decimalNumber: number) {
    let arrayBinaryNumber: number[] = [];
    let binaryNumber: string = '';
    for (let i: number = 0; decimalNumber > 0; i++) {
        arrayBinaryNumber[i] = decimalNumber % 2;
        decimalNumber = Math.trunc(decimalNumber / 2);
    }
    binaryNumber = arrayBinaryNumber.reverse().join('');
    return binaryNumber;
}

function binaryNumberConversToDecimalNumber(binaryNumber: number): number {
    let sumDegree: number = 0;
    let arrayDegree: number[] = [];
    let stringNumber: string[] = String(binaryNumber).split('');
    for (let i: number = 0; i < stringNumber.length; i++) {
        arrayDegree[i] = Math.pow(2, i);
    }
    arrayDegree.reverse();
    for (let j: number = 0; j < arrayDegree.length; j++) {
        if (Number(stringNumber[j]) == 1) {
            sumDegree += arrayDegree[j];
        }
    }
    return sumDegree;
}

//exercise №12 Пункты 9 и 10 выполнить для двумерных массивов
//(Кратные двум, кратные трем, только положительные и нечетные)

function sumElemMatrixMultipleX(matrix: number[][], x: number): number {
    let sumElemMultipleX: number = 0;
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[i][j] % x == 0) {
                sumElemMultipleX += matrix[i][j];
            }
        }
    }
    return sumElemMultipleX;
}

function sumElemMatrixOnlyUneven(matrix: number[][]): number {
    let sumOnlyUneven: number = 0;
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[i][j] % 2 != 0) {
                sumOnlyUneven += matrix[i][j];
            }
        }
    }
    return sumOnlyUneven;
}

function sumElemMatrixOnlyPositive(matrix: number[][]): number {
    let sumOnlyPositive: number = 0;
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[i][j] > 0) {
                sumOnlyPositive += matrix[i][j];
            }
        }
    }
    return sumOnlyPositive;
}

//(Нулевые, отрицательные, положительные, простые числа)

function amountZeroElemMatrix(matrix: number[][]): number {
    let amountZeroElem: number = 0;
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[i][j] == 0) {
                amountZeroElem++;
            }
        }
    }
    return amountZeroElem;
}

function amountNegativeElemMatrix(matrix: number[][]): number {
    let amountNegativeElem: number = 0;
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[i][j] < 0) {
                amountNegativeElem++;
            }
        }
    }
    return amountNegativeElem;
}

function amountPositiveElemMatrix(matrix: number[][]): number {
    let amountPositiveElem: number = 0;
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[i][j] > 0) {
                amountPositiveElem++;
            }
        }
    }
    return amountPositiveElem;
}

function amountSimpleElemMatrix(matrix: number[][]): number {
    let amountSimpleElem: number = 0;
    let countDenominator: number = 0;
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[i][j] > 2) {
                countDenominator = 0;
                for (let k: number = 2; k < matrix[i][j]; k++) {
                    if (matrix[i][j] % k === 0) {
                        countDenominator++;
                    }
                }
                if (countDenominator === 0) {
                    amountSimpleElem++;
                }
                countDenominator = 0;
            }
        }
    }
    return amountSimpleElem;
}

//exercise №13 Посчитать сумму значений чисел от min до max (всех, только кратных 3, только положительные)

function sumRangeMinMax(min: number, max: number): number {
    let sumFromMinBeforeMax: number = 0;
    for (let i: number = min; i <= max; i++) {
        sumFromMinBeforeMax += i;
    }
    return sumFromMinBeforeMax;
}

function sumRangeMinMaxMultiplesThree(min: number, max: number): number {
    let sumMultiplesThree: number = 0;
    for (let i: number = min; i <= max; i++) {
        if (i % 3 == 0) {
            sumMultiplesThree += i;
        }
    }
    return sumMultiplesThree;
}

function sumRangeMinMaxOnlyPositive(min: number, max: number): number {
    let sumOnlyPositiveElements: number = 0;
    for (let i: number = min; i <= max; i++) {
        if (i > 0) {
            sumOnlyPositiveElements += i;
        }
    }
    return sumOnlyPositiveElements;
}

//exercise №14 Найти среднее значение всех элементов одномерного/двумерного массива
// (Среднее только тех которые четные и которые не четные)

function sumElem(a: number, b: number): number {
    return a + b;
}

function meanSingleArrayAllElem(arrElements: number[], callback: (value1: number, value2: number)=> number): number {
    let meanAllElem: number = 0;
    let countAll: number = 0;
    for (let i = 0; i < arrElements.length; i++) {
        meanAllElem = callback(meanAllElem, arrElements[i]);
        countAll++;
    }
    return meanAllElem / countAll;
}

function meanSingleArrayEvenElem(arrElements: number[], callback: (value1: number, value2: number)=> number): number {
    let meanEvenElem: number = 0;
    let countEven: number = 0;
    for (let i: number = 0; i < arrElements.length; i++) {
        if (arrElements[i] % 2 == 0) {
            meanEvenElem = callback(meanEvenElem, arrElements[i]);
            countEven++;
        }
    }
    return meanEvenElem / countEven;
}

function meanSingleArrayUnevenElem(arrElements: number[], callback: (value1: number, value2: number)=> number): number {
    let meanUnevenElem: number = 0;
    let countUneven = 0;
    for (let i: number = 0; i < arrElements.length; i++) {
        if (arrElements[i] % 2 != 0) {
            meanUnevenElem = callback(meanUnevenElem, arrElements[i]);
            countUneven++;
        }
    }
    return meanUnevenElem / countUneven;
}

function meanDimensionalArrayAllElem(matrix: number[][], callback: (value1: number, value2: number)=> number): number {
    let meanAllElem: number = 0;
    let countAll: number = 0;
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix.length; k++) {
            meanAllElem = callback(meanAllElem, matrix[j][k]);
            countAll++;
        }
    }
    return meanAllElem / countAll;
}

function meanDimensionalArrayEvenElem(matrix: number[][], callback: (value1: number, value2: number)=> number): number {
    let meanEvenElem: number = 0;
    let countEven: number = 0;
    for (let j: number = 0; j < matrix.length; j++) {
        for (let k: number = 0; k < matrix.length; k++) {
            if (matrix[j][k] % 2 == 0) {
                meanEvenElem = callback(meanEvenElem, matrix[j][k]);
                countEven++;
            }
        }
    }
    return meanEvenElem / countEven;
}

function meanDimensionalArrayUnevenElem(matrix: number[][], callback: (value1: number, value2: number)=> number): number {
    let meanUnevenElem: number = 0;
    let countUneven: number = 0;
    for (let j: number = 0; j < matrix.length; j++) {
        for (let k: number = 0; k < matrix.length; k++) {
            if (matrix[j][k] % 2 != 0) {
                meanUnevenElem = callback(meanUnevenElem, matrix[j][k]);
                countUneven++;
            }
        }
    }
    return meanUnevenElem / countUneven;
}

//exercise №15 Транспонировать матрицу

function transpositionMatrix(matrix: number[][]): number[][] {
    let newMatrix: number[][] = [];
    for (let i: number = 0; i < matrix.length; i++) {
        newMatrix.push([]);
    };
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            newMatrix[j].push(matrix[i][j]);
        };
    };
    return newMatrix;
}

//exercise №16 Сложить две матрицы

function sumTwoMatrix(matrixFirst: number[][], matrixSecond: number[][]): number[][] {
    for (let i: number = 0; i < matrixFirst.length; i++) {
        for (let j: number = 0; j < matrixFirst.length; j++) {
            matrixFirst[i][j] += matrixSecond[i][j];
        }
    }
    return matrixFirst;
}

//exercise №17 Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. 
//Для столбца аналогично реализовать.

function deleteLineWithZeroElement(matrix: number[][]): number[][] {
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix[0].length; j++) {

            if (matrix[i][j] === 0) {
                matrix.splice(i, 1);
                --i;
                break;
            }
        }
    }
    return matrix;
}

function deleteColumnWithZeroElement(matrix: number[][]): number[][] {
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix[0].length; j++) {

            if (matrix[j][i] === 0) {
                for (let k: number = 0; k < matrix.length; k++) {
                    matrix[k].splice(i, 1);
                }
                break;
            }
        }
    }
    return matrix;
}
