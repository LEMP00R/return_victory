export const Question5Template = `
	    <h2 class="test__heading">Чи легко вам розібратися у новій сфері діяльності для подальшого використання отриманих знань у розробці програмного забезпечення?</h2>
	    		<div class="container-for-answers">
	    			<div class="test__checkbox">
		    			<input  data-department="SI" class="inp-cbx" id="cbx" type="checkbox" style="display: none;"/>
						<label class="cbx" for="cbx">
							<span>
							    <svg width="12px" height="10px" viewbox="0 0 12 10">
							      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
							    </svg>
						    </span>
						    <span>Так</span>
						</label>
					</div>
					<div class="test__checkbox">
		    			<input data-department="CS" class="inp-cbx" id="cbx-1" type="checkbox" style="display: none;"/>
						<label class="cbx" for="cbx-1">
							<span>
							    <svg width="12px" height="10px" viewbox="0 0 12 10">
							      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
							    </svg>
						    </span>
						    <span>Ні, мене більше цікавить сфера інформаційних технологій</span>
						</label>
					</div>
				</div>
		<div class="test__submit">
            <input type="submit" value="Наступне питання" class="button"/>
        </div>
`