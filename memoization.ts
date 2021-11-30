
const memoization: Function = (data: any) => {
    let cache: any = {};
    return (...n: any) => {

        if (cache[n] != undefined) {
            return cache[n];
        } else {
            let result = data(...n);
            cache[n] = result;
            return result;
        }
    }
}; 

//#1 Написать функцию которая проверяет являются ли две строки анаграммой или нет

const verifyAnagramsRecurcionMemoization: Function = memoization((
    string1: string, 
    string2: string, 
    wordArray1?: string[], 
    wordArray2?: string[], 
    i?: number): boolean => {
    i = i || 0;
    if (i < string1.length) {
        if (wordArray1 !== undefined && wordArray2 !== undefined) {

            if (string1[i] === string2[i]) {
                return verifyAnagramsRecurcionMemoization(string1, string2, wordArray1, wordArray2, ++i);
            }
            return false;
        } else {

            if (string1.length === string2.length) {
                let wordArray1 = string1.split('').sort();
                let wordArray2 = string2.split('').sort();
                return verifyAnagramsRecurcionMemoization(string1, string2, wordArray1, wordArray2);
            }
            return false;
        }
    }
    return true;
});

//#3

interface A {
    [key: string]: number
}
const countingNumbersRecurcionMemoization: Function = memoization((data: number, dataArray: string[], i?: number, j?: number, objAmountNumbers?: A, count?: number): {} => {
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
                return countingNumbersRecurcionMemoization(data, dataArray, i, j, objAmountNumbers, count);

            } else {
                return countingNumbersRecurcionMemoization(data, dataArray, ++i, j, objAmountNumbers, count);
            }
        }
        else {

            if (i < dataArray.length) {

                if (dataArray[i] === dataArray[j]) {
                    objAmountNumbers[dataArray[i]] = ++count;
                    return countingNumbersRecurcionMemoization(data, dataArray, i, ++j, objAmountNumbers, count);
                } else {
                    j++;
                    return countingNumbersRecurcionMemoization(data, dataArray, i, j, objAmountNumbers, count);
                }

            } else {
                return objAmountNumbers;
            }
        }

    } else {
        let dataArray: string[] = data.toString().split('');
        return countingNumbersRecurcionMemoization(data, dataArray);
    }
});

//#4

const findUniqueWordsRecurcionMemoization: Function = memoization((sentence: string, arrayWords?: string[], i?: number, j?: number, uniqueCount?: number, count?: number): number => {
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
            return findUniqueWordsRecurcionMemoization(sentence, arrayWords, ++i, j, uniqueCount, count);
        } else if (i < sentence.length) {

            if (sentence[i] == sentence[j]) {
                return findUniqueWordsRecurcionMemoization(sentence, arrayWords, i, ++j, uniqueCount, ++count);
            } else {
                return findUniqueWordsRecurcionMemoization(sentence, arrayWords, i, ++j, uniqueCount, count);
            }
        } else {
            return uniqueCount;
        }
    } else {
        let arrayWords: string[] = sentence.split(/[!@#$%^&*(){}?`~:;'",.0-9\s]/);
        return findUniqueWordsRecurcionMemoization(sentence, arrayWords);
    }
});

//#5

const findAmountWordsRecurcionMemoization: Function = memoization((sentence: string, arrayWords: string[], i?: number, j?: number, wordsUniqueObj?: A, count?: number): {} => {
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
                return findAmountWordsRecurcionMemoization(sentence, arrayWords, i, j, wordsUniqueObj, count);

            } else {
                return findAmountWordsRecurcionMemoization(sentence, arrayWords, i++, j, wordsUniqueObj, count);
            }
        }
        else {

            if (i < sentence.length) {

                if (sentence[i] == sentence[j]) {
                    wordsUniqueObj[sentence[i]] = ++count;
                    return findAmountWordsRecurcionMemoization(sentence, arrayWords, i, ++j, wordsUniqueObj, count);
                } else {
                    j++;
                    return findAmountWordsRecurcionMemoization(sentence, arrayWords, i, j, wordsUniqueObj, count);
                }

            } else {
                return wordsUniqueObj;
            }
        }

    } else {
        let arrayWords = sentence.split(/[!@#$%^&*(){}?`~:;'",.0-9\s]/);
        return findAmountWordsRecurcionMemoization(sentence, arrayWords);
    }
});

//#6

const fibonacciRecurcionMemoization: Function = memoization((number: number, i?: number, arrNumbersFibonacci?: number[]): number[] => {
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
            return fibonacciRecurcionMemoization(number, ++i, arrNumbersFibonacci)
        } else {
            return arrNumbersFibonacci.slice(0, arrNumbersFibonacci.length-1);
        }
    }
});

