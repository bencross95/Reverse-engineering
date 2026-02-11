// Splash screen loading animation
(function() {
  var loader = document.getElementById('splash-loader');
  var splashScreen = document.getElementById('splash-screen');
  var mainContent = document.getElementById('main-content');

  var chars = ['\\', 'i', '/', '-'];
  var totalFrames = 12; // 3 full rounds of 4 characters
  var duration = 1150; // ~104ms per frame, 3 full rounds
  var interval = duration / totalFrames;
  var frame = 0;

  function animateSequence() {
    var timer = setInterval(function() {
      frame++;
      if (frame >= totalFrames) {
        clearInterval(timer);
        // Fade the loader characters to blue, leaving blue screen
        splashScreen.classList.add('fade-out');
        setTimeout(function() {
          splashScreen.remove();
          mainContent.style.display = 'block';
          window.dispatchEvent(new Event('splashDone'));
        }, 300);
        return;
      }
      loader.textContent = chars[frame % chars.length];
    }, interval);
  }

  // Wait for font to load before starting
  document.fonts.ready.then(function() {
    animateSequence();
  });
})();
