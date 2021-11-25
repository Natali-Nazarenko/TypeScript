function verifyAnagramsRecurcion(string1, string2, wordArray1, wordArray2, i) {
    i = i || 0;
    if (i < string1.length) {
        if (wordArray1 !== undefined && wordArray2 !== undefined) {
            if (string1[i] === string2[i]) {
                return verifyAnagramsRecurcion(string1, string2, wordArray1, wordArray2, ++i);
            }
            return false;
        }
        else {
            if (string1.length === string2.length) {
                let wordArray1 = string1.split('').sort();
                let wordArray2 = string2.split('').sort();
                return verifyAnagramsRecurcion(string1, string2, wordArray1, wordArray2);
            }
            return false;
        }
    }
    return true;
}
function countingNumbersRecurcion(data, dataArray, i, j, objAmountNumbers, count) {
    i = i || 0;
    j = j || 0;
    objAmountNumbers = objAmountNumbers || {};
    count = count || 0;
    if (dataArray !== undefined) {
        if (j === dataArray.length) {
            i++;
            if (objAmountNumbers[dataArray[i]] === undefined) {
                j = 0;
                count = 0;
                return countingNumbersRecurcion(data, dataArray, i, j, objAmountNumbers, count);
            }
            else {
                return countingNumbersRecurcion(data, dataArray, ++i, j, objAmountNumbers, count);
            }
        }
        else {
            if (i < dataArray.length) {
                if (dataArray[i] === dataArray[j]) {
                    objAmountNumbers[dataArray[i]] = ++count;
                    return countingNumbersRecurcion(data, dataArray, i, ++j, objAmountNumbers, count);
                }
                else {
                    j++;
                    return countingNumbersRecurcion(data, dataArray, i, j, objAmountNumbers, count);
                }
            }
            else {
                return objAmountNumbers;
            }
        }
    }
    else {
        let dataArray = data.toString().split('');
        return countingNumbersRecurcion(data, dataArray);
    }
}
function findUniqueWordsRecurcion(sentence, arrayWords, i, j, uniqueCount, count) {
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
        }
        else if (i < sentence.length) {
            if (sentence[i] == sentence[j]) {
                return findUniqueWordsRecurcion(sentence, arrayWords, i, ++j, uniqueCount, ++count);
            }
            else {
                return findUniqueWordsRecurcion(sentence, arrayWords, i, ++j, uniqueCount, count);
            }
        }
        else {
            return uniqueCount;
        }
    }
    else {
        let arrayWords = sentence.split(/[!@#$%^&*(){}?`~:;'",.0-9\s]/);
        return findUniqueWordsRecurcion(sentence, arrayWords);
    }
}
function findAmountWordsRecurcion(sentence, arrayWords, i, j, wordsUniqueObj, count) {
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
            }
            else {
                return findAmountWordsRecurcion(sentence, arrayWords, i++, j, wordsUniqueObj, count);
            }
        }
        else {
            if (i < sentence.length) {
                if (sentence[i] == sentence[j]) {
                    wordsUniqueObj[sentence[i]] = ++count;
                    return findAmountWordsRecurcion(sentence, arrayWords, i, ++j, wordsUniqueObj, count);
                }
                else {
                    j++;
                    return findAmountWordsRecurcion(sentence, arrayWords, i, j, wordsUniqueObj, count);
                }
            }
            else {
                return wordsUniqueObj;
            }
        }
    }
    else {
        let arrayWords = sentence.split(/[!@#$%^&*(){}?`~:;'",.0-9\s]/);
        return findAmountWordsRecurcion(sentence, arrayWords);
    }
}
function fibonacciRecurcion(number, i, arrNumbersFibonacci) {
    i = i || 2;
    arrNumbersFibonacci = arrNumbersFibonacci || [0];
    if (number === 0) {
        return arrNumbersFibonacci;
    }
    else if (number === 1) {
        arrNumbersFibonacci.push(number);
        return arrNumbersFibonacci;
    }
    else {
        if (i < number) {
            arrNumbersFibonacci[i] = arrNumbersFibonacci[i - 2] + arrNumbersFibonacci[i - 1];
            return fibonacciRecurcion(number, ++i, arrNumbersFibonacci);
        }
        else {
            return arrNumbersFibonacci.slice(0, arrNumbersFibonacci.length - 1);
        }
    }
}
function factorialCalculationRecurcion(numeric, i, factorialResult) {
    i = i || 1;
    factorialResult = factorialResult || 1;
    if (i <= numeric) {
        if (numeric > 0) {
            factorialResult = factorialResult * i;
            return factorialCalculationRecurcion(numeric, ++i, factorialResult);
        }
        else if (numeric === 0) {
            return 1;
        }
    }
    return factorialResult;
}
function sumElementsMultipleTwoRecurcion(arrayNumbers, i, sumMultipleTwo) {
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
function sumElementsMultipleThreeRecurcion(arrayNumbers, i, sumMultipleTwo) {
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
function sumElementsOnlyPositiveRecurcion(arrayNumbers, i, sumMultipleTwo) {
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
function sumElementsOnlyUnevenRecurcion(arrayNumbers, i, sumMultipleTwo) {
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
function amountZeroElementsRecurcion(arrayNumbers, i, amountZero) {
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
function amountNegativeElementsRecurcion(arrayNumbers, i, amountNegative) {
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
function amountPositiveElementsRecurcion(arrayNumbers, i, amountPositive) {
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
function amountSimpleElementsRecurcion(arrayNumbers, i, amountSimple, countDenominator) {
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
function decimalNumberConversToBinaryNumberRecurcion(decimalNumber, arrayBinaryNumber, i) {
    arrayBinaryNumber = arrayBinaryNumber || [];
    i = i || 0;
    let binaryNumber = '';
    if (decimalNumber > 0) {
        arrayBinaryNumber[i] = decimalNumber % 2;
        decimalNumber = Math.trunc(decimalNumber / 2);
        return decimalNumberConversToBinaryNumberRecurcion(decimalNumber, arrayBinaryNumber, ++i);
    }
    else {
        binaryNumber = arrayBinaryNumber.reverse().join('');
        return Number(binaryNumber);
    }
}
function binaryNumberConversToDecimalNumberRecurcion(binaryNumber, arrayBinaryNumbers, arrayDegree, i, sumDegree) {
    i = i || 0;
    sumDegree = sumDegree || 0;
    arrayDegree = arrayDegree || [];
    if (arrayBinaryNumbers !== undefined) {
        if (i < arrayBinaryNumbers.length) {
            if (Number(arrayBinaryNumbers[i]) === 1) {
                sumDegree += arrayDegree[i];
            }
            return binaryNumberConversToDecimalNumberRecurcion(binaryNumber, arrayBinaryNumbers, arrayDegree, ++i, sumDegree);
        }
        else {
            return sumDegree;
        }
    }
    else {
        let arrayBinaryNumbers = String(binaryNumber).split('').reverse();
        for (let j = 0; j < arrayBinaryNumbers.length; j++) {
            arrayDegree[j] = Math.pow(2, j);
        }
        return binaryNumberConversToDecimalNumberRecurcion(binaryNumber, arrayBinaryNumbers, arrayDegree);
    }
}
function sumElementsMatrixMultipleTwoRecurcion(matrix, i, j, sumMultipleTwo) {
    i = i || 0;
    j = j || 0;
    sumMultipleTwo = sumMultipleTwo || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixMultipleTwoRecurcion(matrix, ++i, j, sumMultipleTwo);
        }
        else {
            if (matrix[i][j] % 2 == 0) {
                sumMultipleTwo += matrix[i][j];
            }
            return sumElementsMatrixMultipleTwoRecurcion(matrix, i, ++j, sumMultipleTwo);
        }
    }
    return sumMultipleTwo;
}
function sumElementsMatrixMultipleThreeRecurcion(matrix, i, j, sumMultipleThree) {
    i = i || 0;
    j = j || 0;
    sumMultipleThree = sumMultipleThree || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixMultipleThreeRecurcion(matrix, ++i, j, sumMultipleThree);
        }
        else {
            if (matrix[i][j] % 3 == 0) {
                sumMultipleThree += matrix[i][j];
            }
            return sumElementsMatrixMultipleThreeRecurcion(matrix, i, ++j, sumMultipleThree);
        }
    }
    return sumMultipleThree;
}
function sumElementsMatrixOnlyPositiveRecurcion(matrix, i, j, sumPositive) {
    i = i || 0;
    j = j || 0;
    sumPositive = sumPositive || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixOnlyPositiveRecurcion(matrix, ++i, j, sumPositive);
        }
        else {
            if (matrix[i][j] > 0) {
                sumPositive += matrix[i][j];
            }
            return sumElementsMatrixOnlyPositiveRecurcion(matrix, i, ++j, sumPositive);
        }
    }
    return sumPositive;
}
function sumElementsMatrixOnlyUnevenRecurcion(matrix, i, j, sumUneven) {
    i = i || 0;
    j = j || 0;
    sumUneven = sumUneven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return sumElementsMatrixOnlyUnevenRecurcion(matrix, ++i, j, sumUneven);
        }
        else {
            if (matrix[i][j] % 2 != 0) {
                sumUneven += matrix[i][j];
            }
            return sumElementsMatrixOnlyUnevenRecurcion(matrix, i, ++j, sumUneven);
        }
    }
    return sumUneven;
}
function amountMatrixZeroElementsRecurcion(matrix, i, j, amountZero) {
    i = i || 0;
    j = j || 0;
    amountZero = amountZero || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixZeroElementsRecurcion(matrix, ++i, j, amountZero);
        }
        else {
            if (matrix[i][j] === 0) {
                amountZero++;
            }
            return amountMatrixZeroElementsRecurcion(matrix, i, ++j, amountZero);
        }
    }
    return amountZero;
}
function amountMatrixNegativeElementsRecurcion(matrix, i, j, amountNegative) {
    i = i || 0;
    j = j || 0;
    amountNegative = amountNegative || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixNegativeElementsRecurcion(matrix, ++i, j, amountNegative);
        }
        else {
            if (matrix[i][j] < 0) {
                amountNegative++;
            }
            return amountMatrixNegativeElementsRecurcion(matrix, i, ++j, amountNegative);
        }
    }
    return amountNegative;
}
function amountMatrixPositiveElementsRecurcion(matrix, i, j, amountPositive) {
    i = i || 0;
    j = j || 0;
    amountPositive = amountPositive || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixPositiveElementsRecurcion(matrix, ++i, j, amountPositive);
        }
        else {
            if (matrix[i][j] > 0) {
                amountPositive++;
            }
            return amountMatrixPositiveElementsRecurcion(matrix, i, ++j, amountPositive);
        }
    }
    return amountPositive;
}
function amountMatrixSimpleElementsRecurcion(matrix, i, j, amountSimple, countDenominator) {
    i = i || 0;
    j = j || 0;
    amountSimple = amountSimple || 0;
    countDenominator = countDenominator || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return amountMatrixSimpleElementsRecurcion(matrix, ++i, j, amountSimple, countDenominator);
        }
        else {
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
function sumRangeMinMaxRecurcion(min, max, sumFromMinBeforeMax) {
    sumFromMinBeforeMax = sumFromMinBeforeMax || 0;
    if (min <= max) {
        sumFromMinBeforeMax += min;
        return sumRangeMinMaxRecurcion(++min, max, sumFromMinBeforeMax);
    }
    return sumFromMinBeforeMax;
}
function sumRangeMinMaxMultiplesThreeRecurcion(min, max, sumMultiplesThree) {
    sumMultiplesThree = sumMultiplesThree || 0;
    if (min <= max) {
        if (min % 3 == 0) {
            sumMultiplesThree += min;
        }
        return sumRangeMinMaxMultiplesThreeRecurcion(++min, max, sumMultiplesThree);
    }
    return sumMultiplesThree;
}
function sumRangeMinMaxOnlyPositiveRecurcion(min, max, sumOnlyPositiveElements) {
    sumOnlyPositiveElements = sumOnlyPositiveElements || 0;
    if (min <= max) {
        if (min > 0) {
            sumOnlyPositiveElements += min;
            return sumRangeMinMaxOnlyPositiveRecurcion(++min, max, sumOnlyPositiveElements);
        }
        else {
            return sumRangeMinMaxOnlyPositiveRecurcion(++min, max, sumOnlyPositiveElements);
        }
    }
    return sumOnlyPositiveElements;
}
function meanSingleArrayAllElemRecurcion(arrElements, i, meanAllElem, countAll) {
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
function meanSingleArrayEvenElemRecurcion(arrayElements, i, meanEvenElement, countEven) {
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
function meanSingleArrayUnevenElemRecurcion(arrElements, i, meanUnevenElem, countUneven) {
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
function meanDimensionalArrayAllElemRecurcion(matrix, i, j, meanAllElem, countAll) {
    i = i || 0;
    j = j || 0;
    meanAllElem = meanAllElem || 0;
    countAll = countAll || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayAllElemRecurcion(matrix, ++i, j, meanAllElem, countAll);
        }
        else {
            meanAllElem += matrix[i][j];
            countAll++;
            return meanDimensionalArrayAllElemRecurcion(matrix, i, ++j, meanAllElem, countAll);
        }
    }
    return meanAllElem / countAll;
}
function meanDimensionalArrayEvenElemRecurcion(matrix, i, j, meanEvenElem, countEven) {
    i = i || 0;
    j = j || 0;
    meanEvenElem = meanEvenElem || 0;
    countEven = countEven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayEvenElemRecurcion(matrix, ++i, j, meanEvenElem, countEven);
        }
        else {
            if (matrix[i][j] % 2 == 0) {
                meanEvenElem += matrix[i][j];
                countEven++;
            }
            return meanDimensionalArrayEvenElemRecurcion(matrix, i, ++j, meanEvenElem, countEven);
        }
    }
    return meanEvenElem / countEven;
}
function meanDimensionalArrayUnevenElemRecurcion(matrix, i, j, meanUnevenElem, countUneven) {
    i = i || 0;
    j = j || 0;
    meanUnevenElem = meanUnevenElem || 0;
    countUneven = countUneven || 0;
    if (i < matrix.length) {
        if (j == matrix.length) {
            j = 0;
            return meanDimensionalArrayUnevenElemRecurcion(matrix, ++i, j, meanUnevenElem, countUneven);
        }
        else {
            if (matrix[i][j] % 2 != 0) {
                meanUnevenElem += matrix[i][j];
                countUneven++;
            }
            return meanDimensionalArrayUnevenElemRecurcion(matrix, i, ++j, meanUnevenElem, countUneven);
        }
    }
    return meanUnevenElem / countUneven;
}
function transpositionMatrixRecurcion(array, newDimensionalArray, i, j, k) {
    i = i || 0;
    j = j || 0;
    k = k || 0;
    newDimensionalArray = newDimensionalArray || [];
    if (newDimensionalArray.length === array.length) {
        if (i < array.length) {
            if (j === array.length) {
                j = 0;
                return transpositionMatrixRecurcion(array, newDimensionalArray, ++i, j);
            }
            else {
                newDimensionalArray[j].push(array[i][j]);
                return transpositionMatrixRecurcion(array, newDimensionalArray, i, ++j);
            }
        }
    }
    else {
        if (i < array.length) {
            newDimensionalArray.push([]);
            return transpositionMatrixRecurcion(array, newDimensionalArray, i, j, ++k);
        }
    }
    return newDimensionalArray;
}
function sumTwoMatrixRecurcion(matrixFirst, matrixSecond, i, j) {
    i = i || 0;
    j = j || 0;
    if (i < matrixFirst.length) {
        if (j == matrixFirst.length) {
            j = 0;
            return sumTwoMatrixRecurcion(matrixFirst, matrixSecond, ++i, j);
        }
        else {
            matrixFirst[i][j] += matrixSecond[i][j];
            return sumTwoMatrixRecurcion(matrixFirst, matrixSecond, i, ++j);
        }
    }
    return matrixFirst;
}
function deleteLineWithZeroElementRecurcion(matrix, i) {
    i = i || 0;
    if (i < matrix.length) {
        for (let j = 0; j < matrix[0].length; j++) {
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
function deleteColumnWithZeroElementRecurcion(matrix, i) {
    i = i || 0;
    if (i < matrix.length) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[j][i] === 0) {
                for (let k = 0; k < matrix.length; k++) {
                    matrix[k].splice(i, 1);
                }
                break;
            }
        }
        return deleteColumnWithZeroElementRecurcion(matrix, ++i);
    }
    return matrix;
}
//# sourceMappingURL=recursion.js.map