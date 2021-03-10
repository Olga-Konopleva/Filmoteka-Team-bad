import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import axios from 'axios';
const apiKey = '44fd846a8fbd886b31f763260ef2b77b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
import refs from './refs.js';
import * as auth from './authFirebase';
import * as dataToFirebase from './dataToFirebase.js';

import api from '../apiServises/api';

//ФУКНЦІЯ ЯКА ПЕРЕВІРЯЄ ЧИ Є В БД АЙДІШНИК ПО ЯКОМУ КЛІКНУЛИ
//І РОБИТЬ ВІДПОВІДНІ СТИЛІ ДЛЯ КНОПОК
function setModalBtnWatchStyles(event, button, hiddenBtn) {
  // console.log(event.type)
  //   console.log(event.target);
  //   console.log(button);
  //   console.log(hiddenBtn);
  // button.textContent = 'ADD TO WATCHED'
  // button.removeAttribute('disabled');
  if (event.target === button) {
    button.classList.add('hide');
    hiddenBtn.classList.remove('hide');
    dataToFirebase.addToWatch();
    console.log(123);
    return;
  }

  if (event.target === hiddenBtn) {
    button.classList.remove('hide');
    hiddenBtn.classList.add('hide');
    removeFromWatch();
    return;
  }
}

function setModalBtnQueueStyles(event, button, hiddenBtn) {
  if (event.target === button) {
    button.classList.add('hide');
    hiddenBtn.classList.remove('hide');
    dataToFirebase.addToQueue();
  }

  if (event.target === hiddenBtn) {
    button.classList.remove('hide');
    hiddenBtn.classList.add('hide');
    removeFromQueue();
  }
}

// ФУНКЦІЯ ДЛЯ ЩОБ ОТРИМАТИ АЙДІШНИКИ З БД І ПО НИМ ЗРОБИТИ ЗАПИТ НА СЕРВЕР
// ТА ВІД РЕНДЕРИТИ РОЗМІТКУ ПО ОТРИМАНИХ ДАННИХ
async function getMoviesWatched(uid) {
  const authoried = await auth.readUserData(uid);
  const data = await authoried.val();
  const watched = await data.watched;
  const promises = watched.map(id =>
    api.showFilmDetails(id).then(data => api.updateOneFilmInfo(data)),
  );
  // отримуємо масив промісів з об'єктами, в яких є повна інформація про фільм
  const updatedWatched = await Promise.all(promises);
  console.log(updatedWatched);
  return updatedWatched;
}

async function getMoviesQueue(uid) {
  const authoried = await auth.readUserData(uid);
  const data = await authoried.val();
  const queued = await data.queue;
  const promises = queued.map(id =>
    api.showFilmDetails(id).then(data => api.updateOneFilmInfo(data)),
  );
  // отримуємо масив промісів з об'єктами, в яких є повна інформація про фільм
  const updatedQueued = await Promise.all(promises);
  console.log(updatedQueued);
  return updatedQueued;

  // console.log(movieObjects);
  // movieObjects.map(
  //   ({ id, original_title, poster_path, genres, release_date }) => {
  //     const movie = [
  //       { id, original_title, poster_path, genres, release_date },
  //     ];
  //     updateGalleryMarkup(movie);
  //   },
  // );
}

// .catch(error => console.log('error'));

// ФУНКЦІЯ ЯКА ЧИСТИТЬ РОЗМІТКУ
// ВИДАЛЯЄ АЙДІШНИК ФІЛЬМА НА ЯКОМУ КЛІКНУЛИ КНОПКУ З БД
// І РЕНДЕРИТЬ НОВУ РОЗМІТКУ ПО АЙДІШНИКАХ ЯКІ ЛИШИЛИСЬ В БД
function removeFromWatch() {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    // refs.gallery.innerHTML = '';
    let uid = currentUser.uid;
    let movieId = localStorage.getItem('firebase-id');
    auth
      .readUserData(uid)
      .then(data => data.val())
      .then(data => {
        if (data.watched) {
          let watched = data.watched || [];
          if (watched.includes(movieId)) {
            let movieIndex = watched.indexOf(movieId);
            watched.splice(movieIndex, 1);
            console.log('NEW WATCHED', watched);
          }
          dataToFirebase.updateWatchedList(uid, [...watched]);
          // myLibrary.renderWatched();
        }
      });
    // console.log(watched);
  }
}

function removeFromQueue() {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    // refs.gallery.innerHTML = '';
    let uid = currentUser.uid;
    let movieId = localStorage.getItem('firebase-id');
    auth
      .readUserData(uid)
      .then(data => data.val())
      .then(data => {
        if (data.queue) {
          let queue = data.queue || [];
          if (queue.includes(movieId)) {
            let movieIndex = queue.indexOf(movieId);
            queue.splice(movieIndex, 1);
            console.log('NEW QUEUE', queue);
          }
          dataToFirebase.updateQueueList(uid, [...queue]);
          // myLibrary.renderQueue();
        }
      });
    // console.log(queue);
  }
}

//РЕНДЕР РОЗМІТКИ ПО ШАБЛОНУ
// function updateMarkup(movie) {
//     let markup = filmCard(movie);;
//     refs.gallery.insertAdjacentHTML('beforeend', markup);
// };

export {
  getMoviesWatched,
  removeFromWatch,
  getMoviesQueue,
  removeFromQueue,
  setModalBtnWatchStyles,
  setModalBtnQueueStyles,
};