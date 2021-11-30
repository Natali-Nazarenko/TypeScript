//#1

function verifyAnagramsRecurcion(string1: string, string2: string, wordArray1?: string[], wordArray2?: string[], i?: number): boolean {
    i = i || 0;
    if (i < string1.length) {
        if (wordArray1 !== undefined && wordArray2 !== undefined) {
            if (string1[i] === string2[i]) {
                return verifyAnagramsRecurcion(string1, string2, wordArray1, wordArray2, ++i);
            }
            return false;
        } else {
            if (string1.length === string2.length) {
                let wordArray1: string[] = string1.split('').sort();
                let wordArray2: string[] = string2.split('').sort();
                return verifyAnagramsRecurcion(string1, string2, wordArray1, wordArray2);
            }
            return false;
        }
    }
    return true;
}

//#3

interface B {
    [key: string]: number
}
function countingNumbersRecurcion(data: number, dataArray: string[], i?: number, j?: number, objAmountNumbers?: B, count?: number): {} {
    // debugger;
    i = i || 0;
    j = j || 0;
    objAmountNumbers = objAmountNumbers || {};
    count = count || 0;

    if (dataArray !== undefined) { // если data уже массив

        if (j === dataArray.length) {
            i++;

            if (objAmountNumbers[dataArray[i]] === undefined) {
                j = 0;
                count = 0;
                return countingNumbersRecurcion(data, dataArray, i, j, objAmountNumbers, count);

            } else {
                return countingNumbersRecurcion(data, dataArray, ++i, j, objAmountNumbers, count);
            }
        }
        else {

            if (i < dataArray.length) {

                if (dataArray[i] === dataArray[j]) {
                    objAmountNumbers[dataArray[i]] = ++count;
                    return countingNumbersRecurcion(data, dataArray, i, ++j, objAmountNumbers, count);
                } else {
                    j++;
                    return countingNumbersRecurcion(data, dataArray, i, j, objAmountNumbers, count);
                }

            } else {
                return objAmountNumbers;
            }
        }

    } else {
        let dataArray: string[] = data.toString().split('');
        return countingNumbersRecurcion(data, dataArray);
    }
}

//#4

function findUniqueWordsRecurcion(sentence: string, arrayWords?: string[], i?: number, j?: number, uniqueCount?: number, count?: number): number {
    // debugger;
    i = i || 0;
    j = j || 0;
    count = count || 0;
    uniqueCount = uniqueCount || 0;

    if (arrayWords !== undefined) {

        if (j == sentence.length) {

            if (count == 1) {
                uniqueCount++;
            }
            j = 0;
            count = 0;
            return findUniqueWordsRecurcion(sentence, arrayWords, ++i, j, uniqueCount, count);
        } else if (i < sentence.length) {

            if (sentence[i] == sentence[j]) {
                return findUniqueWordsRecurcion(sentence, arrayWords, i, ++j, uniqueCount, ++count);
            } else {
                return findUniqueWordsRecurcion(sentence, arrayWords, i, ++j, uniqueCount, count);
            }
        } else {
            return uniqueCount;
        }
    } else {
        let arrayWords: string[] = sentence.split(/[!@#$%^&*(){}?`~:;'",.0-9\s]/);
        return findUniqueWordsRecurcion(sentence, arrayWords);
    }
}

//#5

function findAmountWordsRecurcion(sentence: string, arrayWords: string[], i?: number, j?: number, wordsUniqueObj?: B, count?: number): {} {
    // debugger;
    i = i || 0;
    j = j || 0;
    wordsUniqueObj = wordsUniqueObj || {};
    count = count || 0;

    if (arrayWords !== undefined) {

        if (j === sentence.length) {
            i++;

            if (wordsUniqueObj[sentence[i]] === undefined) {
                j = 0;
                count = 0;
                return findAmountWordsRecurcion(sentence, arrayWords, i, j, wordsUniqueObj, count);

            } else {
                return findAmountWordsRecurcion(sentence, arrayWords, i++, j, wordsUniqueObj, count);
            }
        }
        else {

            if (i < sentence.length) {

                if (sentence[i] == sentence[j]) {
                    wordsUniqueObj[sentence[i]] = ++count;
                    return findAmountWordsRecurcion(sentence, arrayWords, i, ++j, wordsUniqueObj, count);
                } else {
                    j++;
                    return findAmountWordsRecurcion(sentence, arrayWords, i, j, wordsUniqueObj, count);
                }

            } else {
                return wordsUniqueObj;
            }
        }

    } else {
        let arrayWords = sentence.split(/[!@#$%^&*(){}?`~:;'",.0-9\s]/);
        return findAmountWordsRecurcion(sentence, arrayWords);
    }
}

//#6

function fibonacciRecurcion(number: number, i?: number, arrNumbersFibonacci?: number[]): number[] {
    // debugger;
    i = i || 2;
    arrNumbersFibonacci = arrNumbersFibonacci || [0];

    if (number === 0) {
        return arrNumbersFibonacci;
    }else if(number === 1) {
        arrNumbersFibonacci.push(number);
        return arrNumbersFibonacci;
    } else {
        if (i < number) {
            arrNumbersFibonacci[i] = arrNumbersFibonacci[i - 2] + arrNumbersFibonacci[i - 1];
            return fibonacciRecurcion(number, ++i, arrNumbersFibonacci)
        } else {
            return arrNumbersFibonacci.slice(0, arrNumbersFibonacci.length-1);
        }
    }
}

//#8

function factorialCalculationRecurcion(numeric: number, i?: number, factorialResult?: number): number {
    i = i || 1;
    factorialResult = factorialResult || 1;
    if (i <= numeric) {
        if (numeric > 0) {
            factorialResult = factorialResult * i;
            return factorialCalculationRecurcion(numeric, ++i, factorialResult);
        } else if (numeric === 0) {
            return 1;
        }
    }
        return factorialResult;
}

//#9

function sumElementsMultipleTwoRecurcion(arrayNumbers: number[], i?: number, sumMultipleTwo?: number): number {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] % 2 == 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsMultipleTwoRecurcion(arrayNumbers, ++i, sumMultipleTwo);
    }
        return sumMultipleTwo;
}

function sumElementsMultipleThreeRecurcion(arrayNumbers: number[], i?: number, sumMultipleTwo?: number): number {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] % 3 == 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsMultipleThreeRecurcion(arrayNumbers, ++i, sumMultipleTwo);
    }
        return sumMultipleTwo;
}

