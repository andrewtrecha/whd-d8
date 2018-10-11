/** Used Only For Touch Devices **/
!function(e,n){
// classie.js https://github.com/desandro/classie/blob/master/classie.js
// class helper functions from bonzo https://github.com/ded/bonzo
function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}
// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
function s(e,n){var t;(a(e,n)?c:o)(e,n)}
// for touch devices: add class cs-hover to the figures when touching the items
if(Modernizr.touch){var a,o,c;c="classList"in document.documentElement?(a=function(e,n){return e.classList.contains(n)},o=function(e,n){e.classList.add(n)},function(e,n){e.classList.remove(n)}):(a=function(e,n){return t(n).test(e.className)},o=function(e,n){a(e,n)||(e.className=e.className+" "+n)},function(e,n){e.className=e.className.replace(t(n)," ")});var i={
// full names
hasClass:a,addClass:o,removeClass:c,toggleClass:s,
// short names
has:a,add:o,remove:c,toggle:s};
// transport
"function"==typeof define&&define.amd?
// AMD
define(i):
// browser global
window.classie=i,[].slice.call(document.querySelectorAll("ul.grid > li > figure")).forEach(function(e,n){e.querySelector("figcaption > a").addEventListener("touchstart",function(e){e.stopPropagation()},!1),e.addEventListener("touchstart",function(e){i.toggle(this,"cs-hover")},!1)})}}(window.jQuery,window._);