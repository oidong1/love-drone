var Cylon = require("cylon");

Cylon.robot({
	connections: {
		spider: { adaptor: "rolling-spider", uuid: "eb7c378a984947fa9200dc712a367b4c" }
	},

	devices: {
		drone: { driver: "rolling-spider" }
	},

	work: function (my) {
		my.drone.wheelOn();
		my.drone.flatTrim();
		my.drone.takeOff();

		after(5000, function () {
			my.drone.land();
		});
	}
}).start();