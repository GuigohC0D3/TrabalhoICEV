document.addEventListener("DOMContentLoaded", function () {
  var moreInfoBtn = document.getElementById("more-info-btn");
  var moreInfo = document.getElementById("more-info");
  moreInfoBtn.addEventListener("click", function () {
    moreInfo.classList.toggle("hidden");
  });

  var audioPlayer = document.getElementById("bear-sounds");
  var playSoundBtn = document.getElementById("play-sound-btn");
  playSoundBtn.addEventListener("click", function () {
    audioPlayer.play();
  });

  var contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Obrigado pela sua mensagem!");
  });
});
