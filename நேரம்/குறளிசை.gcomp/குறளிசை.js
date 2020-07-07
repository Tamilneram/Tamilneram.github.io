(function () {
    // Use strict prevents silent and common JavaScript errors.
    'use strict';
    window.PlayAudio = function (url1) {
		document.getElementById('audiotag1').pause();
		document.getElementById('audiotag1').setAttribute('src',url1);
		document.getElementById('audiotag1').load();
//		setTimeout(function() {  document.getElementById('audiotag1').load()}, 1000);
		document.getElementById('audiotag1').play();
        return url1;
    };
}());
