import api from '../apiServises/api';
import showFilmsByQuery from './Films-by-query';
import refs from './refs';
refs.searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  refs.searchList.classList.add('is-hidden');
  const form = event.currentTarget;
  api.query = form.elements.query.value;
  refs.gallery.textContent = '';
  api.resetPage();
  showFilmsByQuery();
}