//#8

const factorialCalculationRecurcionMemoization: Function = memoization((numeric: number, i?: number, factorialResult?: number): number => {
    i = i || 1;
    factorialResult = factorialResult || 1;
    if (i <= numeric) {
        if (numeric > 0) {
            factorialResult = factorialResult * i;
            return factorialCalculationRecurcionMemoization(numeric, ++i, factorialResult);
        } else if (numeric === 0) {
            return 1;
        }
    }
        return factorialResult;
});

//#9

const sumElementsMultipleTwoRecurcionMemoization: Function = memoization((arrayNumbers: number[], i?: number, sumMultipleTwo?: number): number => {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] % 2 == 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsMultipleTwoRecurcionMemoization(arrayNumbers, ++i, sumMultipleTwo);
    }
        return sumMultipleTwo;
});

const sumElementsMultipleThreeRecurcionMemoization: Function = memoization((arrayNumbers: number[], i?: number, sumMultipleTwo?: number): number => {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] % 3 == 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsMultipleThreeRecurcionMemoization(arrayNumbers, ++i, sumMultipleTwo);
    }
        return sumMultipleTwo;
});

const sumElementsOnlyPositiveRecurcionMemoization: Function = memoization((arrayNumbers: number[], i?: number, sumMultipleTwo?: number): number => {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] > 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsOnlyPositiveRecurcionMemoization(arrayNumbers, ++i, sumMultipleTwo);
    }
        return sumMultipleTwo;
});

const sumElementsOnlyUnevenRecurcionMemoization: Function = memoization((arrayNumbers: number[], i?: number, sumMultipleTwo?: number): number => {
    i = i || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] % 2 != 0) {
            sumMultipleTwo += arrayNumbers[i];
        }
        return sumElementsOnlyUnevenRecurcionMemoization(arrayNumbers, ++i, sumMultipleTwo);
    }
        return sumMultipleTwo;
});

//#10

const amountZeroElementsRecurcionMemoization: Function = memoization((arrayNumbers: number[], i?: number, amountZero?: number): number => {
    i = i || 0;
    amountZero = amountZero || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] == 0) {
            amountZero++;
        }
        return amountZeroElementsRecurcionMemoization(arrayNumbers, ++i, amountZero);
    }
    return amountZero;
});

const amountNegativeElementsRecurcionMemoization: Function = memoization((arrayNumbers: number[], i?: number, amountNegative?: number): number => {
    i = i || 0;
    amountNegative = amountNegative || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] < 0) {
            amountNegative++;
        }
        return amountNegativeElementsRecurcionMemoization(arrayNumbers, ++i, amountNegative);
    }
    return amountNegative;
});

const amountPositiveElementsRecurcionMemoization: Function = memoization((arrayNumbers: number[], i?: number, amountPositive?: number): number => {
    i = i || 0;
    amountPositive = amountPositive || 0;
    if (i < arrayNumbers.length) {

        if (arrayNumbers[i] > 0) {
            amountPositive++;
        }
        return amountPositiveElementsRecurcionMemoization(arrayNumbers, ++i, amountPositive);
    }
        return amountPositive;
});

const amountSimpleElementsRecurcionMemoization: Function = memoization((arrayNumbers: number[], i?: number, amountSimple?: number, countDenominator?: number): number => {
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
        return amountSimpleElementsRecurcionMemoization(arrayNumbers, ++i, amountSimple, countDenominator);
    }
        return amountSimple;
});

//#11

const decimalNumberConversToBinaryNumberRecurcionMemoization: Function = memoization((decimalNumber: number, arrayBinaryNumber?: number[], i?: number): number => {
    arrayBinaryNumber = arrayBinaryNumber || [];
    i = i || 0;
    let binaryNumber: string = '';
    if (decimalNumber > 0) {
        arrayBinaryNumber[i] = decimalNumber % 2;
        decimalNumber = Math.trunc(decimalNumber / 2);
        return decimalNumberConversToBinaryNumberRecurcionMemoization(decimalNumber, arrayBinaryNumber, ++i);
    } else {
        binaryNumber = arrayBinaryNumber.reverse().join('');
        return Number(binaryNumber);
    }
});

