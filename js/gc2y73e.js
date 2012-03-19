var magicDisc = (function () {
	var colorSelection = -1,
		numberSelection = -1,
		numbersN = [], 
		numbersE = [];
	
	numbersN[0] = [2,7,4];
	numbersN[1] = [4,4,7];
	numbersN[2] = [4,7,2];
	numbersN[3] = [5,0,8];
	numbersN[4] = [6,2,1];
	numbersN[5] = [3,6,6];
	numbersN[6] = [4,3,9];
	numbersN[7] = [5,3,9];
	numbersN[8] = [2,9,0];
	numbersN[9] = [4,5,5];

	numbersE[0] = [2,1,0];
	numbersE[1] = [2,5,7];
	numbersE[2] = [1,1,9];
	numbersE[3] = [4,4,9];
	numbersE[4] = [3,8,6];
	numbersE[5] = [0,8,7];
	numbersE[6] = [4,4,9];
	numbersE[7] = [1,9,5];
	numbersE[8] = [3,1,1];
	numbersE[9] = [4,1,1];
	
	function getSolution(prefix, solutionsArray) 
	{
		var goTo = prefix,
			lastDigits = "000";

		if ((colorSelection > -1) && (numberSelection > -1)) {
			lastDigits = Array.join(solutionsArray[(colorSelection + numberSelection) % 10], "");
		} 
		
		return goTo + lastDigits;
	};
	
	return {
		blue:    1,
		yellow:  2,
		brown:   3,
		cyan:    4,
		red:     5,
		white:   6,
		magenta: 7,
		black:   8,
		orange:  9,
		green:   0,
		
		setColorSelection: function (val) {
			colorSelection = val;
		},
		
		setNumberSelection: function (val) {
			numberSelection = val - 1;
		},
		
		getSolutionNorth: function () {
			return getSolution("N 51° 07.", numbersN);
		},
		
		getSolutionEast: function () {
			return getSolution("E 006° 56.", numbersE);
		}
	};
})();

function setSelectionData(val)
{
}

$(document).ready(function () {
	var i,
	colorSelector = $('#colorSelector'),
	numberSelector = $('#numberSelector');
	
    for (i = 0; i < 9; i += 1) {
    	$("a", colorSelector).eq(i+1).click({sel: i}, function (event) {
    		colorSelection = event.data.sel;
		});
    	$("a", numberSelector).eq(i+1).click({sel: i+1}, function(event) {
    		numberSelection = event.data.sel;
    	});
    }
    
    $("#page4").on("pagebeforeshow", function () {
    	$("#coordNorth").text(magicDisc.getSolutionNorth());
    	$("#coordEast").text(magicDisc.getSolutionEast());
    });
});

