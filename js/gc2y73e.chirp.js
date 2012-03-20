/// <reference path="magic-disc.js" />
/*globals $:false, magicDisc:false */

$(document).bind('mobileinit', function () {
	var ua = navigator.userAgent.toLowerCase();
	if ((ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1)) {
		$.mobile.defaultPageTransition = 'none';
	}
});

$(document).ready(function () {
    var i,
        colorSelector = $('#colorSelector'),
        colorSelect = function (event) {
    		var b;
            magicDisc.setColorSelection(event.data.sel);
            b = "5px solid " + magicDisc.getSelectionColor();
            $("#colorBorderedContent").css("border", b);
        };

    for (i = 0; i < 10; i += 1) {
        $("a", colorSelector).eq(i).click({ sel: i }, colorSelect);
    }

    $("#submitNumber").click(function (ev) {
    	var v = parseInt($("#numberSel").val());
    	if (v === -1) {
    		//alert("Wehe, wehe. Feenmagie wirkt nur mit Zahl und Farbe!");
    		$("#lnkDialog").click();
    		return false;
    	}
    	magicDisc.setNumberSelection(v + 1);
    	return true;
    });
    
    $("#page4").bind("pageshow", function () {
        $("#coordNorth").text(magicDisc.getSolutionNorth());
        $("#coordEast").text(magicDisc.getSolutionEast());
    });

});

