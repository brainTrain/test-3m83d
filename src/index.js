const page = require('3m83d');

function component() {
  const element = document.createElement('main');
  element.style = 'display: flex; justify-content: center; align-items: center;';

  const iframe = document.createElement('iframe');
  iframe.style = 'width: 90vw; height: 90vh; box-sizing: border-box;';
  // set the compiled bundle from 3m83d as the srcdoc for the iframe
  // NOTE: images are not being served, but css and js are
  iframe.srcdoc = page.default;

  element.appendChild(iframe);

  return element;
}

document.body.appendChild(component());