function sumElementsOnlyPositiveRecurcion(arrayNumbers: number[], i?: number, sumMultipleTwo?: number): number {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] > 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsOnlyPositiveRecurcion(arrayNumbers, ++i, sumMultipleTwo);
    }
        return sumMultipleTwo;
}

function sumElementsOnlyUnevenRecurcion(arrayNumbers: number[], i?: number, sumMultipleTwo?: number): number {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] % 2 != 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsOnlyUnevenRecurcion(arrayNumbers, ++i, sumMultipleTwo);
    }
        return sumMultipleTwo;
}

//#10

function amountZeroElementsRecurcion(arrayNumbers: number[], i?: number, amountZero?: number): number {
    i = i || 0;
    amountZero = amountZero || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] == 0) {
            amountZero++;
        }
        return amountZeroElementsRecurcion(arrayNumbers, ++i, amountZero);
    }
    return amountZero;
}

function amountNegativeElementsRecurcion(arrayNumbers: number[], i?: number, amountNegative?: number): number {
    i = i || 0;
    amountNegative = amountNegative || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] < 0) {
            amountNegative++;
        }
        return amountNegativeElementsRecurcion(arrayNumbers, ++i, amountNegative);
    }
    return amountNegative;
}

function amountPositiveElementsRecurcion(arrayNumbers: number[], i?: number, amountPositive?: number): number {
    i = i || 0;
    amountPositive = amountPositive || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] > 0) {
            amountPositive++;
        }
        return amountPositiveElementsRecurcion(arrayNumbers, ++i, amountPositive);
    }
        return amountPositive;
}

function amountSimpleElementsRecurcion(arrayNumbers: number[], i?: number, amountSimple?: number, countDenominator?: number): number {
    i = i || 0;
    amountSimple = amountSimple || 0;
    countDenominator = countDenominator || 0;

    if (i < arrayNumbers.length) {
        if (arrayNumbers[i] > 2) {
            countDenominator = 0;
            for (let j = 2; j < arrayNumbers[i]; j++) {
                if (arrayNumbers[i] % j == 0) {
                    countDenominator++;
                }
            }
            if (countDenominator == 0) {
                amountSimple++;
            }
        }
        return amountSimpleElementsRecurcion(arrayNumbers, ++i, amountSimple, countDenominator);
    }
        return amountSimple;
}

//#11

