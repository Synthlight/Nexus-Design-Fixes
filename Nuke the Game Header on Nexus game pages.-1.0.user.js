// ==UserScript==
// @name         Nuke the Game Header on Nexus game pages.
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove the godawful waste of space that is the game header section from Nexus game's root page. (Because I've zero expectations that anyone in charge of design will ever actually act on feedback like this.)
// @author       LordGregory
// @match        https://www.nexusmods.com/*
// @grant        none
// ==/UserScript==

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

(function() {
    getElementByXpath("//div[./nav[@aria-label=\"Breadcrumb navigation\"]]").remove();
})();