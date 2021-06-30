let qidx = 0
let myQuiz = $('#quiz')
let idx
let point = 0
let userAnswer = []
const updateList = (idx) => {
    $.get("http://localhost:3000/quizgame" + idx, function(data, status) {
        qlist = data
        nextq(data);

    });
}

$('#next').click(() => {
    let answer = $('input[class="cb"]:checked').val()
    userAnswer.push(answer);
    console.log('userAnswer :>> ', userAnswer);
    if (answer === qlist[qidx - 1].correctAnswer) {
        point++;

    }
    console.log('point :>> ', point);
})

function nextq() {

    myQuiz.html('')
    myQuiz.append(`
    <li> 
    <div>Question ${qlist[qidx].id}: ${qlist[qidx].question}</div>
    <div><label><input type="radio" class='cb' name="group${qlist[qidx].id}" value="a" checked><span>A: ${qlist[qidx].answers.a}</span></label></div>
    <div><label><input type="radio" class='cb' name="group${qlist[qidx].id}" value="b"><span>B: ${qlist[qidx].answers.b}</span></label></div>
    <div><label><input type="radio" class='cb' name="group${qlist[qidx].id}" value="c"><span>C: ${qlist[qidx].answers.c}</span></label></div>
    </li>
    `)
    $('#level').hide()

    qidx++;
    if (qidx === 10) {
        $('#submit').show()
        $('#next').hide()
    }
}

$('#submit').click(() => {
    let answer = $('input[class="cb"]:checked').val()
    userAnswer.push(answer);

    if (answer === qlist[qidx - 1].correctAnswer) {
        point++;
    }
    clearInterval(counterTime)
    myQuiz.html('')
    myQuiz.hide()
    $('#submit').hide()
    $('#timer').hide()
    alert(`You got ${point} points`)
    $('#checkAnswer').show()
})

let timer = 60
let isStart = false
let counterTime

$('#play-game').click(() => {
    isStart = true
    var level = $('input[name="pack"]:checked').val()

    if (level === "easy") {
        updateList(1)
    } else if (level === "normal") {
        updateList(2)
    } else {
        updateList(3)
    }

    $('#timer').append(timer)
    counterTime = setInterval(() => {
        timer--
        $('#timer').text(timer)

        if (!timer) {
            isStart = false
            timer = 60
            clearInterval(counterTime)
            alert('you lose')
            $('#timer').hide()

        }
    }, 1000);
    $('#play-game').hide()
    $('#next').show()
})

// const checkAnswer = (qidx) => {
//     let answer = $('input[class="cb"]:checked').val()
//     if (answer === qlist[qidx].correctAnswer) {
//         point++;
//         console.log('point :>> ', point);
//     }
// }

function forEach(arr, f) {
    for (let i = 0; i < arr.length; ++i) {
        f(arr[i]);
    }
}

$('#next').click(() => {
    nextq()
})
const runAll = () => {

    myQuiz.show()
    for (let i = 0; i < qlist.length; ++i) {
        let question = qlist[i];
        let answer = userAnswer[i];
        myQuiz.append(`
            <li> 
            <div>Question ${question.id}: ${question.question}</div>
            <div><input type="radio" class='cb' name="group${question.id}"><span>A: ${question.answers.a}</span></div>
            <div><input type="radio" class='cb' name="group${question.id}"><span>B: ${question.answers.b}</span></div>
            <div><input type="radio" class='cb' name="group${question.id}"><span>C: ${question.answers.c}</span></div>
            <div> Your answer is: ` + answer + `</div>
            <div class="correct" > Correct answer is: ${question.correctAnswer} </div>
            </li>
            `)
    }

}



$('#checkAnswer').click(() => {
    runAll()
    $('#checkAnswer').hide()
})