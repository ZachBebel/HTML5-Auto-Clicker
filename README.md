# HTML5 Auto Clicker
Browser inspector console script designed to smash a button fast, consistently, and with as many parallel instances as you desire.

Created for <a href="https://www.facebook.com/superdeluxevideo/videos/459399034404652/" target="_blank">Super Deluxe's Vic Berger's Airhorns For America Campaign</a>.

This script was designed to work around the server request restriction per page (100ms frequency) by simply running the script in multiple pages simulataneously. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers" target="_blank">Web Workers</a> were used to enable consistency of click intervals through background threading.

**To use:**
1. Visit <a href="http://www.superdeluxe.com/vic" target="_blank">http://www.superdeluxe.com/vic</a> (Chrome works best).
2. Sign-in using Facebook or Twitter (Email is currently broken).
3. *Right-click* anywhere on the page.
4. Select *Inspect* from the menu.
5. In the Inspector, click on the *Console* tab.
6. In the textbox, paste the following script:

```javascript
!function e(n){function t(e,n){u.initEvent(n,!0,!1),e.dispatchEvent(u)}function o(e){t(e,"mousedown"),t(e,"mouseup")}function s(e){e.parentElement.removeChild(e)}var i,c=document,r=function(e){return c.querySelector(e)},a=r("button"),u=c.createEvent("MouseEvents"),d=window,l=6,p=c.createElement("script"),m="onmessage=function(){setInterval(function(){postMessage('')},100)};",w=new Worker(URL.createObjectURL(new Blob([m])));t(r(".style__mute___7U3sD"),"click"),s(r("canvas")),s(r(".style__header___55ELS")),w.onmessage=function(){o(a)},w.postMessage(""),n++,n>l||(i=d.open(d.location),i.window.addEventListener("load",function(){p.innerHTML="("+e+"("+n+"));",i.document.body.appendChild(p)}))}(1);
```

7. Press the *ENTER* key to execute. 5 new tabs will open.
8. Open a **second** browser window and repeat the process once more.

**Note:**
* Multiple browsers may be used simultaneously (e.g., Chrome, Firefox, Safari, etc.).

Through my own testing:
* Chrome is the most performant browser for this task.
* The performant maximum per browser is 12 tabs - 6 tabs in each of 2 windows.
* **12 tabs = ~120 clicks per second, or _1,000,000 clicks every ~139 minutes_**.


*If just 1,000 people ran this script as instructed, this campaign would be complete in under 3 hours. Please share with your friends to help support this dying campaign!*
