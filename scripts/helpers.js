const resetHTMLElement = (element) => { element.innerHTML = ''; };
const addEventHandlerToElementsOfClass = (elementClass, handler) => {
  const elements = document.getElementsByClassName(elementClass);

  for (let i = 0; i < elements.length; i += 1) {
    elements[i].addEventListener('click', handler, false);
  }
};

const toggleSpinner = (spinnerClass) => {
  document.querySelector(spinnerClass).classList.toggle('visually-hidden');
};
export { resetHTMLElement, addEventHandlerToElementsOfClass, toggleSpinner };