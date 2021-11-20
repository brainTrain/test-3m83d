function component() {
  const element = document.createElement('div');

  element.innerHTML = 'javascript loaded';

  return element;
}

document.body.appendChild(component());
