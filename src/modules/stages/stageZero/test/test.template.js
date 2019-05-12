export const TestTemplate = `
	<div id="test__progress" class="test__progress">
		<div id="test__bar" class="test__bar"></div>
	</div>
	<form class="test__form">
	    <h2 class="test__heading">Що з переліченого нижче вам більше імпонує:</h2>
	    		<div class="container-for-answers">
	    			<div class="test__checkbox">
		    			<input data-department="SI, CS" class="inp-cbx" id="cbx" type="checkbox" style="display: none;"/>
						<label class="cbx" for="cbx">
							<span>
							    <svg width="12px" height="10px" viewbox="0 0 12 10">
							      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
							    </svg>
						    </span>
						    <span>Створення алгоритмів, комп’ютерних програм</span>
						</label>
					</div>
					<div class="test__checkbox">
		    			<input data-department="CI, ACIS" class="inp-cbx" id="cbx-1" type="checkbox" style="display: none;"/>
						<label class="cbx" for="cbx-1">
							<span>
							    <svg width="12px" height="10px" viewbox="0 0 12 10">
							      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
							    </svg>
						    </span>
						    <span>Налагодження роботи комп’ютерів та обладнання</span>
						</label>
					</div>
				</div>
		<div class="test__submit">
            <input type="submit" value="Наступне питання" class="button"/>
        </div>
	</form>
`