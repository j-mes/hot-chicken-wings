module.exports = function hotChickenWings(min, max) {
	return Math.floor(Math.random() * max) + min;
};
//console.log(hotChickenWings(1,6) + ' 🍗');