/*global console, Worker, URL, Blob*/
/*jslint plusplus:true*/

// HTML5 Auto Clicker
// No JQuery!
(function vic(tabCount) {
    "use strict";

    // Set variables
    // Set as many variables as possible to save every possible byte during minifcation
    var doc = document,
        $ = function (query) {
            return doc.querySelector(query);
        },
        targetNode = $("button"),
        clickEvent = doc.createEvent("MouseEvents"),
        win = window,
        tabLimit = 6,
        newTab,
        newScript = doc.createElement("script"),
        response = "onmessage=function(){setInterval(function(){postMessage('')},100)};", // Fire message every 100ms
        worker = new Worker(URL.createObjectURL(new Blob([response])));

    // Fire events of a normal mouse click
    // http://stackoverflow.com/questions/24025165/simulating-a-mousedown-click-mouseup-sequence-in-tampermonkey
    function triggerMouseEvent(node, eventType) {
        clickEvent.initEvent(eventType, true, false);
        node.dispatchEvent(clickEvent);
    }

    function naturalClick(node) {
        //triggerMouseEvent(node, "mouseover");
        triggerMouseEvent(node, "mousedown");
        triggerMouseEvent(node, "mouseup");
        //triggerMouseEvent(node, "click");
    }

    function removeElement(node) {
        node.parentElement.removeChild(node);
    }

    // Remove sound, confetti, and headline bar
    triggerMouseEvent($(".style__mute___7U3sD"), "click");
    removeElement($("canvas"));
    removeElement($(".style__header___55ELS"));

    // Instantiate the auto-clicker via Webworker
    // https://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string
    worker.onmessage = function () {
        naturalClick(targetNode);
    };
    worker.postMessage("");

    // Create a new tab and inject this script into it as self-executing
    tabCount++;
    if (tabCount <= tabLimit) {
        newTab = win.open(win.location);
        newTab.window.addEventListener("load", function () {
            newScript.innerHTML = "(" + vic + "(" + tabCount + "));";
            newTab.document.body.appendChild(newScript);
        });
    }
}(1));
