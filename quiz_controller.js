let Quiz=function (question) {
    this.score=0;
    this.question=question;
    this.questionIndex=0;

    this.getQuestionIndex=function () {

        return this.question[this.questionIndex];
    }

    this.isEnded=function () {
        return this.score;
    }

    this.guess=function (answer) {
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }
        this.questionIndex++;
    }



}