function decimalNumberConversToBinaryNumberRecurcion(decimalNumber: number, arrayBinaryNumber?: number[], i?: number): number {
    arrayBinaryNumber = arrayBinaryNumber || [];
    i = i || 0;
    let binaryNumber: string = '';
    if (decimalNumber > 0) {
        arrayBinaryNumber[i] = decimalNumber % 2;
        decimalNumber = Math.trunc(decimalNumber / 2);
        return decimalNumberConversToBinaryNumberRecurcion(decimalNumber, arrayBinaryNumber, ++i);
    } else {
        binaryNumber = arrayBinaryNumber.reverse().join('');
        return Number(binaryNumber);
    }
}

function binaryNumberConversToDecimalNumberRecurcion(
    binaryNumber: number,
    arrayBinaryNumbers: string[],
    arrayDegree?: number[],
    i?: number,
    sumDegree?: number): number {

    i = i || 0;
    sumDegree = sumDegree || 0;
    arrayDegree = arrayDegree || [];
    
    if (arrayBinaryNumbers !== undefined) {

        if (i < arrayBinaryNumbers.length) {

            if (Number(arrayBinaryNumbers[i]) === 1) {
                sumDegree += arrayDegree[i];
            }
            return binaryNumberConversToDecimalNumberRecurcion(binaryNumber, arrayBinaryNumbers, arrayDegree, ++i, sumDegree);

        } else {
            return sumDegree;
        }

    } else {
        let arrayBinaryNumbers = String(binaryNumber).split('').reverse();
        for (let j: number = 0; j < arrayBinaryNumbers.length; j++) {
            arrayDegree[j] = Math.pow(2, j);
        }
        return binaryNumberConversToDecimalNumberRecurcion(binaryNumber, arrayBinaryNumbers, arrayDegree);
    }
}

//#12

function sumElementsMatrixMultipleTwoRecurcion(matrix: number[][], i?: number, j?: number, sumMultipleTwo?: number): number {
    i = i || 0;
    j = j || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixMultipleTwoRecurcion(matrix, ++i, j, sumMultipleTwo);
        } else {
            if (matrix[i][j] % 2 == 0) {
                sumMultipleTwo += matrix[i][j];
            }
            return sumElementsMatrixMultipleTwoRecurcion(matrix, i, ++j, sumMultipleTwo);
        }
    }
        return sumMultipleTwo;
}

function sumElementsMatrixMultipleThreeRecurcion(matrix: number[][], i?: number, j?: number, sumMultipleThree?: number): number {
    i = i || 0;
    j = j || 0;
    sumMultipleThree = sumMultipleThree || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixMultipleThreeRecurcion(matrix, ++i, j, sumMultipleThree);
        } else {
            if (matrix[i][j] % 3 == 0) {
                sumMultipleThree += matrix[i][j];
            }
            return sumElementsMatrixMultipleThreeRecurcion(matrix, i, ++j, sumMultipleThree);
        }
    }
        return sumMultipleThree;
}

function sumElementsMatrixOnlyPositiveRecurcion(matrix: number[][], i?: number, j?: number, sumPositive?: number): number {
    i = i || 0;
    j = j || 0;
    sumPositive = sumPositive || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixOnlyPositiveRecurcion(matrix, ++i, j, sumPositive);
        } else {
            if (matrix[i][j] > 0) {
                sumPositive += matrix[i][j];
            }
            return sumElementsMatrixOnlyPositiveRecurcion(matrix, i, ++j, sumPositive);
        }
    }
        return sumPositive;
}

function sumElementsMatrixOnlyUnevenRecurcion(matrix: number[][], i?: number, j?: number, sumUneven?: number): number {
    i = i || 0;
    j = j || 0;
    sumUneven = sumUneven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixOnlyUnevenRecurcion(matrix, ++i, j, sumUneven);
        } else {
            if (matrix[i][j] % 2 != 0) {
                sumUneven += matrix[i][j];
            }
            return sumElementsMatrixOnlyUnevenRecurcion(matrix, i, ++j, sumUneven);
        }
    }
        return sumUneven;
}

function amountMatrixZeroElementsRecurcion(matrix: number[][], i?: number, j?: number, amountZero?: number): number {
    i = i || 0;
    j = j || 0;
    amountZero = amountZero || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixZeroElementsRecurcion(matrix, ++i, j, amountZero);
        } else {
            if (matrix[i][j] === 0) {
                amountZero++;
            }
            return amountMatrixZeroElementsRecurcion(matrix, i, ++j, amountZero);
        }
    }
        return amountZero;
}

function amountMatrixNegativeElementsRecurcion(matrix: number[][], i?: number, j?: number, amountNegative?: number): number {
    i = i || 0;
    j = j || 0;
    amountNegative = amountNegative || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixNegativeElementsRecurcion(matrix, ++i, j, amountNegative);
        } else {
            if (matrix[i][j] < 0) {
                amountNegative++;
            }
            return amountMatrixNegativeElementsRecurcion(matrix, i, ++j, amountNegative);
        }
    }
        return amountNegative;
}

