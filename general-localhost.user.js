// ==UserScript==
// @name         Localhost Injection
// @description  Injection for xoptcli
// @author       Alan McGinnis
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/alanmcginnis/tampermonkey/main/general-localhost.meta.js
// @downloadURL  https://raw.githubusercontent.com/alanmcginnis/tampermonkey/main/general-localhost.user.js
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
    "file_location": "https://raw.githubusercontent.com/alanmcginnis/tampermonkey/main/general-localhost.user.js"
  }
  console.log(`🐵 Script Info 👇`)
  console.dir(stats);
})();
