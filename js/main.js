function setColorMode (colorMode) {
  if (colorMode != null && ['light', 'dark'].includes(colorMode)) {
    document.body.setAttribute('mode', colorMode);
  } else return new Error('[TypeError] Invalid color mode');
};

function setLightMode () {
  setColorMode('light');
}
function setDarkMode () {
  setColorMode('dark');
}

window.onload = function() {
  document.querySelector('#button-light-on').addEventListener('click', setLightMode);
  document.querySelector('#button-dark-on').addEventListener('click', setDarkMode);
};