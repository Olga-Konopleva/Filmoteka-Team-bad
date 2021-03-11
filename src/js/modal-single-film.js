import MicroModal from 'micromodal';
import filmTpl from '../templates/modal.hbs';
import refs from './refs';
import apiService from '../apiServises/api';
import { showTrailer } from './show-trailer';

refs.gallery.addEventListener('click', openModal);

export function openModal(event) {
  if (
    event.target.nodeName === 'UL'
  ) {
    return;
  }
  showModal(event);
  
  MicroModal.show('modal-1', {
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    disableScroll: true, // [6]
    disableFocus: true, // [7]
  })
};

export function showModal(event) {
  const element = event.target;
  const id = element.dataset.id;
  localStorage.setItem('firebase-id', id);
  // console.log(id);
  apiService
    .showFilmDetails(id)
    .then(data => apiService.updateOneFilmInfo(data))
    //  .then(console.log)
    .then(data => updateData(data))
    .then(showTrailer);
  refs.divModal.innerHTML = '';
 
}

  function updateData(data) {
    const markup = filmTpl(data);
    refs.divModal.insertAdjacentHTML('beforeend', markup);
    return markup;
  }
