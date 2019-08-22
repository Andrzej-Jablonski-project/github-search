!function(e){var n={};function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nconst searchBox = document.querySelector('.search-js');\nconst searchName = document.querySelector('.search__name--js');\nconst searchButton = document.querySelector('.search__button--js');\nconst reposBox = document.querySelector('.repos-box-js');\nconst repoList = document.querySelector('.repos-box__list--js');\nconst avatar = document.querySelector('.repos-box__header--js');\nconst repoFilter = document.querySelector('.repos-box__filter--js');\n\nconst shake = () => {\n  searchBox.classList.add('shake');\n  setTimeout(e => {\n    searchBox.classList.remove('shake');\n  }, 500);\n}\n// function search\nconst search = e => {\n  if (searchName.value) {\n    fetch(`https://api.github.com/users/${searchName.value}/repos`)\n      .then(resp => resp.json())\n      .then(resp => {\n        const repos = resp;\n        avatar.innerHTML = '';\n        avatar.innerHTML += `<img src=\"${repos[0].owner.avatar_url}\" alt=\"Obrazek ${repos[0].owner.login}.\" class=\"repos-box__avatar\"> <h2 class=\"repos-box__name\">${repos[0].owner.login}</h2>`;\n        repoList.innerHTML = '';\n        for (const repo of repos) {\n          const {\n            html_url,\n            name\n          } = repo;\n          repoList.innerHTML += `<li class=\"repos-box__item repos-box__item--js\"><a href=\"${html_url}\" class=\"repos-box__link repos-box__link--js\">${name}</a></li>`\n        }\n        reposBox.style.opacity = \"1\";\n      })\n      .catch(error => {\n        shake();\n        reposBox.style.opacity = \"0\";\n        console.log(error)\n      })\n  } else {\n    searchBox.classList.add('shake');\n    shake();\n  }\n}\n//filter\nrepoFilter.addEventListener('input', e => {\n  const repoItems = [...document.querySelectorAll('.repos-box__item--js')];\n\n  repoItems.forEach(repoItem => {\n    if (repoItem.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {\n      repoItem.style.display = 'list-item';\n    } else {\n      repoItem.style.display = 'none';\n    }\n  })\n})\n\nsearchButton.addEventListener('click', search);\nsearchName.addEventListener('keyup', e => e.key === 'Enter' ? search() : '');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGlCQUFpQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywwQkFBMEIsaUJBQWlCLHFCQUFxQiw0REFBNEQscUJBQXFCO0FBQzFMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsNEZBQTRGLFNBQVMsZ0RBQWdELEtBQUs7QUFDMUo7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1qcycpO1xuY29uc3Qgc2VhcmNoTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX25hbWUtLWpzJyk7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19idXR0b24tLWpzJyk7XG5jb25zdCByZXBvc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBvcy1ib3gtanMnKTtcbmNvbnN0IHJlcG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcG9zLWJveF9fbGlzdC0tanMnKTtcbmNvbnN0IGF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBvcy1ib3hfX2hlYWRlci0tanMnKTtcbmNvbnN0IHJlcG9GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwb3MtYm94X19maWx0ZXItLWpzJyk7XG5cbmNvbnN0IHNoYWtlID0gKCkgPT4ge1xuICBzZWFyY2hCb3guY2xhc3NMaXN0LmFkZCgnc2hha2UnKTtcbiAgc2V0VGltZW91dChlID0+IHtcbiAgICBzZWFyY2hCb3guY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKTtcbiAgfSwgNTAwKTtcbn1cbi8vIGZ1bmN0aW9uIHNlYXJjaFxuY29uc3Qgc2VhcmNoID0gZSA9PiB7XG4gIGlmIChzZWFyY2hOYW1lLnZhbHVlKSB7XG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtzZWFyY2hOYW1lLnZhbHVlfS9yZXBvc2ApXG4gICAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgIGNvbnN0IHJlcG9zID0gcmVzcDtcbiAgICAgICAgYXZhdGFyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBhdmF0YXIuaW5uZXJIVE1MICs9IGA8aW1nIHNyYz1cIiR7cmVwb3NbMF0ub3duZXIuYXZhdGFyX3VybH1cIiBhbHQ9XCJPYnJhemVrICR7cmVwb3NbMF0ub3duZXIubG9naW59LlwiIGNsYXNzPVwicmVwb3MtYm94X19hdmF0YXJcIj4gPGgyIGNsYXNzPVwicmVwb3MtYm94X19uYW1lXCI+JHtyZXBvc1swXS5vd25lci5sb2dpbn08L2gyPmA7XG4gICAgICAgIHJlcG9MaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBmb3IgKGNvbnN0IHJlcG8gb2YgcmVwb3MpIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBodG1sX3VybCxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9ID0gcmVwbztcbiAgICAgICAgICByZXBvTGlzdC5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cInJlcG9zLWJveF9faXRlbSByZXBvcy1ib3hfX2l0ZW0tLWpzXCI+PGEgaHJlZj1cIiR7aHRtbF91cmx9XCIgY2xhc3M9XCJyZXBvcy1ib3hfX2xpbmsgcmVwb3MtYm94X19saW5rLS1qc1wiPiR7bmFtZX08L2E+PC9saT5gXG4gICAgICAgIH1cbiAgICAgICAgcmVwb3NCb3guc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHNoYWtlKCk7XG4gICAgICAgIHJlcG9zQm94LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9KVxuICB9IGVsc2Uge1xuICAgIHNlYXJjaEJveC5jbGFzc0xpc3QuYWRkKCdzaGFrZScpO1xuICAgIHNoYWtlKCk7XG4gIH1cbn1cbi8vZmlsdGVyXG5yZXBvRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gIGNvbnN0IHJlcG9JdGVtcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVwb3MtYm94X19pdGVtLS1qcycpXTtcblxuICByZXBvSXRlbXMuZm9yRWFjaChyZXBvSXRlbSA9PiB7XG4gICAgaWYgKHJlcG9JdGVtLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICByZXBvSXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2xpc3QtaXRlbSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcG9JdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KVxufSlcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoKTtcbnNlYXJjaE5hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IGUua2V5ID09PSAnRW50ZXInID8gc2VhcmNoKCkgOiAnJyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);