function amountMatrixPositiveElementsRecurcion(matrix: number[][], i?: number, j?: number, amountPositive?: number): number {
    i = i || 0;
    j = j || 0;
    amountPositive = amountPositive || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixPositiveElementsRecurcion(matrix, ++i, j, amountPositive);
        } else {
            if (matrix[i][j] > 0) {
                amountPositive++;
            }
            return amountMatrixPositiveElementsRecurcion(matrix, i, ++j, amountPositive);
        }
    }
        return amountPositive;
}

function amountMatrixSimpleElementsRecurcion(
    matrix: number[][], 
    i?: number, 
    j?: number, 
    amountSimple?: number, 
    countDenominator?: number): number {

    i = i || 0;
    j = j || 0;
    amountSimple = amountSimple || 0;
    countDenominator = countDenominator || 0;

    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixSimpleElementsRecurcion(matrix, ++i, j, amountSimple, countDenominator);
        } else {
            if (matrix[i][j] > 2) {
                countDenominator = 0;
                for (let k = 2; k < matrix[i][j]; k++) {
                    if (matrix[i][j] % k == 0) {
                        countDenominator++;
                    }
                }
                if (countDenominator == 0) {
                    amountSimple++;
                }
            }
            return amountMatrixSimpleElementsRecurcion(matrix, i, ++j, amountSimple, countDenominator);
        }
    }
        return amountSimple;
}

//№13

function sumRangeMinMaxRecurcion(min: number, max: number, sumFromMinBeforeMax: number): number {
    sumFromMinBeforeMax = sumFromMinBeforeMax || 0;
    if (min <= max) {
        sumFromMinBeforeMax += min;
        return sumRangeMinMaxRecurcion(++min, max, sumFromMinBeforeMax);
    }
        return sumFromMinBeforeMax;
}

function sumRangeMinMaxMultiplesThreeRecurcion(min: number, max: number, sumMultiplesThree: number): number {
    sumMultiplesThree = sumMultiplesThree || 0;
    if (min <= max) {
        if (min % 3 == 0) {
            sumMultiplesThree += min;
        }
        return sumRangeMinMaxMultiplesThreeRecurcion(++min, max, sumMultiplesThree);
    }
        return sumMultiplesThree;
}

function sumRangeMinMaxOnlyPositiveRecurcion(min: number, max: number, sumOnlyPositiveElements: number): number {
    sumOnlyPositiveElements = sumOnlyPositiveElements || 0;
    if (min <= max) {
        if (min > 0) {
            sumOnlyPositiveElements += min;
            return sumRangeMinMaxOnlyPositiveRecurcion(++min, max, sumOnlyPositiveElements);
        } else {
            return sumRangeMinMaxOnlyPositiveRecurcion(++min, max, sumOnlyPositiveElements);
        }
    }
        return sumOnlyPositiveElements;
}

//№14

function meanSingleArrayAllElemRecurcion(arrElements: number[], i?: number, meanAllElem?: number, countAll?: number): number {
    i = i || 0;
    meanAllElem = meanAllElem || 0;
    countAll = countAll || 0;

    if (i < arrElements.length) {
        meanAllElem += arrElements[i];
        countAll++;
        return meanSingleArrayAllElemRecurcion(arrElements, ++i, meanAllElem, countAll);
    }
        return meanAllElem / countAll;
}

function meanSingleArrayEvenElemRecurcion(arrayElements: number[], i?: number, meanEvenElement?: number, countEven?: number): number {
    i = i || 0;
    meanEvenElement = meanEvenElement || 0;
    countEven = countEven || 0;
    if (i < arrayElements.length) {
        if (arrayElements[i] % 2 == 0) {
            meanEvenElement += arrayElements[i];
            countEven++;
        }
        return meanSingleArrayEvenElemRecurcion(arrayElements, ++i, meanEvenElement, countEven);
    }
        return meanEvenElement / countEven;
}

function meanSingleArrayUnevenElemRecurcion(arrElements: number[], i?: number, meanUnevenElem?: number, countUneven?: number): number {
    i = i || 0;
    meanUnevenElem = meanUnevenElem || 0;
    countUneven = countUneven || 0;
    if (i < arrElements.length) {
        if (arrElements[i] % 2 != 0) {
            meanUnevenElem += arrElements[i];
            countUneven++;
        }
        return meanSingleArrayUnevenElemRecurcion(arrElements, ++i, meanUnevenElem, countUneven);
    }
        return meanUnevenElem / countUneven;
}

