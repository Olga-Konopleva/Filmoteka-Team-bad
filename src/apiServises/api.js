import axios from 'axios';

const apiKey = '44fd846a8fbd886b31f763260ef2b77b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export default {
  searchQuery: '',
  page: 1,
  // Функція повертає об'єкт url для основних запитів
  getUrl() {
    const urls = {};
    urls.searchUrl = `/search/movie?api_key=44fd846a8fbd886b31f763260ef2b77b&language=en-US&query==${this.query}&page=${this.page}&include_adult=false`;
    urls.popylarFilmsUrl = `/trending/movie/day?api_key=${apiKey}&page=${this.page}`;
    return urls;
  },

  async getUpdatedFilms(url) {
    try {
      // отримуємо масив результатів запитів для отримання повної інформації про фільми
      const filmsData = await this.getFullFilmsInfo(url);
      // проходимося по отриманому масиві і вибираємо всі об'єкти з повною інформацією про фільми
      const films = filmsData.map(({ data }) => data);
      // Для кожного об'єкта оновлюємо необхідну в ньому інформацію
      const updatedFilms = this.updateInfo(films);
       console.log(updatedFilms);
      return updatedFilms;
    } catch (error) {
      console.log(error);
    }
  },
  // Функція повертає всю інформацію по id фільма, знайденого за query
  async getFullFilmsInfo(url) {
    try {
      // Вибираємо id всіх отриманих об'єктів масиву за певним запитом
      const idList = await this.getFilmiIdList(url);
      // для кожного об'єкта, за його id, робимо ще один запит для отримання повної інформації про фільм
      const promises = idList.map(id =>
        axios.get(`movie/${id}?api_key=${apiKey}&language=en-US`),
      );
      // отримуємо масив промісів з об'єктами, в яких є повна інформація про фільм
      const films = await Promise.all(promises);
      // Не знаю чи тут збільшується сторінка, вже голова не варить😃
      this.page += 1;
      return films;
    } catch (error) {}
  },

  // getUpdatedPopularFilms -  вывод популярных фильмов за неделю
  async getUpdatedPopularFilms() {
    try {
      const filmsData = await this.getFullPopularFilms();
      const films = filmsData.map(({ data }) => data);
      const updatedFilms = this.updateInfo(films);
      return updatedFilms;
    } catch (error) {
      console.log(error);
    }
  },

  //showFilmDetails(id) - показ детальной инфы о фильме при показе модалке, айдишник добавлен в ли каждого фильма data-id
  async showFilmDetails(id) {
    try {
      const { data } = await axios.get(
        `/movie/${id}?api_key=${apiKey}&language=en-US`,
      );
      const results = await data;
      // console.log(results);
      // const updateFilm = this.updateInfo(results);
      return results;
    } catch (error) {
      console.log(error);
    }
  },
  // Функція оновлює дані для одного фільма
  updateOneFilmInfo(data) {
    const updatedfilm = [];
    updatedfilm.push(data);
    this.updateInfo(updatedfilm);
    return updatedfilm;
  },

  // Функція повертає id всіх фільмів
  async getFilmiIdList(url) {
    try {
      const { data } = await axios.get(url);
      const { results } = await data;
      const filmIdList = results.map(({ id }) => id);
      return filmIdList;
    } catch (error) {
      console.log(error);
    }
  },

  // Функція отримує масив об'єктів з повною інформацією про фільми, оновлює необхідні дані для ставки в шаблон і повертає новий масив об'єктів з необхідними даними
  updateInfo(data) {
    // проходимося по масиву об'єктів, для кожного об'єкта робимо необхідні зміни і додаємо їх в новий масив
    const updatedInfo = data.reduce((filmsList, film) => {
      // перетворюємо release_date в формат '***' (рік)
      film.release_date = film.release_date.slice(0, -6);
      // перетворюємо масив об'єктів з жанрами з формате [{ id: name},..., { id: name} ] в формат [name, ..., name]
      film.popularity = Math.floor(Math.ceil(film.popularity * 10)) / 10;

      film.genres = this.updateGenres(film.genres);
      // додаємо змінені об'єкти в  масив
      if (!film.backdrop_path) {
        film.backdrop_path = `https://via.placeholder.com/274x398?text=THE+PICTURE+IS+WANTED`;
      } else {
        film.backdrop_path = `https://themoviedb.org/t/p/w220_and_h330_face/${film.backdrop_path}`;
      }

      if (!film.poster_path) {
        film.poster_path = `https://via.placeholder.com/274x398?text=THE+PICTURE+IS+WANTED`;
      } else {
        film.poster_path = `https://themoviedb.org/t/p/w220_and_h330_face/${film.poster_path}`;
      }
      filmsList.push(film);
      return filmsList;
    }, []);
    return updatedInfo;
  },

  //согласно макета если жанров 3 -высвечиваются все 3 жанра,если больше - 2 слова плюс Other
  updateGenres(genres) {
    const result = genres.reduce((genresList, genre, index) => {
      const { name } = genre;
      if (index === 3) {
        const tooManyGenres = 'Other';
        genresList[2] = tooManyGenres;
        return genresList;
      } else if (index > 3) {
        return genresList;
      }

      genresList.push(name);
      return genresList;
    }, []);

    return result;
  },

  get query() {
    return this.searchQuery;
  },
  set query(search) {
    this.searchQuery = search;
  },

  resetPage() {
    this.page = 1;
  },
};
