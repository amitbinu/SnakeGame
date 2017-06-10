window.onload=function() {
	canv=document.getElementById("gc");
	score = document.getElementById("ScoreNumber");
	ctx=canv.getContext("2d");
	document.addEventListener("keydown",keyPush);
	var startGame = setInterval(game,1000/10);
}
px=py=10;
gs=tc=23;
ax=ay=15;
xv=yv=0;
trail=[];
tail = 5;
var startedAgain = false;
function game() {

	px+=xv;
	py+=yv;
	if(px<0) {
		px= gs-1;
	}
	if(px>gs-1) {
		px= 0;
	}
	if(py<0) {
		py= gs-1;
	}
	if(py>gs-1) {
		py= 0;
	}
	ctx.fillStyle="white";
	ctx.fillRect(0,0,canv.width,canv.height);

	ctx.fillStyle="blue";

	for(var i=0;i<trail.length;i++) {
		ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
		if(trail[i].x==px && trail[i].y==py) {
			if(tail != 5){
				px=py=10;
				gs=tc=23;
				ax=ay=15;
				xv=yv=0;
				trail=[];
				score.innerHTML = ((tail-5)*10) + "";
				alert("Your score is " + score.innerHTML);
				startedAgain = true;
				tail = 5;
				clearInterval(startGame);
			}
			tail = 5;
		}
	}
	trail.push({x:px,y:py});
	while(trail.length>tail) {
	trail.shift();
	}

	if(ax==px && ay==py) {
		tail++;
		ax=Math.floor(Math.random()*tc);
		ay=Math.floor(Math.random()*tc);
		score.innerHTML = ((tail-5)*10) + "";
	}
	ctx.fillStyle="red";
	ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);

}
function keyPush(evt) {
	if(startedAgain == true){
		score.innerHTML = "0";
		startedAgain = false;
	}
	switch(evt.keyCode) {
		case 37:
			xv=-1;yv=0;
			break;
		case 38:
			xv=0;yv=-1;
			break;
		case 39:
			xv=1;yv=0;
			break;
		case 40:
			xv=0;yv=1;
			break;
	}
}