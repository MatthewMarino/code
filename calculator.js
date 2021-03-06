var currentInput = "0";
var memory = "0";
var operator = 0;

// Helper function for displaying the current input
function inputlimit()
    {
    if (inputlength > 11)
        {
        return "Error"
        }
    else
        {
        displayCurrentInput();
        }
    }

function displayCurrentInput()
    {
    document.getElementById('screen').value = currentInput;
    }

// Adds a digit to the current input
function addDigit(dig)
    {
    if (currentInput.length < 10)
        {
        if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1))
            {
            currentInput = dig;
            }
        else
            {
            currentInput = currentInput + dig;
            }
        }
    displayCurrentInput();
    }

// Adds a decimal to the current input
function addDecimal()
    {
    if (currentInput.length == 0)
        {
        //no leading ".", use "0."
        currentInput = "0.";
        }
    else
        {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1)
            {
            currentInput = currentInput + ".";
            }
        }
    displayCurrentInput();
    }

// Clears everything.
function allClear()
    {
    currentInput = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
    }

// Stores the last operator pushed for multiply, divide, add, or subtract.
function storeOperator(op)
    {
    if (op.indexOf("*") > -1)
        {
        operator = 1;
        }; //codes for
    if (op.indexOf("/") > -1)
        {
        operator = 2;
        }; // slash (divide)
    if (op.indexOf("+") > -1)
        {
        operator = 3;
        }; // sum
    if (op.indexOf("-") > -1)
        {
        operator = 4;
        }; // difference
    if (op.indexOf("^") > -1)
        {
        operator = 5;
        }; // exponents
    memory = currentInput; //store value
    currentInput = "0";
    displayCurrentInput();
    }

// Calculate using operator, the memory and what is current
function calculate()
    {
    if (operator == 1)
        {
        currentInput = eval(memory) * eval(currentInput);
        };
    if (operator == 2)
        {
        currentInput = eval(memory) / eval(currentInput);
        var initialvalue = currentInput.toString();
        if (initialvalue == "Infinity")
            {
            currentInput = "ERROR"
            };
        };
    if (operator == 3)
        {
        currentInput = eval(memory) + eval(currentInput);
        };
    if (operator == 4)
        {
        currentInput = eval(memory) - eval(currentInput);
        };
    if (operator == 5)
        {
        currentInput = Math.pow(eval(memory), eval(currentInput));
        };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
    }

// Change the sign of the current input
function changeSign()
    {
    currentInput = currentInput * 1
    displayCurrentInput();
    }

// Clear the current input back to 0
function clearcurrent()
    {
    currentInput = "0";
    displayCurrentInput();
    }

// Change the current input to a percentage
function percentage()
    {
    currentInput = currentInput / 100
    displayCurrentInput();
    }

// Calculate the factorial of the current input
function factorial(num)
    {
    for (var i = currentInput - 1; i >= 1; i--)
        {
        currentInput *= i;
        }
    displayCurrentInput();
    }

// Calculate the square of the current input
function square()
    {
    currentInput = currentInput * currentInput
    displayCurrentInput();
    }

// Calculate the square root of the current input
function squareRoot()
    {
    currentInput = Math.sqrt(currentInput);
    displayCurrentInput();
    }

// Calculate the inverse of the current input
function inverse()
    {
    currentInput = 1 / currentInput
    displayCurrentInput();
    }
