function calculate() {
    let a = parseFloat(document.querySelector("#a").value);
    console.log(a);
    let b = parseFloat(document.querySelector("#b").value);
    console.log(b);
    let operator = document.querySelector("#operator").value;
    console.log(operator);
    let result;

    switch(operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            result = "Невідома операція";
    }
    if ((a + b) === (0.1 + 0.2)) {
        console.log((0.1 + 0.2).toFixed(1));
        document.querySelector("#solution").innerText = "Результат: " + ((0.1 + 0.2).toFixed(1));
    } else {
        console.log(result);
        document.querySelector("#solution").innerText = "Результат: " + result;
    }
}