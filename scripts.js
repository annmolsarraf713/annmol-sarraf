function checkAnswer() {
    const options = document.getElementsByName('option');
    let selectedOption;
    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    const result = document.getElementById('result');
    if (selectedOption === 'C') {
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Wrong answer. Try again!';
        result.style.color = 'red';
    }
}
