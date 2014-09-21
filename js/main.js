/* jshint esnext: true, browser: true, easy: true */
(function(window) {
    'use strict';
    // Prefetch it to cache, then change location.
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://mail.google.com/mail/mu/mp/963/');
    iframe.classList.add('hidden');
    iframe.addEventListener('load', function() {
        console.log('loaded, bye!');
        document.location = 'https://mail.google.com/mail/mu/mp/963/';
    });
    document.body.appendChild(iframe);
})(this);
