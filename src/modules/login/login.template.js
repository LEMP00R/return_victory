export const LoginTemplate = `
  <div class="login">
    <div class="login__wrapper">
      <h2 class="login__heading">Вхід в систему</h2>
      <form id="login__form" class="login__form">
        <div class="login__item login__email">
          <label for="login-email">електронна пошта</label><br/>
          <input type="text" id="login-email" class="login__input" />
        </div>
        <div class="login__item login__password">
          <label for="password">пароль</label><br/>
          <input type="password" id="login-password" class="login__input" />
        </div>
      </form>
      <input type="submit" value="Увійти в систему" id="enter-account" class="button"/>
      <div class="sign-block">Ще не зареєстровані? <span data-target="sign-up" class="link--active">Зареєструватися</span></div>
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

	    		
		        