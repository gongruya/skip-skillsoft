// ==UserScript==
// @name         Skip skillsoft
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Skip training videos on Skillsoft
// @author       Ruya Gong
// @match        https://library.skillport.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const btn = document.createElement('button');
    btn.textContent = 'Skip Video';
    btn.style.zIndex = 100000;
    btn.style.backgroundColor = '#fff';
    btn.style.position = 'absolute';
    btn.style.top = '50%';
    btn.style.left = '50%';
    btn.style.fontSize = "30px";
    btn.style.cursor = "pointer";

    document.body.appendChild(btn);

    function maybeSkipMedia() {
        const mediaList = document.querySelectorAll('video,audio');
        for (const media of mediaList) {
            if (media && Number.isFinite(media.duration)) {
                media.currentTime = media.duration;
            }
        }
    }

    btn.addEventListener('click', () => {
        maybeSkipMedia();
    });
    document.addEventListener("keypress", (e) => {
        if (e.key === 's') {
            maybeSkipMedia();
        }
    });
})();
