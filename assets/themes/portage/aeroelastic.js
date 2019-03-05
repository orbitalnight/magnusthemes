(function(){
	var bodyEl = document.body,
		content = document.getElementById('#all'),
		openbtn = document.getElementById('open-button'),
		closebtn = document.getElementById('close-button'),
		menuwrap = document.getElementsByClassName("menu-wrap")[0],
		isOpen = false,
		morphEl = document.getElementById('morph-shape'),
		s = Snap(morphEl.querySelector('svg'));
		path = s.select('path');
		initialPath = this.path.attr('d'),
		pathOpen = morphEl.getAttribute('data-morph-open'),
		isAnimating = false;
	function init() {
		initEvents();
	}
	function initEvents() {
		openbtn.addEventListener('click', toggleMenu);
		if(closebtn)
			closebtn.addEventListener('click', toggleMenu);
		bodyEl.addEventListener('click',function(e){
			if(
			    isOpen && 
			    e.target !== openbtn && 
			    !$(menuwrap).is(e.target) && 
			    $(menuwrap).has(e.target).length === 0
			)
			toggleMenu();
		});
	}
	function toggleMenu(){
		if(isAnimating) 
		    return false;
		isAnimating = true;
		if(isOpen){
			$(bodyEl).removeClass("show-menu");
			$(".fade").fadeOut();
			setTimeout(function(){
				path.attr('d', initialPath);
				isAnimating = false; 
			}, 300);
		}
		else {
			$(bodyEl).addClass("show-menu");
			$(".fade").fadeIn();
			path.animate({ 
			    'path':pathOpen 
			}, 400, mina.easeinout, function(){ 
			    isAnimating = false; 
			});
		}
		isOpen = !isOpen;
	}
	init();
})();