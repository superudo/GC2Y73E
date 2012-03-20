var magicDisc = (function () {
    var numbersN = [],
		numbersE = [];

    numbersN[0] = [2, 7, 4];
    numbersN[1] = [4, 4, 7];
    numbersN[2] = [4, 7, 2];
    numbersN[3] = [5, 0, 8];
    numbersN[4] = [6, 2, 1];
    numbersN[5] = [3, 6, 6];
    numbersN[6] = [4, 3, 9];
    numbersN[7] = [5, 3, 9];
    numbersN[8] = [2, 9, 0];
    numbersN[9] = [4, 5, 5];

    numbersE[0] = [2, 1, 0];
    numbersE[1] = [2, 5, 7];
    numbersE[2] = [1, 1, 9];
    numbersE[3] = [4, 4, 9];
    numbersE[4] = [3, 8, 6];
    numbersE[5] = [0, 8, 7];
    numbersE[6] = [4, 4, 9];
    numbersE[7] = [1, 9, 5];
    numbersE[8] = [3, 1, 1];
    numbersE[9] = [4, 1, 1];

    function getSolution(prefix, solutionsArray, selection) {
        var goTo = prefix,
			lastDigits = "000";

        if ((selection.color > -1) && (selection.number > -1)) {
            lastDigits = solutionsArray[(selection.color + selection.number) % 10].join("");
        }

        return goTo + lastDigits;
    }

    return {
        selection: {
            number: -1,
            color: -1
        },

        blue: 1,
        yellow: 2,
        brown: 3,
        cyan: 4,
        red: 5,
        white: 6,
        magenta: 7,
        black: 8,
        orange: 9,
        green: 0,

        setColorSelection: function (val) {
            this.selection.color = val;
        },

        setNumberSelection: function (val) {
            this.selection.number = val - 1;
        },

        getSolutionNorth: function () {
            return getSolution("N 51° 07.", numbersN, this.selection);
        },

        getSolutionEast: function () {
            return getSolution("E 006° 56.", numbersE, this.selection);
        }
    };
})();

