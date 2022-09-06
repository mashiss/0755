// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Bing
// @author       Skakovskaya Mariya
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let search_icon = document.getElementsById("search_icon")[0];
let keywords = ["купить авто", "купля продажа авто", "продать автомобиль", "купить автомобиль с пробегом"];
let keyword = keywords[getRandom(0, keywords.length)];

if (search_icon !== undefined) {
    document.getElementsByName("q")[0].value = keyword;
  search_icon.click();
} else {
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("auto.ru") !== -1) {
      console.log("нашел строку " + link[i]);
      let link = link[i];
      link.click();
      break;
    }
  }
}

function getRandom(min, max) {
   return Math.floor(Math.random()*(max - min) + min);
}
