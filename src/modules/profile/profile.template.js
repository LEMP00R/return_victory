export const ProfileTemplate = `
    <section class="edit-profile">
        <h2 class="edit-profile__heading"> Вітаємо, Іван Іванович </h2>
		<form id="edit-profile-form" class="edit-profile__form">
	    	<div class="edit-profile__item">
		        <label for="edit-profile-birth">дата народження:</label>
		        <input type="text" id="edit-profile-birth" placeholder="05/02/1997" />
		    </div>
		    <div class="edit-profile__item">
		        <label for="edit-profile-email">електронна пошта:</label>
		        <input type="email" 
		        	   id="edit-profile-email" 
		        	   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
		        	   placeholder="chmu@gmail.com" />
		    </div>
		    <div class="edit-profile__item">
		    	<label>обрана спеціальність:</label>
		        <select class="edit-profile__specialty">
				  <option>Інженерія програмного забезпечення</option>
				</select>
		    </div>
		    <div class="edit-profile__item">
		        <input  type="submit" 
		        		id="edit-profile-btn-save" 
		        		class="button"
		        		value="Зберегти зміни" />
		    </div>
		</form>
		<div id="quest-progress" class="edit-profile__quest-progress">
			<span>пройдено</span>
		</div>
    </section>
    <section class="CV">
	    <p class="CV__text">Після проходження квесту, ви маєте змогу завантажити резюме, згенероване на підставі отриманих під час гри, "Моя майбутня професія", даних.</p>
	    <div class="CV__submit">
		    <input type="submit" value="Завантажити резюме" id="download-CV" class="button"/>
		</div>
	</section>
	<section class="ask-question">
	    <h2 class="ask-question__heading">Маєте питання?</h2>
	    <p class="ask-question__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus corporis repellendus natus, ut deserunt rerum omnis, veritatis cum, sit, possimus totam nam expedita eaque sed quia inventore similique aspernatur explicabo.</p>
	    <textarea class="ask-question__textarea" name="" id="" cols="60" rows="10"></textarea>
	    <div class="ask-question__submit">
		    <input type="submit" value="Відправити" id="help-send-msg" class="button"/>
		</div>
	</section>
	<section class="my-favorite">
	    <h2>Вподобані рівні та лекції</h2>
	    <a href="" class="my-favorite__link">Лекція. Механізми інтерфейсів в Java</a>
	    <a href="" class="my-favorite__link">Лекція. Механізми інтерфейсів в Java</a>
	    <a href="" class="my-favorite__link">Лекція. Механізми інтерфейсів в Java</a>
	    <a href="" class="my-favorite__link">Лекція. Механізми інтерфейсів в Java</a>
	    <a href="" class="my-favorite__link">Лекція. Механізми інтерфейсів в Java</a>
	</section>
`;

	    		
		        