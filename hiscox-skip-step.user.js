// ==UserScript==
// @name         Hiscox | Skip Zip
// @version      1.0.3
// @description  skip zip on usuat.hiscox.com for qa
// @author       Darius Capizzi
// @match        https://usuat.hiscox.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hiscox.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.querySelector('[id="zip_code"]').value = "97206"
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "9"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "7"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "2"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "0"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "6"}))
  document.querySelector('[id="zip_code"]').value = "97206"
  document.querySelector('[id="zip_code"]').dispatchEvent(new Event('change'));
  document.querySelector('[id="zip_code"]').dispatchEvent(new Event('input'));
  document.querySelector('[id="zip_code"]').blur();
  // document.querySelector('[id="zip_code"]').input();



  document.querySelector('[data-quote-gtm-action="Start Quote"]').click()
  // Your code here...
})();

(function() {
  'use strict';

  document.querySelector('[id="zip_code"]').value = "97206"
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "9"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "7"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "2"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "0"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "6"}))
  document.querySelector('[id="zip_code"]').value = "97206"
  document.querySelector('[id="zip_code"]').dispatchEvent(new Event('change'));
  document.querySelector('[id="zip_code"]').dispatchEvent(new Event('input'));
  document.querySelector('[id="zip_code"]').blur();
  // document.querySelector('[id="zip_code"]').input();



  document.querySelector('[data-quote-gtm-action="Start Quote"]').click()
  // Your code here...
})();