// ==UserScript==
// @name          Hidden Pages of NS
// @version       1.2
// @description   Access the sneaky NS pages with some easy hotkeys
// @author        Ambis
// @match         https://www.nationstates.net/*
// @grant         none
// ==/UserScript==
/*
* Keybinds:
* Alt+0 - Main User Page
* Alt+1 - Getting Help Page
* Alt+2 - Challenge Page
* Alt+3 - API Documentation Page
* Alt+4 - Cards Against NationStates Page
* Alt+5 - Daily Dumps Page
* Alt+6 - Boneyard
* Alt+7 - Polls Page
*/

(function () {
   'use strict';

    window.addEventListener('keyup',function(e) {
        // Main User Page
        if (e.altKey && e.code === 'Digit0') {
            window.location.href = 'https://nationstates.net';
        }

        // Getting Help Page
        if (e.altKey && e.code === 'Digit1') {
            window.location.href = 'https://nationstates.net/page=help';
        }

        // Challenge Page
        if (e.altKey && e.code === 'Digit2') {
            window.location.href = 'https://www.nationstates.net/page=challenge';
        }

         // API Documentation Page
        if (e.altKey && e.code === 'Digit3') {
            window.location.href = 'https://www.nationstates.net/pages/api.html';
        }

         // Cards Against NationStates Page
        if (e.altKey && e.code === 'Digit4') {
            window.location.href = 'https://www.nationstates.net/page=cards';
        }

         // Daily Dumps Page
        if (e.altKey && e.code === 'Digit5') {
            window.location.href = 'https://www.nationstates.net/page=archive';
        }

         // Boneyard
        if (e.altKey && e.code === 'Digit6') {
            window.location.href = 'https://www.nationstates.net/page=boneyard';
        }

        // Polls Page
        if (e.altKey && e.code === 'Digit7') {
            window.location.href = 'https://www.nationstates.net/page=polls'
        }
     });
})();
