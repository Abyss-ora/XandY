// ==UserScript==
// @name         XandY
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  This code tracks your curser on the webpage and shows you your X and Y coordinates. Feel free to change the code!
// @author       -{Abyss⌬}-ora
// @match        https://greasyfork.org/en/scripts/414921-xandy
// @match        https://diep.io/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('mousemove', function (e) {document.getElementById('x-value').textContent = e.x;document.getElementById('y-value').textContent = e.y;});
    var xAndY = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(xAndY);
    xAndY.style = "position:absolute; top:-10px; left:300px; font-family: 'Monoton', cursive; color: #FFFFFF; font-size: 20px; text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px";
    xAndY.innerHTML = `<p>DrägênMįstic-{Abyss⌬}-ora's &#160; XandY! &#160; &#160; X: <span id="x-value"></span> Y: <span id="y-value"></span></p> <style>@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');</style>`;

})();