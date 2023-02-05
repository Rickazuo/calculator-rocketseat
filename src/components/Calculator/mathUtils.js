const mathOptions = (element, operation, nextElement) => {
    const zeroDivision = element === 0 || nextElement === 0;

    switch (true) {
        case operation === "+":
            return element + nextElement;
        case operation === "-":
            return element - nextElement;
        case operation === "%":
            return element % nextElement;
        case operation === "x":
            return element * nextElement;
        case operation === "/":
            if (zeroDivision) return 0;
            return element / nextElement;
    }
};

export const calculate = (operations) => {
    let resultArray = [...operations];
    let result;

    while (resultArray.length > 1) {
        result = mathOptions(resultArray[0], resultArray[1], resultArray[2]);
        resultArray.shift(); //removes from begin of the array
        resultArray.shift();
        resultArray.shift();
        resultArray.unshift(result); // add from begin of the array
    }

    return resultArray[0];
};

const removeLastOperationAndNumber = (operations) => {
    let operationsResult;

    if (operations.length <= 3) {
        operationsResult = operations[0];
    } else {
        const percentageOperations = [...operations];
        percentageOperations.pop();
        percentageOperations.pop();
        operationsResult = calculate(percentageOperations);
    }
    return operationsResult;
};

export const calculatePercentual = (operations, lastNumber) => {
    let operationsResult;
    operationsResult = removeLastOperationAndNumber(operations);

    const lastOperation = operations[operations.length - 2];

    //percentage is different for each group of operations
    if (lastOperation === "+" || lastOperation === "-") {
        const percentage = operationsResult * (lastNumber / 100);

        return mathOptions(
            percentage,
            operations[operations.length - 2],
            operationsResult
        );
    } else {
        return mathOptions(
            operationsResult,
            operations[operations.length - 2],
            lastNumber / 100
        );
    }
};

export const findHowManyDot = (string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ".") count++;
    }

    return count;
};

export const convertFloatToString = (string) => {
    const isFloat =
        typeof string === "number" &&
        Number(string) === string &&
        string % 1 !== 0;

    if (isFloat) return string.toFixed(2);
    else if (!string) return 0;
    else return string;
};
