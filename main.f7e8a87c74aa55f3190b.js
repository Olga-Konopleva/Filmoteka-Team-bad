(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"BG/t":function(e,t){var n=document.querySelector(".btnWatched"),r=document.querySelector(".btnQueue");r.addEventListener("click",(function(){r.classList.remove("lib-btn-off"),r.classList.add("lib-btn-active"),n.classList.remove("lib-btn-active"),n.classList.add("lib-btn-off")})),n.addEventListener("click",(function(){n.classList.add("lib-btn-active"),n.classList.remove("lib-btn-off"),r.classList.add("lib-btn-off"),r.classList.remove("lib-btn-active")}))},"Dv/5":function(e,t,n){},JKDa:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var l,o=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="grid__item gallery__film" data-id='+c(typeof(l=null!=(l=u(n,"id")||(null!=t?u(t,"id"):t))?l:i)===s?l.call(o,{name:"id",hash:{},data:a,loc:{start:{line:2,column:45},end:{line:2,column:51}}}):l)+'>\r\n    <img class="gallery-film__image" src="'+c(typeof(l=null!=(l=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?l:i)===s?l.call(o,{name:"poster_path",hash:{},data:a,loc:{start:{line:3,column:42},end:{line:3,column:57}}}):l)+'" alt="'+c(typeof(l=null!=(l=u(n,"original_title")||(null!=t?u(t,"original_title"):t))?l:i)===s?l.call(o,{name:"original_title",hash:{},data:a,loc:{start:{line:3,column:64},end:{line:3,column:82}}}):l)+'" />\r\n    <h3 class="gallery-film__title">'+c(typeof(l=null!=(l=u(n,"original_title")||(null!=t?u(t,"original_title"):t))?l:i)===s?l.call(o,{name:"original_title",hash:{},data:a,loc:{start:{line:4,column:36},end:{line:4,column:54}}}):l)+'</h3>\r\n    <p class="gallery-film__features">'+c(typeof(l=null!=(l=u(n,"genres")||(null!=t?u(t,"genres"):t))?l:i)===s?l.call(o,{name:"genres",hash:{},data:a,loc:{start:{line:5,column:38},end:{line:5,column:48}}}):l)+" | "+c(typeof(l=null!=(l=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?l:i)===s?l.call(o,{name:"release_date",hash:{},data:a,loc:{start:{line:5,column:51},end:{line:5,column:67}}}):l)+"\r\n    </p>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var l;return null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:8,column:9}}}))?l:""},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("Dv/5"),n("RtS0"),n("3dw1");var r=n("jmNG"),a=n("s9S4"),l=n.n(a),o={searchForm:document.querySelector("#search-form"),gallery:document.querySelector(".js-gallery"),galleryContainer:document.querySelector(".gallery__list"),searchList:document.querySelector(".js-search-list"),input:document.querySelector(".js-input"),libraryBtn:document.querySelector("#libraryBtn"),homeBtn:document.querySelector("#homeBtn"),header:document.querySelector("#header"),formWrap:document.querySelector("#formWrap"),containerBtnLibrary:document.querySelector("#containerBtnLibrary"),logo:document.getElementById("logo"),buttonModal:document.querySelector(".btn-trigger"),divModal:document.querySelector(".modal__container"),spinner:document.querySelector(".spinner-js"),body:document.querySelector("body"),footer:document.querySelector(".footer"),toolbar:document.querySelector(".toolbar"),stateCheckbox:document.getElementById("theme-switch-toggle")},i=(n("/YXa"),n("lmye"),n("x3Br"),n("WB5j"),n("D/wG"),n("JBxO"),n("FdtR"),n("WoWj"),n("U00V"),n("wcNg"),n("czhI")),s=n.n(i);function c(e,t,n,r,a,l,o){try{var i=e[l](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){c(l,r,a,o,i,"next",e)}function i(e){c(l,r,a,o,i,"throw",e)}o(void 0)}))}}var d="44fd846a8fbd886b31f763260ef2b77b";s.a.defaults.baseURL="https://api.themoviedb.org/3";var m={searchQuery:"",page:1,getUrl:function(){var e={};return e.searchUrl="/search/movie?api_key=44fd846a8fbd886b31f763260ef2b77b&language=en-US&query=="+this.query+"&page="+this.page+"&include_adult=false",e.popylarFilmsUrl="/trending/movie/day?api_key="+d+"&page="+this.page,e},getUpdatedFilms:function(e){var t=this;return u(regeneratorRuntime.mark((function n(){var r,a,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.getFullFilmsInfo(e);case 3:return r=n.sent,a=r.map((function(e){return e.data})),l=t.updateInfo(a),console.log(l),n.abrupt("return",l);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},getFullFilmsInfo:function(e){var t=this;return u(regeneratorRuntime.mark((function n(){var r,a,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.getFilmiIdList(e);case 3:return r=n.sent,a=r.map((function(e){return s.a.get("movie/"+e+"?api_key="+d+"&language=en-US")})),n.next=7,Promise.all(a);case 7:return l=n.sent,t.page+=1,n.abrupt("return",l);case 12:n.prev=12,n.t0=n.catch(0);case 14:case"end":return n.stop()}}),n,null,[[0,12]])})))()},getUpdatedPopularFilms:function(){var e=this;return u(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getFullPopularFilms();case 3:return n=t.sent,r=n.map((function(e){return e.data})),a=e.updateInfo(r),t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},showFilmDetails:function(e){return u(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/movie/"+e+"?api_key="+d+"&language=en-US");case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getFilmiIdList:function(e){return u(regeneratorRuntime.mark((function t(){var n,r,a,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get(e);case 3:return n=t.sent,r=n.data,t.next=7,r;case 7:return a=t.sent,l=a.results,o=l.map((function(e){return e.id})),t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},updateInfo:function(e){var t=this;return e.reduce((function(e,n){return n.release_date=n.release_date.slice(0,-6),n.genres=t.updateGenres(n.genres),n.poster_path?n.poster_path="https://themoviedb.org/t/p/w220_and_h330_face/"+n.poster_path:n.poster_path="https://via.placeholder.com/274x398?text=THE+PICTURE+IS+WANTED",e.push(n),e}),[])},updateGenres:function(e){return e.reduce((function(e,t,n){var r=t.name;if(3===n){return e[2]="Other",e}return n>3||e.push(r),e}),[])},get query(){return this.searchQuery},set query(e){this.searchQuery=e},resetPage:function(){this.page=1}};function p(){o.gallery.querySelectorAll("li").forEach((function(e){return e.addEventListener("click",h)})),r.a.init({disableScroll:!0,disableFocus:!0})}function h(e){var t=e.currentTarget.dataset.id;console.log(t),m.showFilmDetails(t).then(f).then(p),o.divModal.innerHTML=""}function f(e){var t=l()(e);o.divModal.insertAdjacentHTML("beforeend",t)}o.gallery.addEventListener("click",p);n("QDHd");var v=n("JKDa"),g=n.n(v);var _=function(e){var t=g()(e);return o.gallery.insertAdjacentHTML("beforeend",t),t};var b=function(){m.getUpdatedFilms(m.getUrl().searchUrl).then((function(e){return _(e)})).finally((function(){o.spinner.classList.add("hide")}))};o.searchForm.addEventListener("submit",(function(e){e.preventDefault(),o.searchList.classList.add("is-hidden");var t=e.currentTarget;m.query=t.elements.query.value,o.gallery.textContent="",o.spinner.classList.remove("hide"),m.resetPage(),b()})),r.a.init({onShow:function(e){return console.info(e.id+" is shown")},onClose:function(e){return console.info(e.id+" is hidden")},openTrigger:"data-custom-open",closeTrigger:"data-custom-close",openClass:"is-open",disableScroll:!0,disableFocus:!0,awaitOpenAnimation:!0,awaitCloseAnimation:!0,debugMode:!0}),function(e){document.querySelector(e).addEventListener("click",(function(){r.a.show("modal-footer")}))}("#students"),m.getUpdatedFilms(m.getUrl().popylarFilmsUrl).then(_);var y=n("jffb"),L=n.n(y),w=n("itA4"),x=n.n(w);o.input.addEventListener("input",L()((function(){if(console.log("work"),m.searchQuery=o.input.value,o.searchList.innerHTML="",!o.input.value)return void o.searchList.classList.add("is-hidden");m.getUpdatedFilms(m.getUrl().searchUrl).then((function(e){if(o.searchList.classList.remove("is-hidden"),e.length){var t=e.slice(0,5),n=x()(t);o.searchList.insertAdjacentHTML("beforeend",n)}else o.searchList.classList.add("is-hidden")}))}),500));n("BG/t");function k(e){o.header.classList.add("header__wrapper"),o.header.classList.remove("header__wrapper--library"),o.homeBtn.classList.add("nav__link--current"),o.libraryBtn.classList.remove("nav__link--current"),o.formWrap.classList.remove("hide"),o.containerBtnLibrary.classList.add("hide")}o.libraryBtn.addEventListener("click",(function(e){o.header.classList.remove("header__wrapper"),o.header.classList.add("header__wrapper--library"),o.homeBtn.classList.remove("nav__link--current"),o.libraryBtn.classList.add("nav__link--current"),o.formWrap.classList.add("hide"),o.containerBtnLibrary.classList.remove("hide")})),o.homeBtn.addEventListener("click",k),o.logo.addEventListener("click",k);new(n("ZEAl").a)({lines:13,length:28,width:17,radius:34,scale:.45,corners:.7,speed:1,rotate:1,animation:"spinner-line-fade-quick",direction:1,color:"#000000",fadeColor:"transparent",top:"0",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"}).spin(o.spinner);var S="light-theme",E="dark-theme";o.toolbar.addEventListener("change",(function(){if(o.stateCheckbox.checked)return o.body.classList.add(E),o.body.classList.remove(S),o.footer.classList.add(E),o.footer.classList.remove(S),void localStorage.setItem("Theme",E);o.body.classList.remove(E),o.body.classList.add(S),o.footer.classList.remove(E),o.footer.classList.add(S),localStorage.setItem("Theme",S)})),localStorage.getItem("Theme")===E&&(o.body.classList.add(E),o.footer.classList.add(E),o.stateCheckbox.checked=!0)},itA4:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var l,o=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,s=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="search-list-item" data-id:'+s("function"==typeof(l=null!=(l=c(n,"id")||(null!=t?c(t,"id"):t))?l:i)?l.call(o,{name:"id",hash:{},data:a,loc:{start:{line:2,column:37},end:{line:2,column:43}}}):l)+">\r\n    "+s("function"==typeof(l=null!=(l=c(n,"original_title")||(null!=t?c(t,"original_title"):t))?l:i)?l.call(o,{name:"original_title",hash:{},data:a,loc:{start:{line:3,column:4},end:{line:3,column:22}}}):l)+"\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var l;return null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:5,column:9}}}))?l:""},useData:!0})},s9S4:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var l,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression("function"==typeof(l=null!=(l=o(n,"name")||(null!=t?o(t,"name"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:a,loc:{start:{line:28,column:77},end:{line:28,column:85}}}):l)+" "},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var l,o,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\r\n<div class="modal__document" role="document">\r\n    <header class="modal__header">\r\n    <button class="modal__close" aria-label="Close modal" aria-controls="modal__container1" data-micromodal-close></button>\r\n\r\n    <img class="modal__img" src=\'https://www.themoviedb.org/t/p/w220_and_h330_face/'+u(typeof(o=null!=(o=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?o:s)===c?o.call(i,{name:"poster_path",hash:{},data:a,loc:{start:{line:6,column:83},end:{line:6,column:98}}}):o)+"' alt='poster "+u(typeof(o=null!=(o=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?o:s)===c?o.call(i,{name:"original_title",hash:{},data:a,loc:{start:{line:6,column:112},end:{line:6,column:130}}}):o)+'\'>\r\n    \r\n    </header>\r\n\r\n    <main class="modal__content" id="modal-1-content">          \r\n        <h2 class="modal__title">'+u(typeof(o=null!=(o=d(n,"title")||(null!=t?d(t,"title"):t))?o:s)===c?o.call(i,{name:"title",hash:{},data:a,loc:{start:{line:11,column:33},end:{line:11,column:42}}}):o)+'</h2>\r\n        <div class="modal__information">\r\n            <table width="100%" cellspacing="0" cellpadding="5">\r\n                <tr>\r\n                    <td class="modal__information--text1">Vote/Votes</td>\r\n                    <td class="modal__information--text2"><span class="modal__information--block"><b>'+u(typeof(o=null!=(o=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?o:s)===c?o.call(i,{name:"vote_average",hash:{},data:a,loc:{start:{line:16,column:101},end:{line:16,column:117}}}):o)+"</span> / "+u(typeof(o=null!=(o=d(n,"vote_count")||(null!=t?d(t,"vote_count"):t))?o:s)===c?o.call(i,{name:"vote_count",hash:{},data:a,loc:{start:{line:16,column:127},end:{line:16,column:141}}}):o)+'</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="modal__information--text1">Popularity</td>\r\n                    <td class="modal__information--text2"><b>'+u(typeof(o=null!=(o=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?o:s)===c?o.call(i,{name:"popularity",hash:{},data:a,loc:{start:{line:20,column:61},end:{line:20,column:75}}}):o)+'</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="modal__information--text1">Original Title</td>\r\n                    <td class="modal__information--text2"><b>'+u(typeof(o=null!=(o=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?o:s)===c?o.call(i,{name:"original_title",hash:{},data:a,loc:{start:{line:24,column:61},end:{line:24,column:79}}}):o)+'</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="modal__information--text1">Genre</td>\r\n                    <td class="modal__information--text2"><b>'+(null!=(l=d(n,"each").call(i,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:28,column:61},end:{line:28,column:95}}}))?l:"")+'</b></td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <h3 class="modal__title2"><b>About</b></h3>\r\n        <p class="modal__text"><b>'+u(typeof(o=null!=(o=d(n,"overview")||(null!=t?d(t,"overview"):t))?o:s)===c?o.call(i,{name:"overview",hash:{},data:a,loc:{start:{line:34,column:34},end:{line:34,column:46}}}):o)+'</b></p>\r\n        \r\n            <ul class="modal__button-container">\r\n        <li><button id="add-watched" class="modal__button">ADD TO WATCHED</button></li>\r\n        <li><button id="remove-watched" class="modal__button hide">REMOVE FROM WATCHED</button></li>\r\n        <li><button id="add-queue" class="modal__button">ADD TO QUEUE</button></li>\r\n        <li><button id="remove-queue" class="modal__button hide">REMOVE FROM QUEUE</button></li>\r\n            </ul>\r\n        \r\n    </main>\r\n</div>\r\n\r\n'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.f7e8a87c74aa55f3190b.js.map