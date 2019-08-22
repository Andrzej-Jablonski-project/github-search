"use strict";

const searchBox = document.querySelector('.search-js');
const searchName = document.querySelector('.search__name--js');
const searchButton = document.querySelector('.search__button--js');
const reposBox = document.querySelector('.repos-box-js');
const repoList = document.querySelector('.repos-box__list--js');
const avatar = document.querySelector('.repos-box__header--js');
const repoFilter = document.querySelector('.repos-box__filter--js');

const shake = () => {
  searchBox.classList.add('shake');
  setTimeout(e => {
    searchBox.classList.remove('shake');
  }, 500);
}
// function search
const search = e => {
  if (searchName.value) {
    fetch(`https://api.github.com/users/${searchName.value}/repos`)
      .then(resp => resp.json())
      .then(resp => {
        const repos = resp;
        avatar.innerHTML = '';
        avatar.innerHTML += `<img src="${repos[0].owner.avatar_url}" alt="Obrazek ${repos[0].owner.login}." class="repos-box__avatar"> <h2 class="repos-box__name">${repos[0].owner.login}</h2>`;
        repoList.innerHTML = '';
        for (const repo of repos) {
          const {
            html_url,
            name
          } = repo;
          repoList.innerHTML += `<li class="repos-box__item repos-box__item--js"><a href="${html_url}" class="repos-box__link repos-box__link--js">${name}</a></li>`
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
}
//filter
repoFilter.addEventListener('input', e => {
  const repoItems = [...document.querySelectorAll('.repos-box__item--js')];

  repoItems.forEach(repoItem => {
    if (repoItem.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
      repoItem.style.display = 'list-item';
    } else {
      repoItem.style.display = 'none';
    }
  })
})

searchButton.addEventListener('click', search);
searchName.addEventListener('keyup', e => e.key === 'Enter' ? search() : '');