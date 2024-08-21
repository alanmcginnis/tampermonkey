(function() {
  'use strict';

  document.querySelector('[id="zip_code"]').value = "97206"
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "9"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "7"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "2"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "0"}))
  document.querySelector('[id="zip_code"]').dispatchEvent(new KeyboardEvent("keydown", { key: "6"}