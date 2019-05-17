export const ChooseProfessionTemplate = model => `
	<h2 class="choose-profession__heading">Вибір професії</h2>
	<p class="choose-profession__text">Що ж, ти вже знаєш, які технології зможеш занести у своє резюме. Однак лишається не менш важливе питання – так яку ж професію обрати?</p>
	<p class="choose-profession__text">Існує стереотип, що всі, хто в ІТ – програмісти. Проте це не так. Ця галузь об’єднує десятки найрізноманітніших професій, серед яких точно можна знайти роботу по душі. Перш ніж дізнатися більше про професію, пропонуємо тобі гру. Наша підсвідомість часто може підказати правильний вибір, тому пропонуємо довіритися собі повністю. </p>
	<p class="choose-profession__text">Уважно подивись на картинку та обери один предмет, що першим тобі кинувся в очі.</p>
	<div class="choose-profession__scroll-down">
		<picture class="mouse">
				  <img src="../static/icons/mouse.svg" alt="mouse" />
		</picture>
		<span>Обрати предмет, який запримітив першим</span>
	</div>
	<img src="../static/images/choose-profession.svg" class="choose-profession__img" alt="Choose profession" />
	<div class="container-for-popup">
		<section class="popup">
			<h2 class="popup__heading">Ми пропонуємо тобі професію
				<span class="popup__faculty">${model.result}</span>
			</h2>
			<p class="popup__text">${model.description}</p>
			<p>Якщо тобі по душі інша професія, ти можеш вибрати її зі списку нижче:</p>
			<select name="profession" class="popup__professions">
				<option>Backend</option>
				<option>QA</option>
				<option>Project manager</option>
				<option>Frontend</option>
			</select>
			<div class="popup__submit">
				<input type="submit" value="Далі" class="button"/>
			</div>
		</section>
	</div>
`