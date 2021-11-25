function verifyAnagrams(word1, word2) {
    if (word1.length === word2.length) {
        let wordArray1 = word1.split('').sort();
        let wordArray2 = word2.split('').sort();
        let equalCount = 0;
        for (let i = 0; i < word1.length; i++) {
            if (wordArray1[i] === wordArray2[i]) {
                equalCount++;
            }
        }
        return equalCount === word1.length;
    }
    return false;
}
function countingNumbers(data) {
    let enterNumber = `${data}`.replace(/[^\d]/g, '');
    let arrNumbers = [];
    let count = 0;
    let amountNumbers = {};
    let objectAmountNumbers = {};
    arrNumbers = enterNumber.split('');
    for (let j = 0; j < arrNumbers.length; j++) {
        count = 0;
        for (let k = 0; k < arrNumbers.length; k++) {
            if (arrNumbers[j] === arrNumbers[k]) {
                count++;
            }
            amountNumbers = {
                [arrNumbers[j]]: count,
            };
        }
        objectAmountNumbers = Object.assign(objectAmountNumbers, amountNumbers);
    }
    return objectAmountNumbers;
}
function findUniqueWords(sentence) {
    let spaceArray = [];
    let regPhrase = /[!@#$%^&*(){}?`~:;'",.0-9\s]/;
    let uniqueCount = 0;
    let count = 0;
    spaceArray = sentence.split(regPhrase);
    for (let i = 0; i < spaceArray.length; i++) {
        for (let j = 0; j < spaceArray.length; j++) {
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
function calculateUniqueWords(newSentence) {
    let spaceArray = [];
    let regPhrase = /[!@#$%^&*(){}?`~:;'",.0-9\s]/;
    let objectUniqueWwords = {};
    let amountUniqueWwords = {};
    let uniqueCount = 0;
    spaceArray = newSentence.split(regPhrase);
    for (let i = 0; i < spaceArray.length; i++) {
        uniqueCount = 0;
        for (let j = 0; j < spaceArray.length; j++) {
            if (spaceArray[i] == spaceArray[j]) {
                uniqueCount++;
            }
        }
        amountUniqueWwords = {
            [spaceArray[i]]: uniqueCount,
        };
        objectUniqueWwords = Object.assign(objectUniqueWwords, amountUniqueWwords);
    }
    return objectUniqueWwords;
}
function fibonacci(numberFibonacci) {
    const arrNumbersFibonacci = [0, 1];
    if (numberFibonacci === 0 || numberFibonacci == 1) {
        return numberFibonacci;
    }
    else {
        for (let i = 2; i < numberFibonacci; i++) {
            arrNumbersFibonacci[i] = arrNumbersFibonacci[i - 2] + arrNumbersFibonacci[i - 1];
        }
    }
    return arrNumbersFibonacci;
}
class PerimetrVsSquare {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    perimetrCircle() {
        return (2 * Math.PI * this.side1);
    }
    perimetrRectangle() {
        let perimetr = 0;
        if (this.side2 !== undefined) {
            perimetr = (2 * (this.side1 + this.side2));
        }
        return perimetr;
    }
    perimetrsquareTriangle() {
        let perimetr = 0;
        if (this.side2 !== undefined && this.side3 !== undefined) {
            perimetr = (this.side1 + this.side2 + this.side3);
        }
        return perimetr;
    }
    squareCircle() {
        return (Math.PI * (this.side1 * this.side1));
    }
    squareRectangle() {
        let square = 0;
        if (this.side2 !== undefined) {
            square = this.side1 * this.side2;
        }
        return square;
    }
    squareTriangle() {
        let square = 0;
        let semiPerimeter = 0;
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
function factorialCalculation(numberForFactorial) {
    let factorialResult = 1;
    if (numberForFactorial > 0) {
        for (let i = 1; i < numberForFactorial + 1; i++) {
            factorialResult = factorialResult * i;
        }
        return factorialResult;
    }
    return factorialResult;
}
function sumElementsMultipleX(arrayNumbers, x) {
    let sumMultipleX = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] % x == 0) {
            sumMultipleX += arrayNumbers[i];
        }
    }
    return sumMultipleX;
}
function sumElementsOnlyPositive(arrayNumbers) {
    let sumOnlyPositive = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > 0) {
            sumOnlyPositive += arrayNumbers[i];
        }
    }
    return sumOnlyPositive;
}
function sumElementsOnlyUneven(arrayNumbers) {
    let sumOnlyUneven = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] % 2 != 0) {
            sumOnlyUneven += arrayNumbers[i];
        }
    }
    return sumOnlyUneven;
}
function amountZeroElements(arrayNumbers) {
    let amountZeroElement = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] == 0) {
            amountZeroElement++;
        }
    }
    return amountZeroElement;
}
function amountNegativeElements(arrayNumbers) {
    let amountNegativeElement = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] < 0) {
            amountNegativeElement++;
        }
    }
    return amountNegativeElement;
}
function amountPositiveElements(arrayNumbers) {
    let amountPositiveElement = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > 0) {
            amountPositiveElement++;
        }
    }
    return amountPositiveElement;
}
function amountSimpleElements(arrayNumbers) {
    let amountSimpleElement = 0;
    let countDenominator = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > 2) {
            countDenominator = 0;
            for (let j = 2; j < arrayNumbers[i]; j++) {
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
function decimalNumberConversToBinaryNumber(decimalNumber) {
    let arrayBinaryNumber = [];
    let binaryNumber = '';
    for (let i = 0; decimalNumber > 0; i++) {
        arrayBinaryNumber[i] = decimalNumber % 2;
        decimalNumber = Math.trunc(decimalNumber / 2);
    }
    binaryNumber = arrayBinaryNumber.reverse().join('');
    return binaryNumber;
}
function binaryNumberConversToDecimalNumber(binaryNumber) {
    let sumDegree = 0;
    let arrayDegree = [];
    let stringNumber = String(binaryNumber).split('');
    for (let i = 0; i < stringNumber.length; i++) {
        arrayDegree[i] = Math.pow(2, i);
    }
    arrayDegree.reverse();
    for (let j = 0; j < arrayDegree.length; j++) {
        if (Number(stringNumber[j]) == 1) {
            sumDegree += arrayDegree[j];
        }
    }
    return sumDegree;
}
function sumElemMatrixMultipleX(matrix, x) {
    let sumElemMultipleX = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] % x == 0) {
                sumElemMultipleX += matrix[i][j];
            }
        }
    }
    return sumElemMultipleX;
}
function sumElemMatrixOnlyUneven(matrix) {
    let sumOnlyUneven = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] % 2 != 0) {
                sumOnlyUneven += matrix[i][j];
            }
        }
    }
    return sumOnlyUneven;
}
function sumElemMatrixOnlyPositive(matrix) {
    let sumOnlyPositive = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] > 0) {
                sumOnlyPositive += matrix[i][j];
            }
        }
    }
    return sumOnlyPositive;
}
function amountZeroElemMatrix(matrix) {
    let amountZeroElem = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] == 0) {
                amountZeroElem++;
            }
        }
    }
    return amountZeroElem;
}
function amountNegativeElemMatrix(matrix) {
    let amountNegativeElem = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] < 0) {
                amountNegativeElem++;
            }
        }
    }
    return amountNegativeElem;
}
function amountPositiveElemMatrix(matrix) {
    let amountPositiveElem = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] > 0) {
                amountPositiveElem++;
            }
        }
    }
    return amountPositiveElem;
}
function amountSimpleElemMatrix(matrix) {
    let amountSimpleElem = 0;
    let countDenominator = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] > 2) {
                countDenominator = 0;
                for (let k = 2; k < matrix[i][j]; k++) {
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
function sumRangeMinMax(min, max) {
    let sumFromMinBeforeMax = 0;
    for (let i = min; i <= max; i++) {
        sumFromMinBeforeMax += i;
    }
    return sumFromMinBeforeMax;
}
function sumRangeMinMaxMultiplesThree(min, max) {
    let sumMultiplesThree = 0;
    for (let i = min; i <= max; i++) {
        if (i % 3 == 0) {
            sumMultiplesThree += i;
        }
    }
    return sumMultiplesThree;
}
function sumRangeMinMaxOnlyPositive(min, max) {
    let sumOnlyPositiveElements = 0;
    for (let i = min; i <= max; i++) {
        if (i > 0) {
            sumOnlyPositiveElements += i;
        }
    }
    return sumOnlyPositiveElements;
}
function sumElem(a, b) {
    return a + b;
}
function meanSingleArrayAllElem(arrElements, callback) {
    let meanAllElem = 0;
    let countAll = 0;
    for (let i = 0; i < arrElements.length; i++) {
        meanAllElem = callback(meanAllElem, arrElements[i]);
        countAll++;
    }
    return meanAllElem / countAll;
}
function meanSingleArrayEvenElem(arrElements, callback) {
    let meanEvenElem = 0;
    let countEven = 0;
    for (let i = 0; i < arrElements.length; i++) {
        if (arrElements[i] % 2 == 0) {
            meanEvenElem = callback(meanEvenElem, arrElements[i]);
            countEven++;
        }
    }
    return meanEvenElem / countEven;
}
function meanSingleArrayUnevenElem(arrElements, callback) {
    let meanUnevenElem = 0;
    let countUneven = 0;
    for (let i = 0; i < arrElements.length; i++) {
        if (arrElements[i] % 2 != 0) {
            meanUnevenElem = callback(meanUnevenElem, arrElements[i]);
            countUneven++;
        }
    }
    return meanUnevenElem / countUneven;
}
function meanDimensionalArrayAllElem(matrix, callback) {
    let meanAllElem = 0;
    let countAll = 0;
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix.length; k++) {
            meanAllElem = callback(meanAllElem, matrix[j][k]);
            countAll++;
        }
    }
    return meanAllElem / countAll;
}
function meanDimensionalArrayEvenElem(matrix, callback) {
    let meanEvenElem = 0;
    let countEven = 0;
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix.length; k++) {
            if (matrix[j][k] % 2 == 0) {
                meanEvenElem = callback(meanEvenElem, matrix[j][k]);
                countEven++;
            }
        }
    }
    return meanEvenElem / countEven;
}
function meanDimensionalArrayUnevenElem(matrix, callback) {
    let meanUnevenElem = 0;
    let countUneven = 0;
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix.length; k++) {
            if (matrix[j][k] % 2 != 0) {
                meanUnevenElem = callback(meanUnevenElem, matrix[j][k]);
                countUneven++;
            }
        }
    }
    return meanUnevenElem / countUneven;
}
function transpositionMatrix(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        newMatrix.push([]);
    }
    ;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            newMatrix[j].push(matrix[i][j]);
        }
        ;
    }
    ;
    return newMatrix;
}
function sumTwoMatrix(matrixFirst, matrixSecond) {
    for (let i = 0; i < matrixFirst.length; i++) {
        for (let j = 0; j < matrixFirst.length; j++) {
            matrixFirst[i][j] += matrixSecond[i][j];
        }
    }
    return matrixFirst;
}
function deleteLineWithZeroElement(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix.splice(i, 1);
                --i;
                break;
            }
        }
    }
    return matrix;
}
function deleteColumnWithZeroElement(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[j][i] === 0) {
                for (let k = 0; k < matrix.length; k++) {
                    matrix[k].splice(i, 1);
                }
                break;
            }
        }
    }
    return matrix;
}
//# sourceMappingURL=script.js.map