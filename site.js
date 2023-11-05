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

document.getElementById("homeButton").addEventListener("click", function() {
  location.reload(); 
});

document.getElementById("logo").addEventListener("click", function() {
  location.reload(); 
});

document.getElementById('size').addEventListener('change', function() {
  var sizeInput = this.value;
  var warningMessage = document.getElementById('warning-message');

  if (sizeInput < 3 || sizeInput > 5) {
      warningMessage.style.display = 'block';
  } else {
      warningMessage.style.display = 'none';
  }
});

document.getElementById('close-button').addEventListener('click', function() {
  document.getElementById('warning-message').style.display = 'none';
});