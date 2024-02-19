// ==UserScript==
// @name          Hidden Pages of NS
// @version       1.0
// @description   Access the sneaky NS pages with some easy hotkeys
// @author        Ambis
// @match         https://www.nationstates.net/*
// @grant         none
// ==/UserScript==
/*
* Keybinds:
* Alt+1 - Getting Help Page
* Alt+2 - Challenge Page
* Alt+3 - API Documentation Page
* Alt+4 - Cards Against NationStates Page
* Alt+5 - Daily Dumps Page
* Alt+6 - Boneyard
*/

(function () {
   'use strict';

    window.addEventListener('keyup',function(e) {
        // Check if Alt+1 is pressed
        if (e.altKey && e.code === 'Digit1') {
            window.location.href = 'https://nationstates.net/page=help';
        }

        // Check if Alt+2 is pressed
        if (e.altKey && e.code === 'Digit2') {
            window.location.href = 'https://www.nationstates.net/page=challenge';
        }

         // Check if Alt+3 is pressed
        if (e.altKey && e.code === 'Digit3') {
            window.location.href = 'https://www.nationstates.net/pages/api.html';
        }

         // Check if Alt+4 is pressed
        if (e.altKey && e.code === 'Digit4') {
            window.location.href = 'https://www.nationstates.net/page=cards';
        }

         // Check if Alt+5 is pressed
        if (e.altKey && e.code === 'Digit5') {
            window.location.href = 'https://www.nationstates.net/page=archive';
        }

         // Check if Alt+6 is pressed
        if (e.altKey && e.code === 'Digit6') {
            window.location.href = 'https://www.nationstates.net/page=boneyard';
        }
     });
})();
