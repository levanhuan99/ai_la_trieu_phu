


let questions=[
    new Question("Đâu là một loại hình chợ tạm tự phát thường xuất hiện trong các khu dân cư?",[ "A: Ếch", "B: Cóc","C: Thằn lằn", "D: Nhái"], "B: Cóc"),

    new Question("Đâu là tên một bãi biển ở Quảng Bình?",["A: Đá Lăn", "B: Đá Nhảy","C: Đá Chạy","D: Đá Bò"],"B: Đá Nhảy"),

    new Question("Đâu là tên một loại bánh Huế?",[" A: Khoái","B: Sướng","C: Thích","D: Vui"]," A: Khoái"),

    new Question("Nhà văn Kim Dung (Trung Quốc) nổi tiếng với thể loại văn học gì?",["A: Truyện trinh thám","B: Tiểu thuyết kiếm hiệp","C: Sử thi","D: Thơ lãng mạn"],"B: Tiểu thuyết kiếm hiệp"),

    new Question("Bộ phim Chị Dậu được chuyển thể từ tác phẩm văn học nào?",["A: Người mẹ cầm súng","B: Vợ chồng A Phủ","C: Tắt đèn"," D: Tuổi thơ dữ dội"],"C: Tắt đèn"),
];
let quiz=new Quiz(questions);

function showQuiz() {

    let element=document.getElementById("question");
    element.innerHTML=quiz.getQuestionIndex().text;
}


function showChoices() {

    let choices=quiz.getQuestionIndex().choices;
    for (let i=0;i < choices.length;i++){
        let element=document.getElementById("choice"+i);
        element.innerHTML=choices[i];
        guess("btn"+i,choices[i]);
    }
}
function guess(id,guess) {
    let button=document.getElementById(id);
    button.onclick=function () {
        quiz.guess(guess);
        showQuiz();
        showChoices();
        nextQuestion();
        showScore();
    }

}

function nextQuestion() {
    let currentQuestionNumber=quiz.questionIndex+1;
    let element=document.getElementById("progress");
    element.innerHTML="Question "+currentQuestionNumber+" of "+quiz.question.length;

}
function showScore() {
    if(quiz.isEnded()){
        let element=document.getElementById("point");
        let point=quiz.score;
        element.innerHTML=point;
    }


}


showQuiz();
showChoices();

