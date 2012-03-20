describe("magicDisc", function () {
    it("should return default string for North", function () {
        var actual = magicDisc.getSolutionNorth(),
			expected = "N 51° 07.000";
        expect(actual).toEqual(expected);
    });

    it("should return right coords on blue/5", function () {
        magicDisc.setColorSelection(magicDisc.blue);
        magicDisc.setNumberSelection(5);

        expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.366");
        expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.087");
    });

    it("should return right coords on white/4", function () {
        magicDisc.setColorSelection(magicDisc.white);
        magicDisc.setNumberSelection(4);

        expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.455");
        expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.411");
    });

    it("should return right coords on brown/9", function () {
        magicDisc.setColorSelection(magicDisc.brown);
        magicDisc.setNumberSelection(9);

        expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.447");
        expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.257");
    });

    it("should return right coords on yellow/2", function () {
        magicDisc.setColorSelection(magicDisc.yellow);
        magicDisc.setNumberSelection(2);

        expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.508");
        expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.449");
    });

    it("should return right coords on red/3", function () {
        magicDisc.setColorSelection(magicDisc.red);
        magicDisc.setNumberSelection(3);

        expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.539");
        expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.195");
    });

    it("should return right coords on orange/4", function () {
        magicDisc.setColorSelection(magicDisc.orange);
        magicDisc.setNumberSelection(4);

        expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.472");
        expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.119");
    });

    it("should return right coords on blue/9 and others", function () {
        var expectedN = "N 51° 07.455",
            expectedE = "E 006° 56.411";

        magicDisc.setColorSelection(magicDisc.blue);
        magicDisc.setNumberSelection(9);

        expect(magicDisc.getSolutionNorth()).toEqual(expectedN);
        expect(magicDisc.getSolutionEast()).toEqual(expectedE);

        magicDisc.setColorSelection(magicDisc.yellow);
        magicDisc.setNumberSelection(8);

        expect(magicDisc.getSolutionNorth()).toEqual(expectedN);
        expect(magicDisc.getSolutionEast()).toEqual(expectedE);

        magicDisc.setColorSelection(magicDisc.brown);
        magicDisc.setNumberSelection(7);

        expect(magicDisc.getSolutionNorth()).toEqual(expectedN);
        expect(magicDisc.getSolutionEast()).toEqual(expectedE);

        magicDisc.setColorSelection(magicDisc.cyan);
        magicDisc.setNumberSelection(6);

        expect(magicDisc.getSolutionNorth()).toEqual(expectedN);
        expect(magicDisc.getSolutionEast()).toEqual(expectedE);

    });
});