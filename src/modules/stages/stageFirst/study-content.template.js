export const StudyContentTemplate = `
<h1 class="study-content__heading">Зміст навчання</h1>
	<p class="study-content__text">Ти вже дізнався про престижність обраної спеціальності, її перспективи та загальну сутність. Тепер час ретельно вивчити зміст навчання: які технології розглядаються, яким напрямкам приділяється найбільша увага, та які навички ти згодом зможеш вписати до своего резюме.</p>
	<p class="study-content__text">В межах обраного тобою напряму вивчаються технології, що розглядають повний життєвий цикл проекту розробки ПЗ, що поєднують в собі науковий підхід, серйозну базу досліджень і мають історію реального використання та адаптацію.</p>
	<div class="study-content__scroll-down">
		<picture class="mouse">
	    	<img src="../static/icons/mouse.svg" alt="mouse" />
		</picture>
		<span>Мови програмування та технології, яким приділяється особлива увага</span>
	</div>
	<p class="study-content__text">Основні напрямки для ретельного вивчення на твоїй спеціальності – Web, Mobile, Embedded System та Desktop розробки. Пропонуємо тобі детальніше ознайомитись з кожним шляхом професійного розвитку. Нижче – перелік мов програмування, технологій, засобів проектування та посад, які може займати розробник з такими навичками.</p>
	<section class="technologies">
		<div class="technologies__item web">
			<div class="web__heading">Web розробка</div>
			<div class="web__card">
				<p>HTML5 + CSS3</p>
				<p>Web Developer</p>
			</div>
			<div class="web__card">
				<p>Django</p>
				<p>Pyton Developer</p>
			</div>
			<div class="web__card">
				<p>PHP</p>
				<p>Backend Developer</p>
			</div>
			<div class="web__card">
				<p>MySQL</p>
				<p>Database Developer</p>
			</div>
			<div class="web__card">
				<p>Javascript</p>
				<p>Frontend Developer</p>
			</div>
			<div class="web__card">
				<p>NET MVC</p>
				<p>C# Developer</p>
			</div>
			<div class="web__card">
				<p>Spring</p>
				<p>Java Developer</p>
			</div>
			<div class="web__card">
				<p>Angular.js / React.js / Vue.js</p>
				<p>UI Developer</p>
			</div>
		</div>
		<div class="technologies__item embedded-system">
			<div class="embedded-system__heading">Embedded System розробка</div>
			<div class="embedded-system__card">
				<p>C / C++</p>
				<p>Embedded System Developer</p>
			</div>
			<div class="embedded-system__card">
				<p>Assembler</p>
				<p>Embedded System Developer</p>
			</div>
			<div class="embedded-system__card">
				<p>MPLab, ARDuino IDE</p>
				<p>Embedded System Developer</p>
			</div>
			<div class="embedded-system__card">
				<p>Maple, MATLAB</p>
				<p>Embedded System Developer</p>
			</div>
			<div class="embedded-system__card">
				<p>VHDL</p>
				<p>Embedded System Developer</p>
			</div>
			<div class="embedded-system__card">
				<p>AVR Studio, mbed, Multisim</p>
				<p>Embedded System Developer</p>
			</div>
		</div>
		<div class="technologies__item desktop">
			<div class="desktop__heading">Desktop розробка</div>
			<div class="desktop__card">
				<p>1C Підприємство</p>
				<p>1C Developer</p>
			</div>
			<div class="desktop__card">
				<p>Java FX</p>
				<p>Java Developer</p>
			</div>
			<div class="desktop__card">
				<p>Python</p>
				<p>Python Developer</p>
			</div>
			<div class="desktop__card">
				<p>.NET, WPF</p>
				<p>C# Developer</p>
			</div>
		</div>
		<div class="technologies__item mobile">
			<div class="mobile__heading">Mobile розробка</div>
			<div class="mobile__card">
				<p>Objective C / Swift</p>
				<p>iOS Developer</p>
			</div>
			<div class="mobile__card">
				<p>Android API</p>
				<p>Android Developer</p>
			</div>
		</div>
	</section>
	<input type="button" class='button' value='Далі' />
	<input type="button" class='button button--light' value='Навчальний план' />
`