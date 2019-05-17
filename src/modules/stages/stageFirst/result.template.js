export const Result1Template = model => {
let x = '';
for (let i in model.comments) {
	x += `<div class="comments__item">
		<p class="comments__name">${model.comments[i].name}</p>
		<p class="comments__comment">${model.comments[i].comment}</p>
		<p class="comments__date">${model.comments[i].date}</p>
	</div>`
}

let s = `<h2 class="result1__heading">Перший етап пройдено!</h2>
<p class="result1__text">Тепер ти знаєш, чому варто пишатися обраною спеціальністю, які технології зможеш занести у своє резюме, та яка професія найбільше пасуватиме тобі у такому різнобарвному світі професій в ІТ.</p>
<i class="fas fa-heart"></i><a href="" class="my-favorite__link">Додати етап до улюблених</a>
<h2 class="result1__result">Результат – ${model.result} бал</h2>
<input type="button" value="Далі" class="button" />
<section class="leave-comment">
	<h2 class="leave-comment__heading">Залишились питання?</h2>
	<textarea class="leave-comment__textarea" name="" id="" cols="60" rows="10"></textarea>
	<input type="submit" value="Відправити" class="button"/>
</section>
<section class="comments">
	${x}
</section>
`
return s
}