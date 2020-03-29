let Quiz=function (question) {
    this.score=0;
    this.question=question;
    this.questionIndex=0;

    this.getQuestionIndex=function () {                  //lấy số thứ tự câu hỏi trả về số thứ tự

        return this.question[this.questionIndex];
    }


    this.guess=function (answer) {                           //nếu
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }
        this.questionIndex++;
    }



}