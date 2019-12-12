var box = document.getElementById('box');
var left = document.getElementById('left');
var right = document.getElementById('right');
var navList = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var i = 1;
var isMoving = false;
var timer;
//轮播
function next(){
	if(!isMoving){
		isMoving = true;
		i++;
		navChange();
		animate(slider,{left:-1200*i},function(){
			if(i > 5 ){
				slider.style.left = "-1200px";
				i = 1;
			}
			isMoving = false;
		});
	}
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	i--;
	animate(slider,{left:-1200*i},function(){
		if(i == 0){
			slider.style.left = "-6000px";
			i = 5;
		}
		isMoving = false;
	});
}

var timer = setInterval(next,3000);
//鼠标划入
box.onmouseover = function() {
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);
}
//鼠标划出
box.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next,3000);
}
right.onclick = next;
left.onclick = prev;
for(var j = 0; j < navList.length; j++){
	navList[j].idx = j;
	navList[j].onclick = function(){
		//console.log(j);5
		i = this.idx + 1;
		navChange();
		animate(slider,{left:-1200*i});
	}
}
//按钮背景色转换
function navChange(){
	for(var j = 0; j < navList.length; j++){
		navList[j].id = '';
	}
	if(i == 6){
		navList[0].id = 'active';
	}else if(i == 0){
		navList[4].id = 'active';
	}else{
		navList[i-1].id = 'active';
	}
}