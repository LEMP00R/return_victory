let question = document.getElementsByClassName("FAQ__question")
let answer = document.getElementsByClassName('FAQ__answer')

for (let i = 0; i < question.length; i++) {
    question[i].onclick = function() {
        let setClasses = !this.classList.contains('active')
        setClass(question, 'active', 'remove')
        setClass(answer, 'show', 'remove')

        if (setClasses) {
            this.classList.toggle("active")
            this.nextElementSibling.classList.toggle("show")
        }
    }
}

function setClass(el, className, fnName) {
    for (let i = 0; i < el.length; i++) {
        el[i].classList[fnName](className)
    }
}