// ==UserScript==
// @name         Papa M. | Localhost
// @description  Localhost for Papa's
// @author       Alan McGinnis
// @version      1.0.2
// @match        *://*.papamurphys.com/*
// @updateURL    https://raw.githubusercontent.com/alanmcginnis/tampermonkey/main/papas-localhost.user.js
// @downloadURL  https://raw.githubusercontent.com/alanmcginnis/tampermonkey/main/papas-localhost.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=papamurphys.com
// @grant        none
// ==/UserScript==

(function () {
  let port = 8080;
  var scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.src = `//localhost:${port}/variation.js`;
  document.head.appendChild(scriptElement);

  var stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = `//localhost:${port}/variation.css`;
  document.head.appendChild(stylesheet);

  let stats = {
    "port": `${port}`,
    "localhost": `http://localhost:${port}`,
    "file_location": "https://raw.githubusercontent.com/alanmcginnis/tampermonkey/main/papas-localhost.user.js"
  }

  console.log(`🐵 Script Info 👇`)
  console.dir(stats);
})();