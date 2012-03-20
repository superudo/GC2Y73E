/// <reference path="magic-disc.js" />
/*globals $:false, magicDisc:false */

$(document).ready(function () {
    var i,
        colorSelector = $('#colorSelector'),
        numberSelector = $('#numberSelector'),
        colorSelect = function (event) {
            magicDisc.setColorSelection(event.data.sel);
            console.log("Set colorSelection to " + event.data.sel);
        },
        numberSelect = function (event) {
            magicDisc.setNumberSelection(event.data.sel);
            console.log("Set numberSelection to " + event.data.sel);
        };

    for (i = 0; i < 10; i += 1) {
        $("a", colorSelector).eq(i).click({ sel: i }, colorSelect);
        $("a", numberSelector).eq(i).click({ sel: i + 1 }, numberSelect);
    }

    $("#page4").bind("pageshow", function () {
        $("#coordNorth").text(magicDisc.getSolutionNorth());
        $("#coordEast").text(magicDisc.getSolutionEast());
    });

});

