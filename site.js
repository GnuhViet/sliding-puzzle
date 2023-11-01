function setActiveButton(index) {
    var buttons = document.getElementsByClassName('level-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    buttons[index].classList.add('active');
}
var audio = document.getElementById("myAudio");
var soundIcon = document.getElementById("soundIcon");
var soundIconIcon = document.getElementById("soundIconIcon");

function toggleSound() {
  if (audio.paused) {
    audio.play();
    soundIcon.classList.remove("muted");
    soundIconIcon.classList.remove("fa-volume-xmark");
    soundIconIcon.classList.add("fa-volume-up");
  } else {
    audio.pause();
    soundIcon.classList.add("muted");
    soundIconIcon.classList.remove("fa-volume-up");
    soundIconIcon.classList.add("fa-volume-xmark");
  }
}