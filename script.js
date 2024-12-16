let currentNumber = '';
let previousNumber = '';
let operator = null;

// Função para adicionar números ao display
function appendNumber(number) {
    const display = document.getElementById('display');
    if (currentNumber.length < 10) { // Limita o tamanho do número
        currentNumber += number;
        display.value = currentNumber;
    }
}

// Função para adicionar o operador
function setOperator(op) {
    if (currentNumber === '' && operator === null) return; // Evita múltiplos operadores
    if (previousNumber === '') {
        previousNumber = currentNumber;
        currentNumber = '';
    }
    operator = op;
    document.getElementById('display').value = '';
}

// Função para calcular
function calculate() {
    if (currentNumber === '' || operator === null) return; // Verifica se há operação válida
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 === 0 ? 'Erro' : num1 / num2; // Evita divisão por zero
            break;
        default:
            return;
    }

    document.getElementById('display').value = result.toFixed(2);
    currentNumber = result.toString();
    previousNumber = '';
    operator = null;
}

// Função para limpar o display
function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    document.getElementById('display').value = '';
}

// Função para adicionar ponto decimal
function appendDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        document.getElementById('display').value = currentNumber;
    }
}
 