document.addEventListener("DOMContentLoaded", function () {
  // Event 1: Toggle more information about bears
  var moreInfoBtn = document.getElementById("more-info-btn");
  var moreInfo = document.getElementById("more-info");
  moreInfoBtn.addEventListener("click", function () {
    moreInfo.classList.toggle("hidden");
  });

  // Event 2: Play bear sounds
  var audioPlayer = document.getElementById("bear-sounds");
  var playSoundBtn = document.getElementById("play-sound-btn");
  playSoundBtn.addEventListener("click", function () {
    audioPlayer.play();
  });

  // Event 3: Submit form
  var contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Perform form submission or validation here
    alert("Thank you for your message!");
  });
});
