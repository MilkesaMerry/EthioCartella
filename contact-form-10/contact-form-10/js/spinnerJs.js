/**
 * This object generates a random number
 */
var generator = {
  min: 1,
  max: 100,
  
  /**
   * Generate a random number
   */
  getRandom: function () {
    return Math.round(Math.random() * (this.max - this.min) + this.min);
  },
  
  /**
   * Set the lower number boundry
   */
  setMin: function (newMin) {
    this.min = parseInt(newMin);
  },
  
  /**
   * Set the higher number boundry
   */
  setMax: function (newMax) {
    this.max = parseInt(newMax);
  }
};

var number = document.querySelector('.number');

document.querySelector('.generate').onclick = function () {
Randi();
};

var options = document.querySelector('.options');
  
options.querySelector('#min').onchange = function () {
	generator.setMin(this.value);
};
options.querySelector('#max').onchange = function () {
	generator.setMax(this.value);
};

function Randi() {
	number.textContent = generator.getRandom();
  setTimeout(Randi, 100);
}
