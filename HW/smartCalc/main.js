class Calculator {
    constructor() {
        this.symbols = [];
    }

    static NUMBERS = '0123456789.';

    static OPERATIONS = {
        DIVIDE: '/',
        MULTIPLY: '*',
        ADD: '+',
        SUBTRACT: '-',
    };

    _getOperationByOperator(operator) {
        const { OPERATIONS } = Calculator;

        switch (operator) {
            case OPERATIONS.ADD:
                return this._add;
            case OPERATIONS.SUBTRACT:
                return this._subtract;
            case OPERATIONS.MULTIPLY:
                return this._multiply;
            case OPERATIONS.DIVIDE:
                return this._divide;
        }
    }

    _parseString(string) {
        let currentNum = '';
        const splittedString = string
            .split('')
            .filter(element => element !== ' ')
            .reduce((acc, element,i,arr) => {
                if (Calculator.NUMBERS.includes(element)) {
                  //проверка на последнее число
                  if(arr.length - 1 === i) {
                    currentNum += element;
                    let tempNum = +currentNum;
                    currentNum = '';
                    return [...acc, tempNum]
                  }

                    //добавляем цифру в строку с числом
                    currentNum += element;
                    return [...acc];
                } 
                
                // если текущий елемент не число то пушим число с временной строки в которой число
                else {
                    let tempNum = +currentNum;
                    currentNum = '';
                    return [...acc, tempNum, element];
                }
            }, []);
        console.log('splittedString from this._parseString()', splittedString);
        return splittedString;
    }

    tryCalculate(str) {
        this.symbols = this._parseString(str);

        this._countMultiplicationAndDivision();
        this._countSubtractionAndAddition();

        return this.symbols;
    }

    // 3 + 5 + (6 * 7) + (4 / 6)
    // 3 + 5 + 42 + 0.66667
    _countOperation(indexOperator, operator) {
        const operation = this._getOperationByOperator(operator);
        // take 2 symbols between operator and count this operation with them
        const result = operation(
            this.symbols[indexOperator - 1],
            this.symbols[indexOperator + 1],
        );
        this.symbols.splice(indexOperator - 1, 3, result);
    }

    _countMultiplicationAndDivision() {
        while (true) {
            const indexMultiply = this.symbols.indexOf(
                Calculator.OPERATIONS.MULTIPLY,
            );
            const indexDivide = this.symbols.indexOf(
                Calculator.OPERATIONS.DIVIDE,
            );

            if (indexMultiply > 0) {
                this._countOperation(
                    indexMultiply,
                    Calculator.OPERATIONS.MULTIPLY,
                );
            } else if (indexDivide > 0) {
                this._countOperation(indexDivide, Calculator.OPERATIONS.DIVIDE);
            } else {
                break;
            }
        }
    }

    _countSubtractionAndAddition() {
        while (true) {
            const indexAdd = this.symbols.indexOf(Calculator.OPERATIONS.ADD);
            const indexSubtract = this.symbols.indexOf(
                Calculator.OPERATIONS.SUBTRACT,
            );

            if (indexAdd > 0) {
                this._countOperation(indexAdd, Calculator.OPERATIONS.ADD);
            } else if (indexSubtract > 0) {
                this._countOperation(
                    indexSubtract,
                    Calculator.OPERATIONS.SUBTRACT,
                );
            } else {
                break;
            }
        }
    }

    _add(a, b) {
        return a + b;
    }
    _subtract(a, b) {
        return a - b;
    }
    _multiply(a, b) {
        return a * b;
    }
    _divide(a, b) {
        return a / b;
    }
}

const calculator = new Calculator();
console.log(
    calculator.tryCalculate(
        ' 2.1 * 2.2',
    ),
);
