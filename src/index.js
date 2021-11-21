import '3m83d';
import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'javascript loaded';

  return element;
}

document.body.appendChild(component());
