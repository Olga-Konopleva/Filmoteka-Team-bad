(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"Dv/5":function(e,t,n){},JKDa:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var o,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,l="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li data-micromodal-trigger="modal-1" class="grid__item gallery__film" data-id='+c(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:s)===l?o.call(i,{name:"id",hash:{},data:a,loc:{start:{line:2,column:79},end:{line:2,column:85}}}):o)+'>\r\n\r\n    <img class="gallery-film__image" src="'+c(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:s)===l?o.call(i,{name:"poster_path",hash:{},data:a,loc:{start:{line:4,column:42},end:{line:4,column:57}}}):o)+'" alt="'+c(typeof(o=null!=(o=u(n,"original_title")||(null!=t?u(t,"original_title"):t))?o:s)===l?o.call(i,{name:"original_title",hash:{},data:a,loc:{start:{line:4,column:64},end:{line:4,column:82}}}):o)+'" data-id='+c(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:s)===l?o.call(i,{name:"id",hash:{},data:a,loc:{start:{line:4,column:92},end:{line:4,column:98}}}):o)+' />\r\n    <h3 class="gallery-film__title" data-id='+c(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:s)===l?o.call(i,{name:"id",hash:{},data:a,loc:{start:{line:5,column:44},end:{line:5,column:50}}}):o)+">"+c(typeof(o=null!=(o=u(n,"original_title")||(null!=t?u(t,"original_title"):t))?o:s)===l?o.call(i,{name:"original_title",hash:{},data:a,loc:{start:{line:5,column:51},end:{line:5,column:69}}}):o)+'</h3>\r\n    <p class="gallery-film__features" data-id='+c(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:s)===l?o.call(i,{name:"id",hash:{},data:a,loc:{start:{line:6,column:46},end:{line:6,column:52}}}):o)+">"+c(typeof(o=null!=(o=u(n,"genres")||(null!=t?u(t,"genres"):t))?o:s)===l?o.call(i,{name:"genres",hash:{},data:a,loc:{start:{line:6,column:53},end:{line:6,column:63}}}):o)+" | "+c(typeof(o=null!=(o=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?o:s)===l?o.call(i,{name:"release_date",hash:{},data:a,loc:{start:{line:6,column:66},end:{line:6,column:82}}}):o)+"\r\n    </p>\r\n\r\n\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:11,column:9}}}))?o:""},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("Dv/5");var r=n("jmNG"),a=n("s9S4"),o=n.n(a),i={searchForm:document.querySelector("#search-form"),gallery:document.querySelector(".js-gallery"),galleryContainer:document.querySelector(".gallery__list"),searchGallery:document.querySelector(".search-list"),searchList:document.querySelector(".js-search-list"),input:document.querySelector(".js-input"),libraryBtn:document.querySelector("#libraryBtn"),homeBtn:document.querySelector("#homeBtn"),header:document.querySelector("#header"),formWrap:document.querySelector("#formWrap"),containerBtnLibrary:document.querySelector("#containerBtnLibrary"),logo:document.getElementById("logo"),buttonModal:document.querySelector(".btn-trigger"),divModal:document.querySelector(".modal__container"),spinner:document.querySelector(".spinner"),spinnerInversion:document.querySelector(".spinner-inversion"),body:document.querySelector("body"),footer:document.querySelector(".footer"),toolbar:document.querySelector(".toolbar"),modalThemeFilm:document.querySelector(".modal__theme-film"),modalThemeFooter:document.querySelector(".modal__theme-footer"),stateCheckbox:document.getElementById("theme-switch-toggle"),paginator:document.getElementById("pagination"),signInBtn:document.querySelector("#sign_in"),signOutBtn:document.querySelector("#sign_out"),userInfo:document.querySelector(".user-info"),modal:document.querySelector(".modal"),logoBtn:document.querySelector("#logo")},s=(n("/YXa"),n("lmye"),n("x3Br"),n("WB5j"),n("D/wG"),n("wCa+"),n("JBxO"),n("FdtR"),n("WoWj"),n("U00V"),n("wcNg"),n("czhI")),l=n.n(s),c=(n("bzha"),n("zrP5"),n("QJ3N"));function u(){Object(c.error)({text:"Some issues with the request answer! (Status 404) Please, try again later!",delay:8e3,mouseReset:!0,closer:!1,remove:!0,destroy:!0})}function d(){Object(c.error)({text:"Some issues with the server! (Status 500) Please, try to reload the page!",delay:8e3,mouseReset:!0,closer:!1,remove:!0,destroy:!0})}function m(){Object(c.error)({text:"No movies have been added yet. Please add something you like to your Library.",delay:5e3,mouseReset:!0,closer:!1,remove:!0,destroy:!0})}var h="44fd846a8fbd886b31f763260ef2b77b",f="https://api.themoviedb.org/3",p="https://via.placeholder.com/274x398?text=THE+PICTURE+IS+WANTED",v={mobile:"w342",tablet:"w500",desktop:"w780"};var g=function(e){return document.documentElement.clientWidth>=320&&document.documentElement.clientWidth<768?e.mobile:document.documentElement.clientWidth>=768&&document.documentElement.clientWidth<1024?e.tablet:document.documentElement.clientWidth>=1024?e.desktop:void 0};function y(e,t,n,r,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){y(o,r,a,i,s,"next",e)}function s(e){y(o,r,a,i,s,"throw",e)}i(void 0)}))}}var L={searchQuery:"",getUrl:function(e){var t={};return t.searchUrl=f+"/search/movie?api_key="+h+"&language=en-US&query=="+this.query+"&page="+e+"&include_adult=false",t.popylarFilmsUrl=f+"/trending/movie/week?api_key="+h+"&page="+e,t},getUpdatedFilms:function(e){var t=this;return b(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.a.get(e);case 3:return 404===(r=n.sent).status&&u(),500===r.status&&d(),n.next=8,t.getFullFilmsInfo(e);case 8:return a=n.sent,o=a.map((function(e){return e.data})),i=t.updateInfo(o),n.abrupt("return",i);case 14:n.prev=14,n.t0=n.catch(0),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))()},getFullFilmsInfo:function(e){var t=this;return b(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.a.get(e);case 3:return 404===(r=n.sent).status&&u(),500===r.status&&d(),n.next=8,t.getFilmiIdList(e);case 8:return a=n.sent,o=a.map((function(e){return l.a.get(f+"/movie/"+e+"?api_key="+h+"&language=en-US")})),n.next=12,Promise.all(o);case 12:return i=n.sent,n.abrupt("return",i);case 16:n.prev=16,n.t0=n.catch(0);case 18:case"end":return n.stop()}}),n,null,[[0,16]])})))()},getUpdatedPopularFilms:function(){var e=this;return b(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getFullPopularFilms();case 3:return n=t.sent,r=n.map((function(e){return e.data})),a=e.updateInfo(r),t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},showFilmDetails:function(e){var t=this;return b(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.a.get(f+"/movie/"+e+"?api_key="+h+"&language=en-US");case 3:return r=n.sent,a=r.data,n.next=7,a;case 7:return o=n.sent,n.next=10,t.getFilmTrailer(e);case 10:return i=n.sent,n.abrupt("return",Object.assign({idTrailer:i},o));case 14:n.prev=14,n.t0=n.catch(0),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))()},updateInfo:function(e){var t=this;return e.reduce((function(e,n){return n.release_date=n.release_date.slice(0,-6),n.genres=t.updateGenres(n.genres),n.poster_path?n.poster_path="https://themoviedb.org/t/p/"+g(v)+"/"+n.poster_path:n.poster_path=p,e.push(n),e}),[])},updateOneFilmInfo:function(e){var t=Object.assign({},e);return t.release_date=t.release_date.slice(0,-6),t.genres=t.genres.map((function(e){return e.name})),t.original_title=t.original_title.toUpperCase(),t.popularity=Math.floor(Math.ceil(10*t.popularity))/10,t.poster_path?t.poster_path="https://themoviedb.org/t/p/"+g(v)+"/"+t.poster_path:t.poster_path=p,t},getFilmiIdList:function(e){return b(regeneratorRuntime.mark((function t(){var n,r,a,o,i,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get(e);case 3:return 404===(n=t.sent).status&&u(),500===n.status&&d(),t.next=8,l.a.get(e);case 8:return r=t.sent,a=r.data,t.next=12,a;case 12:return o=t.sent,i=o.results,s=i.map((function(e){return e.id})),t.abrupt("return",s);case 18:t.prev=18,t.t0=t.catch(0),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()},updateGenres:function(e){return e.reduce((function(e,t,n){var r=t.name;if(3===n){return e[2]="Other",e}return n>3||e.push(r),e}),[])},get query(){return this.searchQuery},set query(e){this.searchQuery=e},resetPage:function(){this.page=1},getFilmTrailer:function(e){return b(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/movie/"+e+"/videos?api_key="+h+"&language=en-US");case 2:return n=t.sent,r=n.data,a=r.results,o=a[0],t.abrupt("return",o.key);case 7:case"end":return t.stop()}}),t)})))()}},_=i.divModal;function S(){var e=_.querySelector("button[data-action=open]"),t=_.querySelector("button[data-action=close]"),n=_.querySelector(".trailer-backdrop"),r=_.querySelector(".trailer"),a=_.querySelector(".video"),o=a.src,i=document.querySelector(".modal__overlay");function s(){a.src="",r.classList.remove("show-modal")}function l(e){e.target===e.currentTarget&&s()}e.addEventListener("click",(function(){a.src=o,r.classList.add("show-modal")})),t.addEventListener("click",s),n.addEventListener("click",l),i.addEventListener("click",l)}n("IvQZ"),n("4NM0");var w=n("SzhR");n("VwVG"),n("SHTW");function x(){Object(c.success)({text:"Logged-in successfully",delay:1e3,mouseReset:!0,closer:!0,remove:!0,destroy:!0})}function I(){Object(c.success)({text:"Logged-out successfully",delay:1e3,mouseReset:!0,closer:!0,remove:!0,destroy:!0})}function k(){Object(c.success)({text:"You added this film to Queue!",delay:2e3,mouseReset:!0,closer:!1,remove:!0,destroy:!0})}function q(){Object(c.success)({text:"You added this film to Watch!",delay:2e3,mouseReset:!0,closer:!1,remove:!0,destroy:!0})}function T(e){return w.a.database().ref("/users/"+e).once("value")}w.a.initializeApp({apiKey:"AIzaSyDQrwCAXRj5z9sNE9veCql6qr3bmszhNFY",authDomain:"filmoteka-project.firebaseapp.com",databaseURL:"https://filmoteka-project-default-rtdb.firebaseio.com",projectId:"filmoteka-project",storageBucket:"filmoteka-project.appspot.com",messagingSenderId:"1026378840836",appId:"1:1026378840836:web:8e08307292eb95ad9f2e51",measurementId:"G-JWBVEWQR7T"}),w.a.auth().onAuthStateChanged((function(e){if(e){i.signOutBtn.classList.remove("hide"),i.signInBtn.classList.add("hide");var t=e.displayName,n=e.photoURL,r=e.email,a=e.uid;i.userInfo.innerHTML='<img class="user-img" src="'+n+'"> \n            <div class="user-block">\n              <p class="user-name">'+t+'</p>\n              <p class="user-email">'+r+"</p>\n            </div>",console.log("Current user: "+t,"userId: "+a),T(a)}else i.signInBtn.classList.remove("hide"),i.signOutBtn.classList.add("hide"),i.userInfo.innerHTML=""})),i.signInBtn.addEventListener("click",(function(){var e=new w.a.auth.GoogleAuthProvider;w.a.auth().signInWithPopup(e).then((function(e){e.credential.accessToken;var t=e.user,n=t.uid,r=t.displayName,a=t.email,o=t.photoURL;console.log(t),console.log("Success!"),function(){var e=w.a.auth().currentUser.uid;return w.a.database().ref("/users/"+e).once("value")}().then((function(e){e.exists()?(console.log("User exist in database"),T(n)):(console.log("User NOT exist in database"),function(e,t,n,r){w.a.database().ref("users/"+e).set({username:t,email:n,profile_picture:r},(function(e){e?console.log("FAILED!!!"):console.log("SUCCESS")}))}(n,r,a,o))})),//! Sign in notification
setTimeout(x,1e3)})).catch((function(e){e.code;var t=e.message;e.email,e.credential;console.log(t),console.log("Failed!")}))})),i.signOutBtn.addEventListener("click",(function(){w.a.auth().signOut().then((function(){console.log("Sign-out successful."),i.userInfo.innerHTML=""})).catch((function(e){console.log("ERRROR!")})),setTimeout(I,500)}));n("hi3g"),n("uQK7"),n("Xlt+");var E=function(){var e=localStorage.getItem("watch"),t=JSON.parse(e);if(t)return t.map((function(e){return e.filmWatched}))},O=function(e){var t=localStorage.getItem("watch");if(t)(function(e){return-1===E().indexOf(String(e))})(e)&&function(e,t){var n=JSON.parse(e),r={filmWatched:t};n.push(r),localStorage.setItem("watch",JSON.stringify(n))}(t,e);else{var n=[{filmWatched:e}];localStorage.setItem("watch",JSON.stringify(n))}},U=function(){var e=localStorage.getItem("queue"),t=JSON.parse(e);if(t)return t.map((function(e){return e.filmQueue}))},F=function(e){var t=localStorage.getItem("queue");if(t)(function(e){return-1===U().indexOf(String(e))})(e)&&function(e,t){var n=JSON.parse(e),r={filmQueue:t};n.push(r),localStorage.setItem("queue",JSON.stringify(n))}(t,e);else{var n=[{filmQueue:e}];localStorage.setItem("queue",JSON.stringify(n))}};function R(e,t){w.a.database().ref("users/"+e).update({watched:t},(function(e){e?console.log("FAIL!"):console.log("DATA UPDATE SUCCESSFULLY")}))}function P(e,t){w.a.database().ref("users/"+e).update({queue:t},(function(e){e?console.log("FAIL!"):console.log("DATA UPDATE SUCCESSFULLY")}))}function j(){Object(c.alert)({text:"You removed this film from Queue!",delay:3e3,mouseReset:!0,closer:!1,remove:!0,destroy:!0})}function B(){Object(c.alert)({text:"You removed this film from Watch!!",delay:3e3,mouseReset:!0,closer:!1,remove:!0,destroy:!0})}var C=n("R4au"),N=n.n(C);function W(e,t,n,r,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}function D(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){W(o,r,a,i,s,"next",e)}function s(e){W(o,r,a,i,s,"throw",e)}i(void 0)}))}}function M(e,t,n){return e.target===t?(t.classList.add("hide"),n.classList.remove("hide"),function(){var e=w.a.auth().currentUser;if(e){var t=e.uid,n=localStorage.getItem("firebase-id");T(t).then((function(e){return e.val()})).then((function(e){var r=e.watched||[];r.includes(n)||R(t,[].concat(r,[n]))}))}else{var r=localStorage.getItem("firebase-id");O(r)}setTimeout(q,300)}(),void console.log(123)):e.target===n?(t.classList.remove("hide"),n.classList.add("hide"),void function(){var e=w.a.auth().currentUser;if(e){var t=e.uid,n=localStorage.getItem("firebase-id");T(t).then((function(e){return e.val()})).then((function(e){if(e.watched){var r=e.watched||[];if(r.includes(n)){var a=r.indexOf(n);r.splice(a,1),console.log("NEW WATCHED",r)}R(t,[].concat(r))}}))}else{var r=localStorage.getItem("firebase-id");a=r,o=E().indexOf(a),i=localStorage.getItem("watch"),(s=JSON.parse(i)).splice(o,1),localStorage.setItem("watch",JSON.stringify(s))}var a,o,i,s;setTimeout(B,300)}()):void 0}function A(e,t,n){e.target===t&&(t.classList.add("hide"),n.classList.remove("hide"),function(){var e=w.a.auth().currentUser;if(e){var t=e.uid,n=localStorage.getItem("firebase-id");T(t).then((function(e){return e.val()})).then((function(e){var r=e.queue||[];r.includes(n)||P(t,[].concat(r,[n]))}))}else{var r=localStorage.getItem("firebase-id");F(r)}setTimeout(k,300)}()),e.target===n&&(t.classList.remove("hide"),n.classList.add("hide"),function(){var e=w.a.auth().currentUser;if(e){var t=e.uid,n=localStorage.getItem("firebase-id");T(t).then((function(e){return e.val()})).then((function(e){if(e.queue){var r=e.queue||[];if(r.includes(n)){var a=r.indexOf(n);r.splice(a,1),console.log("NEW QUEUE",r)}P(t,[].concat(r))}}))}else{var r=localStorage.getItem("firebase-id");a=r,o=U().indexOf(a),i=localStorage.getItem("queue"),(s=JSON.parse(i)).splice(o,1),localStorage.setItem("queue",JSON.stringify(s))}var a,o,i,s;setTimeout(j,300)}())}function Q(e){return H.apply(this,arguments)}function H(){return(H=D(regeneratorRuntime.mark((function e(t){var n,r,a,o,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t&&(t=!1),n=w.a.auth().currentUser,r=E(),!n){e.next=16;break}return e.next=6,T(t);case 6:return a=e.sent,e.next=9,a.val();case 9:return o=e.sent,e.next=12,o.watched;case 12:if(e.t0=e.sent,e.t0){e.next=15;break}e.t0=[];case 15:r=e.t0;case 16:return 0===r.length&&setTimeout(m,300),i=r.map((function(e){return L.showFilmDetails(e).then((function(e){return L.updateOneFilmInfo(e)}))})),e.next=20,Promise.all(i);case 20:return s=e.sent,console.log(s),e.abrupt("return",s);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){return z.apply(this,arguments)}function z(){return(z=D(regeneratorRuntime.mark((function e(t){var n,r,a,o,s,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t&&(t=!1),n=w.a.auth().currentUser,r=U(),!n){e.next=16;break}return e.next=6,T(t);case 6:return a=e.sent,e.next=9,a.val();case 9:return o=e.sent,e.next=12,o.queue;case 12:if(e.t0=e.sent,e.t0){e.next=15;break}e.t0=[];case 15:r=e.t0;case 16:if(r&&0!==r.length){e.next=20;break}return s=N()(),i.gallery.insertAdjacentHTML("beforeend",s),e.abrupt("return");case 20:return 0===r.length&&setTimeout(m,300),l=r.map((function(e){return L.showFilmDetails(e).then((function(e){return L.updateOneFilmInfo(e)}))})),e.next=24,Promise.all(l);case 24:return c=e.sent,e.abrupt("return",c);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l.a.defaults.baseURL="https://api.themoviedb.org/3";var G=i.divModal;function V(e,t,n,r){var a=w.a.auth().currentUser;if(a){var o=localStorage.getItem("firebase-id");T(a.uid).then((function(e){return e.val()})).then((function(e){if(e.watched||e.queue){console.log("we are in!");var t=e.watched||[],n=e.queue||[];console.log("ok");var r=G.querySelector("button[data-id=addwatched]"),a=G.querySelector("button[data-id=removewatched]"),i=G.querySelector("button[data-id=addqueue]"),s=G.querySelector("button[data-id=removequeue]");t.includes(o)?r.classList.contains("hide")||(r.classList.add("hide"),a.classList.remove("hide")):(r.classList.remove("hide"),a.classList.add("hide")),n.includes(o)?i.classList.contains("hide")||(i.classList.add("hide"),s.classList.remove("hide")):(i.classList.remove("hide"),s.classList.add("hide"))}}))}else!function(e,t,n,r){var a=localStorage.getItem("firebase-id"),o=E()||[],i=U()||[];o.includes(a)?e.classList.contains("hide")||(e.classList.add("hide"),t.classList.remove("hide")):(e.classList.remove("hide"),t.classList.add("hide"));i.includes(a)?n.classList.contains("hide")||(n.classList.add("hide"),r.classList.remove("hide")):(n.classList.remove("hide"),r.classList.add("hide"))}(e,t,n,r)}function Y(e){var t=e.target.dataset.id;localStorage.setItem("firebase-id",t),L.showFilmDetails(t).then((function(e){return L.updateOneFilmInfo(e)})).then((function(e){return function(e){var t=o()(e);return i.divModal.insertAdjacentHTML("beforeend",t),t}(e)})).then((function(e){var t=i.divModal;return V(t.querySelector("button[data-id=addwatched]"),t.querySelector("button[data-id=removewatched]"),t.querySelector("button[data-id=addqueue]"),t.querySelector("button[data-id=removequeue]")),e})).then((function(e){var t,n,r,a;return t=G.querySelector("button[data-id=addwatched]"),n=G.querySelector("button[data-id=removewatched]"),r=G.querySelector("button[data-id=addqueue]"),a=G.querySelector("button[data-id=removequeue]"),G.addEventListener("click",(function(e){M(e,t,n),A(e,r,a)})),e})).then(S),i.divModal.innerHTML=""}i.gallery.addEventListener("click",(function(e){if("UL"===e.target.nodeName)return;Y(e),r.a.show("modal-1",{disableScroll:!0,disableFocus:!0})}));var K=n("JKDa"),X=n.n(K);var Z=function(e){var t=X()(e);return i.gallery.insertAdjacentHTML("beforeend",t),t},$=n("2c84"),ee=n.n($);n("lUE2");function te(e,t,n,r,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}function ne(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){te(o,r,a,i,s,"next",e)}function s(e){te(o,r,a,i,s,"throw",e)}i(void 0)}))}}var re=document.documentElement.clientWidth,ae={totalItems:1,itemsPerPage:1,visiblePages:3,page:1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"},oe=function(e){return re>=320&&re<768?e.map((function(e){return e})).slice(0,4):re>=768&&re<1024?e.map((function(e){return e})).slice(0,8):re>=1024?e.map((function(e){return e})).slice(0,9):void 0},ie=function(e){new ee.a("pagination",ae).on("beforeMove",function(){var t=ne(regeneratorRuntime.mark((function t(n){var r,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.page,t.next=3,L.getUpdatedFilms(L.getUrl(r)[e]);case 3:if(a=t.sent,o=oe(a),console.log(o),!o){t.next=14;break}i.gallery.innerHTML="",i.spinner.classList.remove("hide"),window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"}),Z(o),i.spinner.classList.add("hide"),t.next=15;break;case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},se=function(){var e=ne(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(L.getUrl(1)[t]);case 2:return n=e.sent,r=n.data,e.next=6,r;case 6:a=e.sent,o=a.total_pages,ae.totalItems=o,ie(t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function le(){Object(c.info)({text:"No matches found. Please, try another search query!",delay:4e3,mouseReset:!0,closer:!0})}function ce(e,t,n,r,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}function ue(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){ce(o,r,a,i,s,"next",e)}function s(e){ce(o,r,a,i,s,"throw",e)}i(void 0)}))}}function de(){return(de=ue(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getUpdatedFilms(L.getUrl(1).searchUrl);case 2:0===(t=e.sent).length&&le(),n=oe(t),Z(n),i.spinner.classList.add("hide"),i.spinnerInversion.classList.add("hide");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}re>=320&&re<768?ae.visiblePages=3:re>=768&&re<1024?ae.visiblePages=6:re>=1024&&(ae.visiblePages=9);var me=function(){return de.apply(this,arguments)};function he(e,t,n,r,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}function fe(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){he(o,r,a,i,s,"next",e)}function s(e){he(o,r,a,i,s,"throw",e)}i(void 0)}))}}function pe(){i.gallery.innerHTML="","light-theme"===localStorage.getItem("Theme")?i.spinner.classList.remove("hide"):i.spinnerInversion.classList.remove("hide"),ve()}function ve(){return ge.apply(this,arguments)}function ge(){return(ge=fe(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getUpdatedFilms(L.getUrl(1).popylarFilmsUrl);case 2:t=e.sent,n=oe(t),Z(n),i.spinner.classList.add("hide"),i.spinnerInversion.classList.add("hide"),i.paginator.classList.remove("hide");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.searchForm.addEventListener("submit",(function(e){e.preventDefault(),i.searchList.classList.add("is-hidden");var t=e.currentTarget;L.query=t.elements.query.value,i.gallery.textContent="","light-theme"===localStorage.getItem("Theme")?i.spinner.classList.remove("hide"):i.spinnerInversion.classList.remove("hide");L.resetPage(),me(),se("searchUrl")})),i.logoBtn.addEventListener("click",pe),i.homeBtn.addEventListener("click",pe),ve(),se("popylarFilmsUrl");var ye=n("jffb"),be=n.n(ye),Le=n("itA4"),_e=n.n(Le);i.input.addEventListener("input",be()((function(){if(console.log("work"),L.searchQuery=i.input.value,i.searchList.innerHTML="",!i.input.value)return void i.searchList.classList.add("is-hidden");L.getUpdatedFilms(L.getUrl().searchUrl).then((function(e){if(i.searchList.classList.remove("is-hidden"),e.length){var t=e.slice(0,5),n=_e()(t);i.searchList.insertAdjacentHTML("beforeend",n)}else i.searchList.classList.add("is-hidden")}))}),500)),i.searchGallery.addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;Y(e),r.a.show("modal-1",{disableScroll:!0,disableFocus:!0})}));n("QDHd");var Se=document.querySelector(".btnWatched"),we=document.querySelector(".btnQueue");function xe(){i.paginator.classList.add("hide"),"light-theme"===localStorage.getItem("Theme")?i.spinner.classList.remove("hide"):i.spinnerInversion.classList.remove("hide"),Se.classList.add("lib-btn-active"),Se.classList.remove("lib-btn-off"),we.classList.add("lib-btn-off"),we.classList.remove("lib-btn-active"),i.gallery.innerHTML="",w.a.auth().currentUser?Q(w.a.auth().currentUser.uid).then((function(e){Z(e)})).finally((function(){i.spinner.classList.add("hide"),i.spinnerInversion.classList.add("hide")})):Q().then((function(e){return Z(e)})).finally((function(){i.spinner.classList.add("hide"),i.spinnerInversion.classList.add("hide")}))}function Ie(e){i.header.classList.add("header__wrapper"),i.header.classList.remove("header__wrapper--library"),i.homeBtn.classList.add("nav__link--current"),i.libraryBtn.classList.remove("nav__link--current"),i.formWrap.classList.remove("hide"),i.containerBtnLibrary.classList.add("hide")}we.addEventListener("click",(function(){"light-theme"===localStorage.getItem("Theme")?i.spinner.classList.remove("hide"):i.spinnerInversion.classList.remove("hide");we.classList.remove("lib-btn-off"),we.classList.add("lib-btn-active"),Se.classList.remove("lib-btn-active"),void Se.classList.add("lib-btn-off"),i.gallery.innerHTML="",w.a.auth().currentUser?J(w.a.auth().currentUser.uid).then((function(e){return Z(e)})).finally((function(){i.spinner.classList.add("hide"),i.spinnerInversion.classList.add("hide")})):J().then((function(e){return Z(e)})).finally((function(){i.spinner.classList.add("hide"),i.spinnerInversion.classList.add("hide")}))})),Se.addEventListener("click",xe),i.libraryBtn.addEventListener("click",(function(){xe()})),i.libraryBtn.addEventListener("click",(function(e){i.header.classList.remove("header__wrapper"),i.header.classList.add("header__wrapper--library"),i.homeBtn.classList.remove("nav__link--current"),i.libraryBtn.classList.add("nav__link--current"),i.formWrap.classList.add("hide"),i.containerBtnLibrary.classList.remove("hide")})),i.homeBtn.addEventListener("click",Ie),i.logo.addEventListener("click",Ie);var ke=n("ZEAl"),qe={lines:13,length:28,width:17,radius:34,scale:.45,corners:.7,speed:1,rotate:1,animation:"spinner-line-fade-quick",direction:1,color:"#000000",fadeColor:"transparent",top:"0",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},Te=Object.assign({},qe,{color:"#ffffff"});function Ee(e){document.querySelector(e).addEventListener("click",(function(){r.a.show("modal-footer",{disableScroll:!0,disableFocus:!0})}))}new ke.a(qe).spin(i.spinner),new ke.a(Te).spin(i.spinnerInversion),Ee(".githubs");var Oe="light-theme",Ue="dark-theme";i.toolbar.addEventListener("change",(function(){if(i.stateCheckbox.checked)return i.body.classList.add(Ue),i.body.classList.remove(Oe),i.footer.classList.add(Ue),i.footer.classList.remove(Oe),i.modalThemeFilm.classList.add(Ue),i.modalThemeFilm.classList.remove(Oe),i.modalThemeFooter.classList.add(Ue),i.modalThemeFooter.classList.remove(Oe),void localStorage.setItem("Theme",Ue);i.body.classList.remove(Ue),i.body.classList.add(Oe),i.footer.classList.remove(Ue),i.footer.classList.add(Oe),i.modalThemeFilm.classList.remove(Ue),i.modalThemeFilm.classList.add(Oe),i.modalThemeFooter.classList.remove(Ue),i.modalThemeFooter.classList.add(Oe),localStorage.setItem("Theme",Oe)})),localStorage.getItem("Theme")===Ue&&(i.body.classList.add(Ue),i.footer.classList.add(Ue),i.modalThemeFilm.classList.add(Ue),i.modalThemeFooter.classList.add(Ue),i.stateCheckbox.checked=!0);var Fe=n("Ji62");Object(Fe.addBackToTop)({diameter:56,backgroundColor:"#ff6b08",textColor:"#fff",scrollDuration:1e3,zIndex:0})},R4au:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){return'<p class="library__no-film">\r\n    No films :(\r\n</p>'},useData:!0})},itA4:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){var o,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,l=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\r\n<li class="search-list-item" data-id='+l("function"==typeof(o=null!=(o=c(n,"id")||(null!=t?c(t,"id"):t))?o:s)?o.call(i,{name:"id",hash:{},data:a,loc:{start:{line:3,column:37},end:{line:3,column:43}}}):o)+">\r\n    "+l("function"==typeof(o=null!=(o=c(n,"original_title")||(null!=t?c(t,"original_title"):t))?o:s)?o.call(i,{name:"original_title",hash:{},data:a,loc:{start:{line:4,column:4},end:{line:4,column:22}}}):o)+"\r\n</li>\r\n\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:7,column:9}}}))?o:""},useData:!0})},s9S4:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,a){return e.escapeExpression(e.lambda(t,t))+" "},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o,i,s=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="modal__document" role="document">\r\n    <header class="modal__header">\r\n        <button class="modal__close" aria-label="Close modal" aria-controls="modal__container1"\r\n            data-micromodal-close></button>\r\n        <img class="modal__img" src=\''+u(typeof(i=null!=(i=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?i:l)===c?i.call(s,{name:"poster_path",hash:{},data:a,loc:{start:{line:11,column:37},end:{line:11,column:52}}}):i)+"' alt='poster "+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:l)===c?i.call(s,{name:"original_title",hash:{},data:a,loc:{start:{line:11,column:66},end:{line:11,column:84}}}):i)+'\'>\r\n\r\n    </header>\r\n\r\n    <main class="modal__content" id="modal-1-content">\r\n        <h2 class="modal__title">'+u(typeof(i=null!=(i=d(n,"title")||(null!=t?d(t,"title"):t))?i:l)===c?i.call(s,{name:"title",hash:{},data:a,loc:{start:{line:16,column:33},end:{line:16,column:42}}}):i)+'</h2>\r\n        <div class="modal__information">\r\n            <table width="100%" cellspacing="0" cellpadding="5">\r\n                <tr>\r\n                    <td class="modal__information--text1">Vote/Votes</td>\r\n                    <td class="modal__information--text2"><span\r\n                            class="modal__information--block"><b>'+u(typeof(i=null!=(i=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?i:l)===c?i.call(s,{name:"vote_average",hash:{},data:a,loc:{start:{line:22,column:65},end:{line:22,column:81}}}):i)+"</span> / "+u(typeof(i=null!=(i=d(n,"vote_count")||(null!=t?d(t,"vote_count"):t))?i:l)===c?i.call(s,{name:"vote_count",hash:{},data:a,loc:{start:{line:22,column:91},end:{line:22,column:105}}}):i)+'</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="modal__information--text1">Popularity</td>\r\n                    <td class="modal__information--text2"><b>'+u(typeof(i=null!=(i=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?i:l)===c?i.call(s,{name:"popularity",hash:{},data:a,loc:{start:{line:26,column:61},end:{line:26,column:75}}}):i)+'</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="modal__information--text1">Original Title</td>\r\n                    <td class="modal__information--text2"><b>'+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:l)===c?i.call(s,{name:"original_title",hash:{},data:a,loc:{start:{line:30,column:61},end:{line:30,column:79}}}):i)+'</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="modal__information--text1">Genre</td>\r\n                    <td class="modal__information--text2"><b>'+(null!=(o=d(n,"each").call(s,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:34,column:61},end:{line:34,column:95}}}))?o:"")+'</b></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><button data-action="open" class="modal__button-trailer">Watch trailer</button></td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <h3 class="modal__title2"><b>About</b></h3>\r\n        <p class="modal__text"><b>'+u(typeof(i=null!=(i=d(n,"overview")||(null!=t?d(t,"overview"):t))?i:l)===c?i.call(s,{name:"overview",hash:{},data:a,loc:{start:{line:43,column:34},end:{line:43,column:46}}}):i)+'</b></p>\r\n        <div class="modal__button-container">\r\n            <button id="add-watched" data-id=\'addwatched\' class="modal__button1">ADD TO WATCHED</button>\r\n            <button id="remove-watched" data-id=\'removewatched\' class="modal__button1 modal__button2 hide">REMOVE FROM\r\n                WATCHED</button>\r\n            <button id="add-queue" data-id=\'addqueue\' class="modal__button1">ADD TO QUEUE</button>\r\n            <button id="remove-queue" data-id=\'removequeue\' class="modal__button1 modal__button2 hide">REMOVE FROM\r\n                QUEUE</button>\r\n        </div>\r\n    </main>\r\n</div>\r\n\r\n<div class="trailer">\r\n    <div class="trailer-backdrop">\r\n        <div class="trailer-modal">\r\n            <iframe class="video" src="https://www.youtube.com/embed/'+u(typeof(i=null!=(i=d(n,"idTrailer")||(null!=t?d(t,"idTrailer"):t))?i:l)===c?i.call(s,{name:"idTrailer",hash:{},data:a,loc:{start:{line:58,column:69},end:{line:58,column:82}}}):i)+'" frameborder="0" allowfullscreen>\r\n            </iframe>\r\n\r\n            <button data-action="close" class="film-trailer-close"></button>\r\n        </div>\r\n    </div>\r\n</div>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.9e21582bfc3addaa2740.js.map