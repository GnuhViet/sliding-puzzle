function setActiveButton(index) {
    var buttons = document.getElementsByClassName('level-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    buttons[index].classList.add('active');

    var difficultyOverlay = document.getElementById('difficultyOverlay');

    switch (index) {
        case 0:
            difficultyOverlay.textContent = '-Easy-';
            break;
        case 1:
            difficultyOverlay.textContent = 'Medium';
            break;
        case 2:
            difficultyOverlay.textContent = '-Hard-';
            break;
        default:
            break;
    }
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

var homeButtons = document.querySelectorAll('.homeButton');

homeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        location.reload();
    });
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

var dropContainer = document.getElementById("dropcontainer");
var fileInput = document.getElementById("images");

dropContainer.addEventListener("dragover", function (e) {
  // prevent default to allow drop
  e.preventDefault();
}, false);

dropContainer.addEventListener("dragenter", function () {
  dropContainer.classList.add("drag-active");
});

dropContainer.addEventListener("dragleave", function () {
  dropContainer.classList.remove("drag-active");
});

dropContainer.addEventListener("drop", function (e) {
  e.preventDefault();
  dropContainer.classList.remove("drag-active");
  fileInput.files = e.dataTransfer.files;
});

var giveupButton = document.getElementById('giveupButton');
var lostNotice = document.getElementById('lostNotice');

giveupButton.addEventListener('click', function() {
  lostNotice.style.display = 'block';
  var imageOverlay = document.getElementById('imageOverlay');
  imageOverlay.style.display = 'block';
});