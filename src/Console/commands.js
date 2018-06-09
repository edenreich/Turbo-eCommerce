#!bin/usr/env node

const path = require('path');
const fs = require('fs-extra');
const rootFolder = path.resolve(__dirname);
const userRootFolder = path.resolve(__dirname, '../../');

/**
 * Stores the commands functions.
 * 
 * @class Commands
 */
class Commands
{
	/**
	 * Publishing the files to the user directory.
	 *
	 * @param array | options
	 * @return void
	 */
	static publish(options)
	{
		let withDemo = false;
		let source = '';

		options.forEach(function(option) {
			if (option.name == '--with-demo') {
				withDemo = true;
			}
		});

		console.log(withDemo); return;
		if (withDemo) {
			source = rootFolder + '/demo';
			destination = destination || 'demo';
			destination = (destination[0] == '/') ? destination.substr(1) : destination;

			fs.copy(source, userRootFolder + '/' + destination, (err) => {
				if (err) {
					showError(err);
					return;
				}

				showSuccess('demo folder was copied to ' + userRootFolder + '/' + destination);
			});
		} else {
			source = rootFolder + '/demo/js/bundle.min.js';
			destination = destination || 'bundle.js';
			destination = (destination[0] == '/') ? destination.substr(1) : destination;
		
			fs.copyFile(source, userRootFolder + '/' + destination, (err) => {
				if (err) {
					showError(err);
					return;
				}

				showSuccess('bundle.js was copied to ' + userRootFolder + '/' + destination);
			});
		}
	}
}

/**
 * Sets the destination the user specified.
 *
 * @param string | dest
 * @return void
 */
function setDestination(dest) {
	if (dest.indexOf('.js') == -1) {
		showError('Please supply a file name with js extension!');
		hasErrors = 1;
		return;
	}

	destination = dest;
}

module.exports = Commands;