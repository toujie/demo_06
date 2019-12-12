window.onload=function(){
	var tipBox = document.getElementById('tipBox');
	var tip = document.getElementById('tip');
	var warmTip = document.getElementsByClassName('warmTip')[0];
	var flag = false;
	function getStyle(obj,style){
    	if(obj.currentStyle){
    		return obj.currentStyle[style];
    	}else{
    		return getComputedStyle(obj)[style];
    	}
    }
	function roll(){
		var timer = setInterval(function(){
			var now = parseInt(getStyle(warmTip,'left'));
			console.log(now);
			var speed = 5;
			if(now == -600){
				warmTip.style.left = 800 + 'px';

			}else{
				warmTip.style.left = now - speed + 'px';
			}
		},80);
		// getStyle(div,'left');
	}
	roll();
}