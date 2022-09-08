// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Bing
// @author       Skakovskaya Mariya
// @match        https://www.bing.com/*
// @match        https://www.auto.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links
let search_icon = document.getElementsById("search_icon")[0];
let keywords = ["купить авто", "купля продажа авто", "продать автомобиль", "купить автомобиль с пробегом"];
let keyword = keywords[getRandom(0, keywords.length)];
let bingInput = document.getElementsByName("q")[0];
let nextPage = document.getElementsByClassName("sb_pagN sb_pagN_bp b_widePag sb_bp");

if (search_icon !== undefined) {
  let i = 0;
  let timerId = setInterval(() => {
    bingInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      getTimeout(() => {
        search_icon.click();
      }, getRandom(1000, 2500));
    }
  }, 500);
} else if (location.hostname == "auto.ru") {
setTimeOut(() => {
let index = getRandom(0, links.length);
  if (getRandom(0, 101) > 70) {
  location.href = "https://www.auto.ru/";
  }
  if (links[index].href.indexOf("auto.ru") !== -1 {
      links[index].click();
      }
}, getRandom(2000, 3500))
}

} else {
  let nextBingPage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("auto.ru") !== -1) {
      console.log("нашел строку " + link[i]);
      let link = links[i];
      nextBingPage = false;
      getTimeout(() => {
        link.click();
      }, getRandom(3500, 4500));
      link.click();
      break;
    }
  }
  if (document.querySelector(".b_widePag sb_bp").innerText == "4" {
      nextBingPage = false;
      location.href = "https://www.bing.com/";
      }
  if (nextBingPage) {
    setTimeout(() => {
    nextPage.click();
    }, getRandom(4000, 5000));
  }
}

function getRandom(min, max) {
   return Math.floor(Math.random()*(max - min) + min);
}
