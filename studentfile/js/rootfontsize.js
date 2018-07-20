	function resizeREM(){
		var w = document.documentElement.clientWidth || document.body.clientWidth;
		document.querySelector("html").style.fontSize = w / 750 * 100 + "px";
	}

	window.addEventListener('resize',function() {
		resizeREM();
	});

	resizeREM();