function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
  document.getElementById("dateDisplay").innerHTML = `Hôm nay là ngày ${day}/${month}/${year}`;
  document.title = `Key Ngày ${day}/${month}/${year} Là`;

  setTimeout(updateTime, 1000);
}

function getQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const key = urlParams.get('ma');
  const keyInput = document.getElementById('keyInput');
  keyInput.value = key ? key : 'Không có key nào';
}

window.onload = function () {
  updateTime();
  getQueryParam();

  const toast = document.getElementById('thankYouToast');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
};

function copyToClipboard() {
  const keyInput = document.getElementById("keyInput");
  keyInput.select();
  keyInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(keyInput.value).then(() => {
    showCopyPopup();
    playDingSound();
  });
}

function showCopyPopup() {
  const popup = document.getElementById("copySuccessPopup");
  const circle = popup.querySelector(".checkmark-circle");
  const check = popup.querySelector(".checkmark-check");

  circle.style.strokeDashoffset = 166;
  check.style.strokeDashoffset = 48;
  circle.style.animation = "none";
  check.style.animation = "none";
  void circle.offsetWidth;
  void check.offsetWidth;

  popup.classList.add("show");
  circle.style.animation = "strokeCircle 0.6s ease-out forwards";
  check.style.animation = "strokeCheck 0.3s ease-out 0.6s forwards";

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
}

function playDingSound() {
  const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-29.mp3');
  audio.play();
}