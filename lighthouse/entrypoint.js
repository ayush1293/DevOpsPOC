const fs = require('fs')
var stream = require('stream');
var readline = require('readline');
const exec = require('child_process').exec
fs.readFile('url_list', (err, data) => 
{
    	if (err) throw err;
	console.log(data.toString());
	var bufferStream = new stream.PassThrough();
	bufferStream.end(data);

	var rl = readline.createInterface
	({
    	input: bufferStream,
	});

	var count = 0;
	rl.on('line', function (line) {
    	//exec('lighthouse --chrome-flags="--headless"'+ line);
	exec('echo "Hello World"')
	})
});
