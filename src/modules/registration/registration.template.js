export const RegistrationTemplate = `
  <div class="registration">
    <div class="registration__wrapper">
      <h2 class="registration__title">Реєстрація</h2>
      <form id="registration__form" class="registration__form">
        <div class="registration__item registration__surname">
          <label for="registration-surname">прізвище</label><br/>
          <input type="text" id="registration-surname" class="registration__input" required />
        </div>
        <div class="registration__item registration__name">
          <label for="registration-name">ім'я</label><br/>
          <input type="text" id="registration-name" class="registration__input" required />
        </div>
        <div class="registration__item registration__birth">
          <label>дата народження <i class="far fa-question-circle"></i></label><br/>
          <div class="container-for-birth">
            <input type="text" id="birth_date" class="registration__input" required />
            <input type="text" id="birth_month" class="registration__input" required />
            <input type="text" id="birth_year" class="registration__input" required />
          </div>
        </div>
        <div class="registration__item registration__sex">
          <label>стать</label><br/>
        	<input type="radio" id="registration-male" class="registration__input" name="sex" value="male" checked>
        	<label for='registration-male'>чоловіча</label>
        	<input type="radio" id="registration-female" class="registration__input" name="sex" value="female">
        	<label for='registration-female'>жіноча</label>
        </div>
        <div class="registration__item registration__email">
          <label for="registration-email">електронна пошта</label><br/>
          <input type="email" id="registration-email" class="registration__input" required />
        </div>
        <div class="registration__item registration__password">
          <label for="registration-password">пароль</label><br/>
          <input type="password" id="registration-password" class="registration__input" required />
        </div>
        <div class="registration__item registration__repeat-password">
          <label for="registration-repeat-password">повторіть пароль</label><br/>
          <input type="password" id="registration-repeat-password" class="registration__input" required />
        </div>
      </form>
      <input type="submit" value="Зареєструватися" id="create-account" class="button" />
      <div class="sign-block">Вже зареєстровані?<span data-target="sign-in" class="link--active">Увійти</span></div>
    </div>
    <div class="socials">
    	<div class="socials__title">Авторизація через соцмережі</div>
    	<div class="socials_items">
    	  <a href="" class="socials__item link">
    	    <i class="fab fa-twitter"></i>
    	  </a>
    	  <a href="" class="socials__item link">
    	    <i class="fab fa-facebook-f"></i>
    	  </a>
    	  <a href="" class="socials__item link">
    	    <i class="fab fa-google"></i>
    	  </a>
      </div>
    </div>
  </div>
`

	    		
		        