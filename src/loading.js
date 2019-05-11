function flash(color) {
	if(flashing) return; else flashing=true;
	var f=document.createElement("div");
	f.className="flashFx";
	f.style.backgroundColor=color;
	f.addEventListener('animationend',function(){
		f.parentElement.removeChild(f);
		flashing=false;
	}.bind(this));
	document.body.appendChild(f);
}

function showLoading(){
	var c=document.createElement("div");
	c.className="loading";
	var stripe=document.createElement("div");
	stripe.className="stripe";
	var frag=I("fragment");
	stripe.appendChild(c);
	frag.innerHTML="";
	frag.appendChild(stripe);
}


