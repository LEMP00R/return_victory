document.addEventListener("DOMContentLoaded", function(event) { 


var q = document.getElementsByClassName("faq__question");
var ans = document.getElementsByClassName('faq__answer');
console.log(q.length)
for (var i = 0; i < q.length; i++) {
    q[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(q, 'active', 'remove');
        setClass(ans, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

});