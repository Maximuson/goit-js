let sum = 0;

function calculate() {
    let response;
    do {
        response = prompt('Введите число');

        if (response != null) {
            sum += parseFloat(response);
        }
    } while (response != null);

    alert(sum.toLocaleString());
}
calculate();
