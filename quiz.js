function checkAnswers() {
    var correctAnswers = {
        q1: "Paris",
      
    };

    var form = document.getElementById('quizForm');
    var score = 0;

    for (var question in correctAnswers) {
        var answer = form.elements[question].value;
        if (answer === correctAnswers[question]) {
            score++;
        }
    }

    var result = document.getElementById('result');
    result.textContent = "You scored " + score + " out of " + Object.keys(correctAnswers).length;
}
