"use strict";

const Grandpa = require('../src/grandpa');
const GrandWeapon = require('../src/GrandWeapon')

function DrunkGrandpa () {
	Grandpa.call(this);
	this.img = '../src/images/oldMan-drunk.jpg';
	this.bac = 2;
	this.anger = 30;
	this.viciousness = 15;
	this.patience = 5;
	this.weapons.push(new GrandWeapon.Hammer());
	this.weapons.push(new GrandWeapon.RacistComment());
	this.weapons.push(new GrandWeapon.MumbleBee());
	this.weapons.push(new GrandWeapon.BoozeOoka());
	this.backStory = "As curmudgeonly as they come, Grandpa has been a ticking time bomb for years. Mixed with his daily Bourbon binge, he’s an explosive cocktail on the verge of detonation. He is… Drunk Grandpa!"
}

module.exports = DrunkGrandpa;

