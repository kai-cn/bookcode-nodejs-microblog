function Hello() {
	var name;

	this.setName = function (thyName) {
		name = thyName;
	};

	this.sayHello = function() {
		console.log('Hello ' + name);
	};
};

exports.Hello = Hello;

/* the other file can use the following code to get 'Hello' Object.

require('./singleobject').Hello

But this is a little bit complicate, so we simplify it, please see 'hello.js'

*/