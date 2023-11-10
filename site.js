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

    let moveCountElement = document.getElementById('moveCount');

    switch (index) {
      case 0:
        leftMove = easyMoveLimit - currentMove;
        break;
      case 1:
        leftMove = mediumMoveLimit - currentMove;
        break;
      case 2:
        leftMove = hardMoveLimit - currentMove;
        break;
      default:
        break;
    }

    moveCountElement.textContent = leftMove;
}


var audio = document.getElementById("myAudio");
var soundIcon = document.getElementById("soundIcon");
var soundIconIcon = document.getElementById("soundIconIcon");

function toggleSound() {
  if (audio.paused) {
    audio.play();
    soundIcon.classList.remove("muted");
    soundIconIcon.classList.remove("fas fa-volume-xmark");
    soundIconIcon.classList.add("fas fa-volume-up");
  } else {
    audio.pause();
    soundIcon.classList.add("muted");
    soundIconIcon.classList.remove("fas fa-volume-up");
    soundIconIcon.classList.add("fas fa-volume-xmark");
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

var timeCount = document.getElementById('timeCount');
var seconds = 0;
var minutes = 0;
var timerInterval;

function updateTimer() {
    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    var formattedTime = padNumber(minutes) + ':' + padNumber(seconds);
    timeCount.textContent = formattedTime;
}

function padNumber(num) {
    return (num < 10 ? '0' : '') + num;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}


// Chọn thì thay css

function setMode(mode) {

  var difficultySpan = document.getElementById('difficulty');
  difficultySpan.textContent = mode.toUpperCase();

  var chooseColor = 'hsl(186, 100%, 69%)';
  var notChooseColor = '#9d0938'; 

  document.documentElement.style.setProperty('--challenge', mode === 'CHALLENGE' ? chooseColor : notChooseColor);
  document.documentElement.style.setProperty('--zen', mode === 'ZENMODE' ? chooseColor : notChooseColor);
 
 
  var challengeButton = document.getElementById('challengeButton');
  var zenButton = document.getElementById('zenButton');

  challengeButton.classList.toggle('glowing-btn', mode === 'CHALLENGE');
  challengeButton.querySelector('span').classList.toggle('glowing-txt', mode === 'CHALLENGE');

  zenButton.classList.toggle('glowing-btn', mode === 'ZENMODE');
  zenButton.querySelector('span').classList.toggle('glowing-txt', mode === 'ZENMODE');
  
  challengeButton.classList.toggle('not-choose-this', mode === 'ZENMODE');
  zenButton.classList.toggle('not-choose-this', mode === 'CHALLENGE');

  var moveElements = document.querySelectorAll('.move');
  moveElements.forEach(function (moveElement) {
    moveElement.classList.toggle('zen-mode', mode === 'ZENMODE');
  });

  console.log('Current mode:', mode);
}