const binaryNumberConversToDecimalNumberRecurcionMemoization: Function = memoization((
    binaryNumber: number,
    arrayBinaryNumbers: string[],
    arrayDegree?: number[],
    i?: number,
    sumDegree?: number): number => {

    i = i || 0;
    sumDegree = sumDegree || 0;
    arrayDegree = arrayDegree || [];
    
    if (arrayBinaryNumbers !== undefined) {

        if (i < arrayBinaryNumbers.length) {

            if (Number(arrayBinaryNumbers[i]) === 1) {
                sumDegree += arrayDegree[i];
            }
            return binaryNumberConversToDecimalNumberRecurcionMemoization(binaryNumber, arrayBinaryNumbers, arrayDegree, ++i, sumDegree);

        } else {
            return sumDegree;
        }

    } else {
        let arrayBinaryNumbers = String(binaryNumber).split('').reverse();
        for (let j: number = 0; j < arrayBinaryNumbers.length; j++) {
            arrayDegree[j] = Math.pow(2, j);
        }
        return binaryNumberConversToDecimalNumberRecurcionMemoization(binaryNumber, arrayBinaryNumbers, arrayDegree);
    }
});

//#12

const sumElementsMatrixMultipleTwoRecurcionMemoization: Function = memoization((matrix: number[][], i?: number, j?: number, sumMultipleTwo?: number): number => {
    i = i || 0;
    j = j || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixMultipleTwoRecurcionMemoization(matrix, ++i, j, sumMultipleTwo);
        } else {
            if (matrix[i][j] % 2 == 0) {
                sumMultipleTwo += matrix[i][j];
            }
            return sumElementsMatrixMultipleTwoRecurcionMemoization(matrix, i, ++j, sumMultipleTwo);
        }
    }
        return sumMultipleTwo;
});

const sumElementsMatrixMultipleThreeRecurcionMemoization: Function = memoization((matrix: number[][], i?: number, j?: number, sumMultipleThree?: number): number => {
    i = i || 0;
    j = j || 0;
    sumMultipleThree = sumMultipleThree || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixMultipleThreeRecurcionMemoization(matrix, ++i, j, sumMultipleThree);
        } else {
            if (matrix[i][j] % 3 == 0) {
                sumMultipleThree += matrix[i][j];
            }
            return sumElementsMatrixMultipleThreeRecurcionMemoization(matrix, i, ++j, sumMultipleThree);
        }
    }
        return sumMultipleThree;
});

const sumElementsMatrixOnlyPositiveRecurcionMemoization: Function = memoization((matrix: number[][], i?: number, j?: number, sumPositive?: number): number => {
    i = i || 0;
    j = j || 0;
    sumPositive = sumPositive || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixOnlyPositiveRecurcionMemoization(matrix, ++i, j, sumPositive);
        } else {
            if (matrix[i][j] > 0) {
                sumPositive += matrix[i][j];
            }
            return sumElementsMatrixOnlyPositiveRecurcionMemoization(matrix, i, ++j, sumPositive);
        }
    }
        return sumPositive;
});

const sumElementsMatrixOnlyUnevenRecurcionMemoization: Function = memoization((matrix: number[][], i?: number, j?: number, sumUneven?: number): number => {
    i = i || 0;
    j = j || 0;
    sumUneven = sumUneven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixOnlyUnevenRecurcionMemoization(matrix, ++i, j, sumUneven);
        } else {
            if (matrix[i][j] % 2 != 0) {
                sumUneven += matrix[i][j];
            }
            return sumElementsMatrixOnlyUnevenRecurcionMemoization(matrix, i, ++j, sumUneven);
        }
    }
        return sumUneven;
});

const amountMatrixZeroElementsRecurcionMemoization: Function = memoization((matrix: number[][], i?: number, j?: number, amountZero?: number): number => {
    i = i || 0;
    j = j || 0;
    amountZero = amountZero || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixZeroElementsRecurcionMemoization(matrix, ++i, j, amountZero);
        } else {
            if (matrix[i][j] === 0) {
                amountZero++;
            }
            return amountMatrixZeroElementsRecurcionMemoization(matrix, i, ++j, amountZero);
        }
    }
        return amountZero;
});

const amountMatrixNegativeElementsRecurcionMemoization: Function = memoization((matrix: number[][], i?: number, j?: number, amountNegative?: number): number => {
    i = i || 0;
    j = j || 0;
    amountNegative = amountNegative || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixNegativeElementsRecurcionMemoization(matrix, ++i, j, amountNegative);
        } else {
            if (matrix[i][j] < 0) {
                amountNegative++;
            }
            return amountMatrixNegativeElementsRecurcionMemoization(matrix, i, ++j, amountNegative);
        }
    }
        return amountNegative;
});

