/* jshint esnext: true, browser: true, easy: true */
(function(window) {
    'use strict';
    // Prefetch it to cache, then change location.
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'http://www.rtve.es/m/noticias');
    iframe.classList.add('hidden');
    iframe.addEventListener('load', function() {
        console.log('loaded, bye!');
        document.location = 'http://www.rtve.es/m/noticias';
    });
    document.body.appendChild(iframe);
})(this);
