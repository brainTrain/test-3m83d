const page = require('3m83d');
import _ from 'lodash';

function component() {
  const element = document.createElement('main');
  element.style = 'display: flex; justify-content: center; align-items: center;';

  const iframe = document.createElement('iframe');
  iframe.style = 'width: 90vw; height: 90vh; box-sizing: border-box;';
  iframe.srcdoc = page.default;

  element.appendChild(iframe);

  return element;
}

document.body.appendChild(component());
