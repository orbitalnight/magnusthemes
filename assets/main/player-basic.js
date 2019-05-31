feather.replace();
function playMusic(audio,start,stop){
	audio.play();
	$(start).hide();
	$(stop).show();
}
function pauseMusic(audio,start,stop){
	audio.pause();
	$(start).show();
	$(stop).hide();
}
function checkStop(stopped){
	if(!stopped)
		pauseMusic(aud,start,stop);
	else
		playMusic(aud,start,stop);
}
var player = document.getElementById("player"),
	aud = player.getElementsByTagName("audio")[0],
	start = player.getElementsByClassName("start")[0],
	stop = player.getElementsByClassName("stop")[0];
var stopped = 0; // audio paused - true
checkStop(stopped);
stopped = 1;
$("#switch").on("click",function(e){
	checkStop(stopped);
	stopped = !stopped;
	e.preventDefault();
});
