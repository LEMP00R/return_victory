export const ResultTemplate = model => `
	<h2 class="result__heading">Найкраша спеціальність для тебе - 
		<span class="result__faculty">${model.result}</span>
	</h2>
	<p class="result__text">${model.description}</p>
	<select name="profession" class="result__professions">
		<option>Backend</option>
		<option>QA</option>
		<option>Project manager</option>
		<option>Frontend</option>
	</select>
	<div class="result__submit">
		<input type="submit" value="Далі" id="result-next-btn" class="button"/>
	</div>
`