const amountMatrixPositiveElementsRecurcionMemoization: Function = memoization((matrix: number[][], i?: number, j?: number, amountPositive?: number): number => {
    i = i || 0;
    j = j || 0;
    amountPositive = amountPositive || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixPositiveElementsRecurcionMemoization(matrix, ++i, j, amountPositive);
        } else {
            if (matrix[i][j] > 0) {
                amountPositive++;
            }
            return amountMatrixPositiveElementsRecurcionMemoization(matrix, i, ++j, amountPositive);
        }
    }
        return amountPositive;
});

const amountMatrixSimpleElementsRecurcionMemoization: Function = memoization((
    matrix: number[][], 
    i?: number, 
    j?: number, 
    amountSimple?: number, 
    countDenominator?: number): number => {

    i = i || 0;
    j = j || 0;
    amountSimple = amountSimple || 0;
    countDenominator = countDenominator || 0;

    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixSimpleElementsRecurcionMemoization(matrix, ++i, j, amountSimple, countDenominator);
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
            return amountMatrixSimpleElementsRecurcionMemoization(matrix, i, ++j, amountSimple, countDenominator);
        }
    }
        return amountSimple;
});

//№13

const sumRangeMinMaxRecurcionMemoization: Function = memoization((min: number, max: number, sumFromMinBeforeMax: number): number => {
    sumFromMinBeforeMax = sumFromMinBeforeMax || 0;
    if (min <= max) {
        sumFromMinBeforeMax += min;
        return sumRangeMinMaxRecurcionMemoization(++min, max, sumFromMinBeforeMax);
    }
        return sumFromMinBeforeMax;
});

const sumRangeMinMaxMultiplesThreeRecurcionMemoization: Function = memoization((min: number, max: number, sumMultiplesThree: number): number => {
    sumMultiplesThree = sumMultiplesThree || 0;
    if (min <= max) {
        if (min % 3 == 0) {
            sumMultiplesThree += min;
        }
        return sumRangeMinMaxMultiplesThreeRecurcionMemoization(++min, max, sumMultiplesThree);
    }
        return sumMultiplesThree;
});

const sumRangeMinMaxOnlyPositiveRecurcionMemoization: Function = memoization((min: number, max: number, sumOnlyPositiveElements: number): number => {
    sumOnlyPositiveElements = sumOnlyPositiveElements || 0;
    if (min <= max) {
        if (min > 0) {
            sumOnlyPositiveElements += min;
            return sumRangeMinMaxOnlyPositiveRecurcionMemoization(++min, max, sumOnlyPositiveElements);
        } else {
            return sumRangeMinMaxOnlyPositiveRecurcionMemoization(++min, max, sumOnlyPositiveElements);
        }
    }
        return sumOnlyPositiveElements;
});

//№14

const meanSingleArrayAllElemRecurcionMemoization: Function = memoization((arrElements: number[], i?: number, meanAllElem?: number, countAll?: number): number => {
    i = i || 0;
    meanAllElem = meanAllElem || 0;
    countAll = countAll || 0;

    if (i < arrElements.length) {
        meanAllElem += arrElements[i];
        countAll++;
        return meanSingleArrayAllElemRecurcionMemoization(arrElements, ++i, meanAllElem, countAll);
    }
        return meanAllElem / countAll;
});

const meanSingleArrayEvenElemRecurcionMemoization: Function = memoization((arrayElements: number[], i?: number, meanEvenElement?: number, countEven?: number): number => {
    i = i || 0;
    meanEvenElement = meanEvenElement || 0;
    countEven = countEven || 0;
    if (i < arrayElements.length) {
        if (arrayElements[i] % 2 == 0) {
            meanEvenElement += arrayElements[i];
            countEven++;
        }
        return meanSingleArrayEvenElemRecurcionMemoization(arrayElements, ++i, meanEvenElement, countEven);
    }
        return meanEvenElement / countEven;
});

const meanSingleArrayUnevenElemRecurcionMemoization: Function = memoization((arrElements: number[], i?: number, meanUnevenElem?: number, countUneven?: number): number => {
    i = i || 0;
    meanUnevenElem = meanUnevenElem || 0;
    countUneven = countUneven || 0;
    if (i < arrElements.length) {
        if (arrElements[i] % 2 != 0) {
            meanUnevenElem += arrElements[i];
            countUneven++;
        }
        return meanSingleArrayUnevenElemRecurcionMemoization(arrElements, ++i, meanUnevenElem, countUneven);
    }
        return meanUnevenElem / countUneven;
});

