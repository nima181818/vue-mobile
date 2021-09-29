function resetFontSize() {
    var baseFontSize = 10;
    var designWidth = 375;
    var width = window.innerWidth;  // 
    var currentFontSize = (width / designWidth) * baseFontSize;
    document.getElementsByTagName('html')[0].style.fontSize = currentFontSize + 'px';
  }

  window.onresize = function() {
    resetFontSize();
  };
  resetFontSize()