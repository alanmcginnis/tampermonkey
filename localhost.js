(function () {
  var port = 8080;
  var scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.src = `//localhost:${port}/variation.js`;
  document.head.appendChild(scriptElement);

  var stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = `//localhost:${port}/variation.css`;
  document.head.appendChild(stylesheet);

  console.log(`Serving on ${port} from https://raw.githubusercontent.com/alanmcginnis/Scripts/main/TamperMonkey/pm.js?token=GHSAT0AAAAAACVLHXNQL7FQ57MNGE7ZX32GZVEACHQ`)
})();
