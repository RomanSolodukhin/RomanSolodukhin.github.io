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

const SvgIcons = {
  'account-box': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <path fill="currentColor" d="M4 2H18V3H19V4H20V18H19V19H18V20H4V19H3V18H2V4H3V3H4V2M4 16H5V15H7V14H15V15H17V16H18V5H17V4H5V5H4V16M16 18V17H14V16H8V17H6V18H16M9 5H13V6H14V7H15V11H14V12H13V13H9V12H8V11H7V7H8V6H9V5M12 8V7H10V8H9V10H10V11H12V10H13V8H12Z" />
</svg>`,
  'battery-25': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <path fill="currentColor" d="M7 8V14H5V8H7M18 5V6H19V9H20V13H19V16H18V17H3V16H2V6H3V5H18M17 7H4V15H17V7Z" />
</svg>`,
  'battery-75': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <path fill="currentColor" d="M5 8H7V14H5V8M8 8H10V14H8V8M18 5V6H19V9H20V13H19V16H18V17H3V16H2V6H3V5H18M17 7H4V15H17V7M11 8H13V14H11V8Z" />
</svg>`,
  'bug': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <path fill="currentColor" d="M3 7H6V6H7V5H8V4H7V3H6V2H7V1H8V2H9V3H10V4H12V3H13V2H14V1H15V2H16V3H15V4H14V5H15V6H16V7H19V9H17V11H19V13H17V15H19V17H16V18H15V19H14V20H8V19H7V18H6V17H3V15H5V13H3V11H5V9H3V7M13 18V17H14V16H15V8H14V7H13V6H9V7H8V8H7V16H8V17H9V18H13M9 13H13V15H9V13M9 9H13V11H9V9Z" />
</svg>`,
  'calendar': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <path fill="currentColor" d="M19 20H3V19H2V3H3V2H5V0H7V2H15V0H17V2H19V3H20V19H19V20M4 4V6H18V4H4M4 8V18H18V8H4M12 12H16V16H12V12Z" />
</svg>`,
  'clock': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <path fill="currentColor" d="M10 5H12V11H13V12H14V13H15V15H13V14H12V13H11V12H10V5M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M14 3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3Z" />
</svg>`,
  'compass': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <path fill="currentColor" d="M15 1V2H17V3H18V4H19V5H20V7H21V15H20V17H19V18H18V19H17V20H15V21H7V20H5V19H4V18H3V17H2V15H1V7H2V5H3V4H4V3H5V2H7V1H15M14 3H8V4H6V5H5V6H4V8H3V14H4V16H5V17H6V18H8V19H14V18H16V17H17V16H18V14H19V8H18V6H17V5H16V4H14V3M10 9V8H12V7H14V6H16V8H15V10H14V12H13V13H12V14H10V15H8V16H6V14H7V12H8V10H9V9H10M12 10H10V12H12V10Z" />
</svg>`,
  'device': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <path fill="currentColor" d="M2 1H20V2H20.94V20H20V21H2V20H1.06V2H2V1M3 3V19H19V3H3M4 4H18V12H4V4M5 14H8V17H5V14M12 15H14V17H12V15M15 14H17V16H15V14Z" />
</svg>`,
  'message-text': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <path fill="currentColor" d="M2 1H20V2H21V16H20V17H5V18H4V19H3V20H2V21H1V2H2V1M3 3V16H4V15H19V3H3M5 6H17V8H5V6M5 10H14V12H5V10Z" />
</svg>`,
  'signal-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M19.5,5.5V18.5H17.5V5.5H19.5M12.5,10.5V18.5H10.5V10.5H12.5M21,4H16V20H21V4M14,9H9V20H14V9M7,14H2V20H7V14Z" />
  </svg>`,
  'signal-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M19.5,5.5V18.5H17.5V5.5H19.5M21,4H16V20H21V4M14,9H9V20H14V9M7,14H2V20H7V14Z" />
  </svg>`,
  'signal-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M21,4H16V20H21V4M14,9H9V20H14V9M7,14H2V20H7V14Z" />
  </svg>`,
  'toggle-switch-off': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <path fill="currentColor" d="M5 8H9V9H10V13H9V14H5V13H4V9H5V8M19 5V6H20V7H21V15H20V16H19V17H3V16H2V15H1V7H2V6H3V5H19M18 7H4V8H3V14H4V15H18V14H19V8H18V7Z" />
  </svg>`,
  'toggle-switch-on': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <path fill="currentColor" d="M3 5H19V6H20V7H21V15H20V16H19V17H3V16H2V15H1V7H2V6H3V5M13 8V9H12V13H13V14H17V13H18V9H17V8H13Z" />
</svg>`,
  'email': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <title>email</title><path fill="currentColor" d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" /></svg>`,
  'notebook': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <title>notebook</title><path fill="currentColor" d="M19 2V20H18V21H4V20H3V18H1V16H3V12H1V10H3V6H1V4H3V2H4V1H18V2H19M14 9H13V8H12V9H11V10H10V3H7V19H17V3H15V10H14V9M3 4V6H5V4H3M5 10H3V12H5V10M5 16H3V18H5V16Z" /></svg>`,
  'heart': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
  <title>heart</title><path fill="currentColor" d="M12 20H10V19H9V18H8V17H7V16H6V15H5V14H4V13H3V12H2V10H1V5H2V4H3V3H4V2H9V3H10V4H12V3H13V2H18V3H19V4H20V5H21V10H20V12H19V13H18V14H17V15H16V16H15V17H14V18H13V19H12V20M5 11V12H6V13H7V14H8V15H9V16H10V17H12V16H13V15H14V14H15V13H16V12H17V11H18V9H19V6H18V5H17V4H14V5H13V6H12V7H10V6H9V5H8V4H5V5H4V6H3V9H4V11H5Z" /></svg>`,
  'axe': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>axe</title><path fill="currentColor" d="M11 3H13V4H14V5H15V6H17V7H19V8H20V9H21V11H20V13H19V14H18V15H16V16H15V15H14V14H13V12H12V11H11V10H10V9H9V8H8V6H9V5H10V4H11M10 10V11H11V13H10V14H9V15H8V16H7V17H6V18H5V19H4V20H3V19H2V17H3V16H4V15H5V14H6V13H7V12H8V11H9V10" /></svg>`,
  'bulb': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>lightbulb</title><path fill="currentColor" d="M8 19H14V21H8V19M8 18V14H7V13H6V12H5V11H4V5H5V4H6V3H7V2H8V1H14V2L15 2V3H16V4H17V5H18V11H17V12H16V13H15V14H14V18H8M13 12H14V11H15V10H16V6H15V5H14V4L13 4V3H9V4H8V5H7V6H6V10H7V11H8V12H9V13H10V16H12V13H13V12Z" /></svg>`,
  'diamond': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>diamond</title><path fill="currentColor" d="M6 2H16V3H17V4H18V5H19V6H20V12H19V13H18V14H17V15H16V16H15V17H14V18H13V19H12V20H10V19H9V18H8V17H7V16H6V15H5V14H4V13H3V12H2V6H3V5H4V4H5V3H6V2M15 5V4H14V6H15V7H17V6H16V5H15M12 6V4H10V6H9V7H13V6H12M8 6V4H7V5H6V6H5V7H7V6H8M4 11H5V12H6V13H7V14H8V12H7V9H4V11M10 12V16H12V12H13V9H9V12H10M14 12V14H15V13H16V12H17V11H18V9H15V12H14Z" /></svg>`
};

class SvgIcon extends HTMLElement {
  connectedCallback() {
    const svgContent = SvgIcons[this.getAttribute('icon')];
    this.innerHTML = svgContent;
  };
};

customElements.define('svg-icon', SvgIcon);

function copyText(elementID) {
  const textElement = document.getElementById(elementID);
  const text = textElement.innerText;
  navigator.clipboard.writeText(text).then(function() {
    if (!textElement.hasAttribute('copied')) {
      textElement.setAttribute('copied', true);
    setTimeout(function() {
      if (textElement.hasAttribute('copied')) {
        textElement.removeAttribute('copied');
      }
    }, 1500);
    };
  }).catch(function(err) {
    console.error('Не удалось скопировать текст: ', err);
  });
}