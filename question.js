let Question=function (text,choices,answer) {
    this.text=text;
    this.choices=choices;
    this.answer=answer;

    this.correctAnswer=function () {
        return this.answer;
    }
}