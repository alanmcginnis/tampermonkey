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
    "file_location": "https://raw.githubusercontent.com/alanmcginnis/tampermonkey/main/general-localhost.js"
  }
  console.dir('🐵 Script Info', stats);
})();
