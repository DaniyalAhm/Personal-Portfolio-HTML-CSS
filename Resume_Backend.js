function toggleSliderMenu() {
    var sliderMenu = document.querySelector('.slider-menu');
    var sliderToggle = document.querySelector('.slider-toggle');
    var line = document.querySelector('.line');
    
    if (sliderMenu.style.left === '-100%') {
      // Show the slider menu
      sliderMenu.style.left = '0px';
      sliderToggle.style.color = "aliceblue";
      sliderToggle.innerHTML = 'D.';
    } else {
      // Hide the slider menu
      sliderToggle.style.color = "black";
      sliderMenu.style.left = '-100%';
      sliderToggle.innerHTML = 'D.';

    }
  }