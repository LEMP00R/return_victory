export const Question3Template = `
	    <h2 class="test__heading">Чи цікавить вас розробка баз даних та їх подальше обслуговування?</h2>
	    		<div class="container-for-answers">
	    			<div class="test__checkbox">
		    			<input data-department="CS" class="inp-cbx" id="cbx" type="checkbox" style="display: none;"/>
						<label class="cbx" for="cbx">
							<span>
							    <svg width="12px" height="10px" viewbox="0 0 12 10">
							      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
							    </svg>
						    </span>
						    <span>Так, це мене дійсно цікавить</span>
						</label>
					</div>
					<div class="test__checkbox">
		    			<input data-department="SI" class="inp-cbx" id="cbx-1" type="checkbox" style="display: none;"/>
						<label class="cbx" for="cbx-1">
							<span>
							    <svg width="12px" height="10px" viewbox="0 0 12 10">
							      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
							    </svg>
						    </span>
						    <span>Ні, я хотів би займатися розробкою програмного забезпечення</span>
						</label>
					</div>
				</div>
		<div class="test__submit">
            <input type="submit" value="Наступне питання" class="button"/>
        </div>
`