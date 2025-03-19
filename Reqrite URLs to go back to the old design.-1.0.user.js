// ==UserScript==
// @name         Reqrite URLs to go back to the old design.
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Rewrites the main game page URL to remove the `games/` part which goes back to the old design.
// @author       LordGregory
// @match        https://www.nexusmods.com/games/*
// @grant        none
// ==/UserScript==

(function() {
    var currentUrl = document.location.href;
    var newUrl = currentUrl.replace("/games/", "/");
    console.log(newUrl);
    location.replace(newUrl);
})();