function meanDimensionalArrayAllElemRecurcion(
    matrix: number[][], 
    i?: number, 
    j?: number, 
    meanAllElem?: number, 
    countAll?: number): number {
    i = i || 0;
    j = j || 0;
    meanAllElem = meanAllElem || 0;
    countAll = countAll || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayAllElemRecurcion(matrix, ++i, j, meanAllElem, countAll);
        } else {
            meanAllElem += matrix[i][j];
            countAll++;
            return meanDimensionalArrayAllElemRecurcion(matrix, i, ++j, meanAllElem, countAll);
        }
    }
        return meanAllElem / countAll;
}

function meanDimensionalArrayEvenElemRecurcion(
    matrix: number[][], 
    i?: number, 
    j?: number, 
    meanEvenElem?: number, 
    countEven?: number): number {

    i = i || 0;
    j = j || 0;
    meanEvenElem = meanEvenElem || 0;
    countEven = countEven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayEvenElemRecurcion(matrix, ++i, j, meanEvenElem, countEven);
        } else {
            if (matrix[i][j] % 2 == 0) {
                meanEvenElem += matrix[i][j];
                countEven++;
            }
            return meanDimensionalArrayEvenElemRecurcion(matrix, i, ++j, meanEvenElem, countEven);
        }
    }
        return meanEvenElem / countEven;
}

function meanDimensionalArrayUnevenElemRecurcion(
    matrix: number[][], 
    i?: number, 
    j?: number, 
    meanUnevenElem?: number, 
    countUneven?: number): number {
    i = i || 0;
    j = j || 0;
    meanUnevenElem = meanUnevenElem || 0;
    countUneven = countUneven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayUnevenElemRecurcion(matrix, ++i, j, meanUnevenElem, countUneven);
        } else {
            if (matrix[i][j] % 2 != 0) {
                meanUnevenElem += matrix[i][j];
                countUneven++;
            }
            return meanDimensionalArrayUnevenElemRecurcion(matrix, i, ++j, meanUnevenElem, countUneven);
        }
    }
        return meanUnevenElem / countUneven;
}

//#15

function transpositionMatrixRecurcion(
    array: number[][],
    newDimensionalArray: number[][],
    i?: number,
    j?: number,
    k?: number): number[][] {
    i = i || 0;
    j = j || 0;
    k = k || 0;
    newDimensionalArray = newDimensionalArray || [];

    if (newDimensionalArray.length === array.length) {
        if (i < array.length) {
            if (j === array.length) {
                j = 0;
                return transpositionMatrixRecurcion(array, newDimensionalArray, ++i, j);
            } else {
                newDimensionalArray[j].push(array[i][j]);
                return transpositionMatrixRecurcion(array, newDimensionalArray, i, ++j);
            }
        }
    } else {
        if (i < array.length) {
            newDimensionalArray.push([]);
            return transpositionMatrixRecurcion(array, newDimensionalArray, i, j, ++k);
        }
    }
    return newDimensionalArray;
}

//#16

function sumTwoMatrixRecurcion(matrixFirst: number[][], matrixSecond: number[][], i?: number, j?: number): number[][] {
    i = i || 0;
    j = j || 0;

    if (i < matrixFirst.length) {
        if (j == matrixFirst.length) {
            j = 0;
            return sumTwoMatrixRecurcion(matrixFirst, matrixSecond, ++i, j);
        } else {
            matrixFirst[i][j] += matrixSecond[i][j];
            return sumTwoMatrixRecurcion(matrixFirst, matrixSecond, i, ++j);
        }
    }
        return matrixFirst;
}

//#17

function deleteLineWithZeroElementRecurcion(matrix: number[][], i?: number): number[][] {
    i = i || 0;

    if (i < matrix.length) {
        for (let j: number = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix.splice(i, 1);
                --i;
                break;
            }
        }
        return deleteLineWithZeroElementRecurcion(matrix, ++i);
    }

    return matrix;
}

function deleteColumnWithZeroElementRecurcion(matrix: number[][], i?: number): number[][] {
    i = i || 0

    if (i < matrix.length) {
        for (let j: number = 0; j < matrix[0].length; j++) {

            if (matrix[j][i] === 0) {
                for (let k: number = 0; k < matrix.length; k++) {
                    matrix[k].splice(i, 1);
                }
                break;
            }
        }
        return deleteColumnWithZeroElementRecurcion(matrix, ++i);
    }
    return matrix;
}
