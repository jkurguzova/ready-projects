let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operator');
let decimalBtn = document.getElementById('decimal');
let clearBtns = document.querySelectorAll('.clear-btn');
let resultBtn = document.getElementById('result');
let display = document.getElementById('display');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';



for (i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function(e) {
        numberPress(e.target.textContent);
    });
};

for (i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e) {
        operation(e.target.textContent);
        console.log(e);
    });
};

for (i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e) {
        clear(e.srcElement.id);
    });
};

resultBtn.addEventListener('click', result);

decimalBtn.addEventListener('click', decimal);



function numberPress(number) {
    if (MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };

};


function operation(op) {
    let localOperationMemory = display.value;

    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === 'xy') {
            MemoryCurrentNumber = MemoryCurrentNumber**parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === 'sq') {
            MemoryCurrentNumber = (localOperationMemory**(1/2));
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        };
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    };
};

function decimal() {
    let localDecimalMemory = display.value;

    if (MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }
    };
    display.value = localDecimalMemory;
};

function clear(id) {
    if (id === 'ce') {
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c') {
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    }
};
/*
√ */
