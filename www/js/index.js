paceOptions = {
  elements: false,
  restartOnPushState: false,
  restartOnRequestAfter: false
}
Pace.on("done", function(){
    document.getElementById('bikalafc').style.visibility='visible';
});