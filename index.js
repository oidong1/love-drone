var Cylon = require("cylon");

Cylon.robot({
	connections: {
		spider: { adaptor: "rolling-spider", uuid: "eb7c378a984947fa9200dc712a367b4c" },
    keyboard: { adaptor: "keyboard" }
	},

	devices: {
		drone: { driver: "rolling-spider" },
		keyboard: { driver: "keyboard", connection: "keyboard" }
	},

	work: function (my) {
		my.drone.wheelOn();
		my.drone.flatTrim();
		my.drone.takeOff();

		my.keyboard.on("up", function () {
			console.log('UP!!!');
			my.drone.up({speed: 100, steps: 1});
		})
		my.keyboard.on("down", function () {
			console.log('DOWN!!!');
			my.drone.down({speed: 100, steps: 1});
		})
		my.keyboard.on("left", function () {
			console.log('LEFT!!!');
			my.drone.counterClockwise({speed: 100, steps: 1});
		})
		my.keyboard.on("right", function () {
			console.log('RIGHT!!!');
			my.drone.clockwise({speed: 100, steps: 1});
		})
		my.keyboard.on("h", function () {
			console.log('HOVER!!!');
			my.drone.hover();
		})
		my.keyboard.on("q", function () {
			console.log('LAND!!!');
			my.drone.land();
		})
    	// my.drone.clockwise({speed: 50, steps: 100});

		after(100000, function () {
			my.drone.land();
		});
	}
}).start();
