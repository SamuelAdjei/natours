/* eslint-disable */

// type is either 'success' or 'error'

export const showAlert = (type, msg) => {
  const markup = `<div class='alert alert--${type}'`;
  document.querySelector('body').insertAdjacentHTML('afterbegin');
};