const meanDimensionalArrayAllElemRecurcionMemoization: Function = memoization((
    matrix: number[][], 
    i?: number, 
    j?: number, 
    meanAllElem?: number, 
    countAll?: number): number => {
    i = i || 0;
    j = j || 0;
    meanAllElem = meanAllElem || 0;
    countAll = countAll || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayAllElemRecurcionMemoization(matrix, ++i, j, meanAllElem, countAll);
        } else {
            meanAllElem += matrix[i][j];
            countAll++;
            return meanDimensionalArrayAllElemRecurcionMemoization(matrix, i, ++j, meanAllElem, countAll);
        }
    }
        return meanAllElem / countAll;
});

const meanDimensionalArrayEvenElemRecurcionMemoization: Function = memoization((
    matrix: number[][], 
    i?: number, 
    j?: number, 
    meanEvenElem?: number, 
    countEven?: number): number => {

    i = i || 0;
    j = j || 0;
    meanEvenElem = meanEvenElem || 0;
    countEven = countEven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayEvenElemRecurcionMemoization(matrix, ++i, j, meanEvenElem, countEven);
        } else {
            if (matrix[i][j] % 2 == 0) {
                meanEvenElem += matrix[i][j];
                countEven++;
            }
            return meanDimensionalArrayEvenElemRecurcionMemoization(matrix, i, ++j, meanEvenElem, countEven);
        }
    }
        return meanEvenElem / countEven;
});

const meanDimensionalArrayUnevenElemRecurcionMemoization: Function = memoization((
    matrix: number[][], 
    i?: number, 
    j?: number, 
    meanUnevenElem?: number, 
    countUneven?: number): number => {
    i = i || 0;
    j = j || 0;
    meanUnevenElem = meanUnevenElem || 0;
    countUneven = countUneven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayUnevenElemRecurcionMemoization(matrix, ++i, j, meanUnevenElem, countUneven);
        } else {
            if (matrix[i][j] % 2 != 0) {
                meanUnevenElem += matrix[i][j];
                countUneven++;
            }
            return meanDimensionalArrayUnevenElemRecurcionMemoization(matrix, i, ++j, meanUnevenElem, countUneven);
        }
    }
        return meanUnevenElem / countUneven;
});

//#15

const transpositionMatrixRecurcionMemoization: Function = memoization((
    array: number[][],
    newDimensionalArray: number[][],
    i?: number,
    j?: number,
    k?: number): number[][] => {
    i = i || 0;
    j = j || 0;
    k = k || 0;
    newDimensionalArray = newDimensionalArray || [];

    if (newDimensionalArray.length === array.length) {
        if (i < array.length) {
            if (j === array.length) {
                j = 0;
                return transpositionMatrixRecurcionMemoization(array, newDimensionalArray, ++i, j);
            } else {
                newDimensionalArray[j].push(array[i][j]);
                return transpositionMatrixRecurcionMemoization(array, newDimensionalArray, i, ++j);
            }
        }
    } else {
        if (i < array.length) {
            newDimensionalArray.push([]);
            return transpositionMatrixRecurcionMemoization(array, newDimensionalArray, i, j, ++k);
        }
    }
    return newDimensionalArray;
});

//#16

const sumTwoMatrixRecurcionMemoization: Function = memoization((matrixFirst: number[][], matrixSecond: number[][], i?: number, j?: number): number[][] => {
    i = i || 0;
    j = j || 0;

    if (i < matrixFirst.length) {
        if (j == matrixFirst.length) {
            j = 0;
            return sumTwoMatrixRecurcionMemoization(matrixFirst, matrixSecond, ++i, j);
        } else {
            matrixFirst[i][j] += matrixSecond[i][j];
            return sumTwoMatrixRecurcionMemoization(matrixFirst, matrixSecond, i, ++j);
        }
    }
        return matrixFirst;
});

//#17

const deleteLineWithZeroElementRecurcionMemoization: Function = memoization((matrix: number[][], i?: number): number[][] => {
    i = i || 0;

    if (i < matrix.length) {
        for (let j: number = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix.splice(i, 1);
                --i;
                break;
            }
        }
        return deleteLineWithZeroElementRecurcionMemoization(matrix, ++i);
    }

    return matrix;
});

const deleteColumnWithZeroElementRecurcionMemoization: Function = memoization((matrix: number[][], i?: number): number[][] => {
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
        return deleteColumnWithZeroElementRecurcionMemoization(matrix, ++i);
    }
    return matrix;
});


