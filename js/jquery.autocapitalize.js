/*
	Author: 
	| Ridwan Padillah
	| @ridwanpadillah
	| http://ridwanpadillah.com

	Usage: 
	$('textarea').on('keyup', function (event) {
	    $(this).capitalize();
	}).capitalize();
*/
$.fn.capitalize = function() {
    $.each(this, function() {
        var that = this;
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var split = this.value.split(' ');
        for (var i = 0, len = split.length; i < len; i++) {
            split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
        }

        this.value = split.join(' ');
        this.setSelectionRange(start, end);
    });
    return this;
};