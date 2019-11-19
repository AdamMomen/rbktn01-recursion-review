// this is what you would do if you liked things to be easy:
 var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var keys = Object.keys(obj)[0];
	var values = Object.values(obj)[0];
	delete obj.keys;
	var str = '';
	console.log(obj);
	return str += keys + values
};
