'use strict';

const Grandson = require("../grandson");

xdescribe('specs for grandson', function(){
	let testGrandson = new Grandson();
	console.log("testGrandson", testGrandson);
	it('should be defined', function(){
		expect(testGrandson).toBeDefined();
	});
});