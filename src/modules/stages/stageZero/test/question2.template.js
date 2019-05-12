export const Question2Template = `
	    <h2 class="test__heading">Чи хотіли б ви займатися розробкою математичного програмного забезпечення, автоматизованих систем, відлагодженням та експлуатацією?</h2>
	    		<div class="container-for-answers">
	    			<div class="test__checkbox">
		    			<input data-department="CS, ACIS" class="inp-cbx" id="cbx" type="checkbox" style="display: none;"/>
						<label class="cbx" for="cbx">
							<span>
							    <svg width="12px" height="10px" viewbox="0 0 12 10">
							      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
							    </svg>
						    </span>
						    <span>Так, мене цікавить саме це</span>
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
						    <span>Ні, мені більше імпонує розробка програмного забезпечення для різних галузей</span>
						</label>
					</div>
					<div class="test__checkbox">
		    			<input data-department="CS" class="inp-cbx" id="cbx-2" type="checkbox" style="display: none;"/>
						<label class="cbx" for="cbx-2">
							<span>
							    <svg width="12px" height="10px" viewbox="0 0 12 10">
							      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
							    </svg>
						    </span>
						    <span>Ні, мене більше цікавить прикладна частина, ремонт та обслуговування комп’ютерів</span>
						</label>
					</div>
				</div>
		<div class="test__submit">
            <input type="submit" value="Наступне питання" class="button"/>
        </div>
`