let q = document.getElementsByClassName("FAQ__question")
let ans = document.getElementsByClassName('FAQ__answer')

for (let i = 0; i < q.length; i++) {
    q[i].onclick = function() {
        let setClasses = !this.classList.contains('active')
        setClass(q, 'active', 'remove')
        setClass(ans, 'show', 'remove')

        if (setClasses) {
            this.classList.toggle("active")
            this.nextElementSibling.classList.toggle("show")
        }
    }
}

function setClass(els, className, fnName) {
    for (let i = 0; i < els.length; i++) {
        els[i].classList[fnName](className)
    }
}