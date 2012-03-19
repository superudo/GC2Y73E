describe("magicDisc", function () {
	it("should return default string for North", function () {
		var actual = magicDisc.getSolutionNorth(),
			expected = "N 51° 07.000";
		expect(actual).toEqual(expected);
	});
	
	it ("should return right coords on blue/5", function () {
		magicDisc.setColorSelection(magicDisc.blue);
		magicDisc.setNumberSelection(5);

		expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.366");
		expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.087");
	});
	
	it ("should return right coords on white/4", function () {
		magicDisc.setColorSelection(magicDisc.white);
		magicDisc.setNumberSelection(4);

		expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.455");
		expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.411");
	});
	
	it ("should return right coords on brown/9", function () {
		magicDisc.setColorSelection(magicDisc.brown);
		magicDisc.setNumberSelection(9);
		
		expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.447");
		expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.257");
	});
	
	it ("should return right coords on yellow/2", function () {
		magicDisc.setColorSelection(magicDisc.yellow);
		magicDisc.setNumberSelection(2);
		
		expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.508");
		expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.449");
	});

	it ("should return right coords on red/3", function () {
		magicDisc.setColorSelection(magicDisc.red);
		magicDisc.setNumberSelection(3);
		
		expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.539");
		expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.195");
	});

	it ("should return right coords on orange/4", function () {
		magicDisc.setColorSelection(magicDisc.orange);
		magicDisc.setNumberSelection(4);
		
		expect(magicDisc.getSolutionNorth()).toEqual("N 51° 07.472");
		expect(magicDisc.getSolutionEast()).toEqual("E 006° 56.119");
	});
		
});