"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const searchBox = document.querySelector('.search-js');
const searchName = document.querySelector('.search__name--js');
const searchButton = document.querySelector('.search__button--js');
const reposBox = document.querySelector('.repos-box-js');
const repoList = document.querySelector('.repos-box__list--js');
const avatar = document.querySelector('.repos-box__header--js');
const repoName = document.querySelector('.repos-box__name--js');

const shake = () => {
  searchBox.classList.add('shake');
  setTimeout(e => {
    searchBox.classList.remove('shake');
  }, 500);
}
searchButton.addEventListener('click', e => {
  if (searchName.value) {
    fetch(`https://api.github.com/users/${searchName.value}/repos`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        avatar.innerHTML = '';
        avatar.innerHTML += `<img src="${resp[0].owner.avatar_url}" alt="Obrazek ${resp[0].owner.login}." class="repos-box__avatar"> <h2 class="repos-box__name">${resp[0].owner.login}</h2>`;
        repoList.innerHTML = '';
        for (const repos of resp) {
          repoList.innerHTML += `<li class="repos-box__item"><a href="${repos.html_url}" class="repos-box__link">${repos.name}</a></li>`
        }
        reposBox.style.opacity = "1";
      })
      .catch(error => {
        shake();
        reposBox.style.opacity = "0";
        console.log(error)
      })
  } else {
    searchBox.classList.add('shake');
    shake();
  }
})