'use strict';

/**
 * @file 
 * Str class.
 *
 * Adds some useful functionality for
 * manipulating strings or creating string.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Str = function () {
	function Str() {
		_classCallCheck(this, Str);
	}

	_createClass(Str, null, [{
		key: 'kebabCase',

		/**
   * Convert camelCase to kebab-case.
   *
   * @param string | string
   * @return string
   */
		value: function kebabCase(string) {
			return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
		}

		/**
   * Generates a random string.
   *
   * @param integer | length
   * @return string
   */

	}, {
		key: 'random',
		value: function random(length) {
			var string = '';
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			for (var i = 0; i < length; i++) {
				string += possible.charAt(Math.floor(Math.random() * possible.length));
			}

			return string;
		}

		/**
   * Changes the first letter 
   * of the string to uppercase.
   * 
   * @param string | string
   * @return string
   */

	}, {
		key: 'ucfirst',
		value: function ucfirst(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}]);

	return Str;
}();

var ExceptionHandler = function () {
	function ExceptionHandler() {
		var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, ExceptionHandler);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor.name);
		}
	}

	/**
  * Handle all the errors
  */


	_createClass(ExceptionHandler, [{
		key: 'stackTrace',
		value: function stackTrace(error, message) {
			this.customActions(error, message);

			var debugLevel = TurboEcommerce.debugLevel();

			if (debugLevel == 'error') {
				this.handleErrors(error, message);
			} else if (debugLevel == 'warning') {
				this.handleWarnings(error, message);
			} else if (debugLevel == 'info') {
				this.handleInfos(error, message);
			}
		}
	}, {
		key: 'handleErrors',
		value: function handleErrors(error, message) {
			console.error(error.constructor.name + ': ' + message);
		}
	}, {
		key: 'handleWarnings',
		value: function handleWarnings(error, message) {
			console.warn(error.constructor.name + ': ' + message);
		}
	}, {
		key: 'handleInfos',
		value: function handleInfos(error, message) {
			console.info(error.constructor.name + ': ' + message);
		}
	}, {
		key: 'customActions',
		value: function customActions(error, message) {
			if (error.constructor.name == 'InvalidArgumentException') {
				// handle
			} else if (error.constructor.name == 'InvalidBindingException') {
				// handle
			} else if (error.constructor.name == 'BadEventCallException') {
				// handle
			} else if (error.constructor.name == 'ComponentsException') {
				// handle
			} else if (error.constructor.name == 'ComponentNotRegisteredException') {
				// handle
			} else if (error.constructor.name == 'NotInPageRangeException') {
				// handle
			} else {
				return false;
			}

			return false;
		}
	}]);

	return ExceptionHandler;
}();

var defaultMessage = 'an invalid argument was passed.';

var InvalidArgumentException$1 = function (_ExceptionHandler) {
	_inherits(InvalidArgumentException$1, _ExceptionHandler);

	function InvalidArgumentException$1() {
		var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, InvalidArgumentException$1);

		message = message || defaultMessage;

		var _this = _possibleConstructorReturn(this, (InvalidArgumentException$1.__proto__ || Object.getPrototypeOf(InvalidArgumentException$1)).call(this, message));

		_get(InvalidArgumentException$1.prototype.__proto__ || Object.getPrototypeOf(InvalidArgumentException$1.prototype), 'stackTrace', _this).call(_this, _this, message);
		return _this;
	}

	return InvalidArgumentException$1;
}(ExceptionHandler);

/**
 * @file 
 * DOM class.
 *
 * Adds some useful functionality for
 * fetching or manipulating DOM elements.
 */

var DOM = function () {
	function DOM() {
		_classCallCheck(this, DOM);
	}

	_createClass(DOM, null, [{
		key: 'minifyCss',

		/**
   * Minifies the css text.
   * 
   * @param string | string
   * @return string
   */
		value: function minifyCss(string) {
			string = string.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '');
			string = string.replace(/ {2,}/g, ' ');
			string = string.replace(/([{:}])/g, '$1');
			string = string.replace(/([;,]) /g, '$1');
			string = string.replace(/ !/g, '!');

			return string;
		}

		/**
   * Switches between two given classes.
   *
   * @param object | element
   * @param string | className
   * @param string | newClassName
   * @return object
   */

	}, {
		key: 'switchClasses',
		value: function switchClasses(element, className, newClassName) {
			this.removeClass(element, className);
			this.addClass(element, newClassName);
		}

		/**
   * Adds class to a given element.
   *
   * @param object | element
   * @param string | className
   * @return object
   */

	}, {
		key: 'addClass',
		value: function addClass(element, className) {
			if (element === null) {
				throw new InvalidArgumentException$1();
			}

			if (!className || className == '' || (typeof className === 'undefined' ? 'undefined' : _typeof(className)) === undefined) {
				return element;
			}

			var classNames = className.split(' ');

			classNames.forEach(function (name) {
				element.classList.add(name);
			});

			return element;
		}

		/**
   * Removes class from a given element.
   * 
   * @param object | element
   * @param string | className
   * @return object
   */

	}, {
		key: 'removeClass',
		value: function removeClass(element, className) {
			if (element == null) {
				throw new InvalidArgumentException$1();
			}

			if (className == '') {
				element.className = '';
			} else {

				var classNames = className.split(' ');

				classNames.forEach(function (name) {
					element.classList.remove(name);
				});
			}

			return element;
		}

		/**
   * Adds style tag with given id and css to the DOM.
   * 
   * @param string | id
   * @param string | css
   * @return void
   */

	}, {
		key: 'addStyle',
		value: function addStyle(id, css) {
			if (typeof css != 'string') {
				throw new InvalidArgumentException$1();
			}

			var head = document.head || document.getElementsByTagName('head')[0];
			var styleTag = document.createElement('style');

			// pipe it through the minfier
			var CSS = this.minifyCss(css);
			// adding it to the styletag
			styleTag.innerHTML = CSS;
			// give an id to recognize the style tag
			styleTag.setAttribute('id', id);
			// appending that style tag to the DOM head tag
			head.appendChild(styleTag);
		}

		/**
   * Adds linked style tag with given id and src to the DOM.
   * 
   * @param string | id
   * @param string | source
   * @return void
   */

	}, {
		key: 'addLinkedStyle',
		value: function addLinkedStyle(id, source) {
			if (typeof source != 'string') {
				throw new InvalidArgumentException$1('DOM.addLinkedStyle() excpects the second parameter to be string, but ' + (typeof source === 'undefined' ? 'undefined' : _typeof(source)) + ' was passed instead.');
			}

			var head = document.head || document.getElementsByTagName('head')[0];
			var linkedStyleTag = document.createElement('link');

			// give an id to recognize the style tag
			linkedStyleTag.setAttribute('id', id);
			linkedStyleTag.setAttribute('href', source);
			linkedStyleTag.setAttribute('rel', 'stylesheet');
			linkedStyleTag.setAttribute('type', 'text/css');
			// appending that style tag to the DOM head tag
			head.appendChild(linkedStyleTag);
		}

		/**
   * Creates an element with the given options.
   * 
   * @param string | elementType
   * @param object | options
   * @return HTMLElement
   */

	}, {
		key: 'createElement',
		value: function createElement(elementType, options) {
			var element = document.createElement(elementType);

			if (options === undefined) {
				return element;
			}

			for (var option in options) {
				if (option == 'text') {
					element.innerHTML = options[option];
					continue;
				}

				element.setAttribute(option, options[option]);
			}

			return element;
		}

		/**
   * Toggles the given classes.
   * 
   * @param object | element
   * @param string | className
   * @return bool
   */

	}, {
		key: 'toggleClass',
		value: function toggleClass(element, className, secondClassName) {
			if (element == null || typeof element == 'undefined') {
				throw new InvalidArgumentException$1();
			}

			secondClassName = secondClassName || undefined;

			if (secondClassName) {
				element.classList.toggle(secondClassName);
			}

			return element.classList.toggle(className);
		}

		/**
   * Finds an element inside of parent.
   *
   * @param string | selector
   * @param object | context
   * @return mixed
   */

	}, {
		key: 'find',
		value: function find(selector) {
			var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;

			return queryElement(selector, context);
		}
	}]);

	return DOM;
}();

/**
 * Queries an element from the DOM.
 *
 * @param string | selector
 * @param object | parentElement
 * @return mixed
 */


function queryElement(selector, parentElement) {
	var element = parentElement.querySelectorAll(selector);

	if (element.length == 0) {
		return null;
	}

	return element.length > 1 ? element : element[0];
}

/**
 * Checks if parent has child.
 *
 * @param object | parentElement
 * @param object | childElement
 * @return bool
 */
function hasChild(parentElement, childElement) {
	var node = childElement.parentNode;

	while (node != null) {
		if (node == parentElement) {
			return true;
		}
		node = node.parentNode;
	}

	return false;
}

/**
 * @file 
 * Common class.
 *
 * Adds some useful functionality for
 * common tasks - data checks or data manipulation.
 */

var Common = function () {
	function Common() {
		_classCallCheck(this, Common);
	}

	_createClass(Common, null, [{
		key: 'extend',

		/**
   * Extend an object.
   *
   * @param object | currentObject
   * @param object | newObject
   * @return object
   */
		value: function extend(currentObject, newObject) {
			var extended = {};
			var prop;

			for (prop in currentObject) {
				if (Object.prototype.hasOwnProperty.call(currentObject, prop)) {
					extended[prop] = currentObject[prop];
				}
			}

			for (prop in newObject) {
				if (Object.prototype.hasOwnProperty.call(newObject, prop)) {
					extended[prop] = newObject[prop];
				}
			}

			return extended;
		}

		/**
   * Checks for a needle in hystack array.
   *
   * @param mixed | needle
   * @param object | object
   * @return bool
   *
   */

	}, {
		key: 'in_array',
		value: function in_array(needle, hystack) {
			if (hystack.constructor !== Array) {
				throw new InvalidArgumentException$1();
			}

			for (var i = 0; i <= hystack.length; i++) {
				if (needle == hystack[i]) {
					return true;
				}
			}

			return false;
		}

		/**
   * Takes an array and chunks it.
   *
   * @param array | total
   * @param number | chunks
   * @return array
   */

	}, {
		key: 'array_chunk',
		value: function array_chunk(total) {
			var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

			if (isNaN(size)) {
				throw new InvalidArgumentException$1('Common.array_chunk() expects the second parameter to be a number, but ' + (typeof size === 'undefined' ? 'undefined' : _typeof(size)) + ' passed instead.');
			}

			size = parseInt(size);

			var i = void 0;
			var collection = [];

			// add each chunk to the result
			for (i = 0; i < Math.ceil(total.length / size); i++) {

				var start = i * size;
				var end = start + size;

				collection.push(total.slice(start, end));
			}

			return collection;
		}

		/**
   * Checks if an object is empty.
   *
   * @param object | object
   * @return bool
   */

	}, {
		key: 'emptyObject',
		value: function emptyObject(object) {
			for (var prop in object) {
				return false;
			}

			return true;
		}

		/**
   * Checks if a given object contained in an array.
   * 
   * @param object | object
   * @param array | haystack
   * @return bool
   */

	}, {
		key: 'containsObject',
		value: function containsObject(object, hystack) {
			var i = void 0;

			for (i = 0; i < hystack.length; i++) {
				if (typeof object == 'string' && hystack[i].constructor.name === object) {
					return true;
				}

				if (hystack[i] === object) {
					return true;
				}
			}

			return false;
		}

		/**
   * Checks if a given parameter is an object.
   * 
   * @param object | object
   * @return bool
   */

	}, {
		key: 'isObject',
		value: function isObject(object) {
			return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) == 'object';
		}
	}]);

	return Common;
}();

var defaultMessage$1 = 'The data structure is invalid';

var InvalidDataStructureException = function (_ExceptionHandler2) {
	_inherits(InvalidDataStructureException, _ExceptionHandler2);

	function InvalidDataStructureException() {
		var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, InvalidDataStructureException);

		message = message || defaultMessage$1;

		var _this2 = _possibleConstructorReturn(this, (InvalidDataStructureException.__proto__ || Object.getPrototypeOf(InvalidDataStructureException)).call(this, message));

		_get(InvalidDataStructureException.prototype.__proto__ || Object.getPrototypeOf(InvalidDataStructureException.prototype), 'stackTrace', _this2).call(_this2, _this2, message);
		return _this2;
	}

	return InvalidDataStructureException;
}(ExceptionHandler);

/**
 * @file 
 * Request class.
 *
 * Handles ajax requests POST, GET etc...
 */

/**
 * Stores the default settings.
 *
 * @var object
 */

var defaultSettings$1 = {
	headers: {
		'Content-Type': 'application/json'
	},
	async: true
};

var Request = function () {
	/**
  * - Initialize the settings object.
  * - Initialize the xhr object.
  *
  * @param object | settings
  * @return void
  */
	function Request(settings) {
		_classCallCheck(this, Request);

		this.xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
		this.settings = Common.extend(defaultSettings$1, settings);
		this.setDefaultRequestHeader();
	}

	/**
  * Sets the default request headers.
  *
  * @return void
  */


	_createClass(Request, [{
		key: 'setDefaultRequestHeader',
		value: function setDefaultRequestHeader() {
			var header = void 0;
			var headers = this.settings.headers;
			var async = this.settings.async;
			var open = XMLHttpRequest.prototype.open;
			var setRequestHeader = XMLHttpRequest.prototype.setRequestHeader;

			XMLHttpRequest.prototype.open = function () {
				var response = open.apply(this, arguments, async);

				for (header in headers) {
					this.setRequestHeader(header, headers[header]);
				}

				return response;
			};
		}

		/**
   * Makes a POST request.
   *
   * @param object | options
   * @return Promise
   */

	}, {
		key: 'post',
		value: function post(options) {
			var xhr = this.xhr;

			if (options.hasOwnProperty('before') && typeof options.before == 'function') {
				options.before.call(this);
			}

			return new Promise(function (resolve, reject) {
				if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
					throw new Error('get expecting a json object to be passed as an argument, but ' + (typeof options === 'undefined' ? 'undefined' : _typeof(options)) + ' was passed.');
				}

				options.data = options.data || {};

				if (_typeof(options.data) !== 'object') {
					throw new Error('data property expecting a json object to be passed as an argument, but ' + _typeof(options.data) + ' was passed.');
				}

				xhr.open('POST', options.url, true);

				xhr.responseType = options.dataType || 'json';
				xhr.timeout = options.timeout || 3000;

				xhr.onreadystatechange = function () {
					if (this.readyState != 4 || this.status != 200) {
						return;
					}

					resolve(this.response);

					if (options.hasOwnProperty('after') && typeof options.after == 'function') {
						options.after.call(this);
					}
				};

				xhr.onerror = function (message) {
					options.error(message);
					reject(message);
				};

				if (!options.data) {
					xhr.send(null);
				}

				var queryString = Object.keys(options.data).map(function (key) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(options.data[key]);
				}).join('&');

				xhr.send(queryString);
			});
		}

		/**
   * Makes a GET ajax request.
   * 
   * @param object | options
   * @return Promise
   */

	}, {
		key: 'get',
		value: function get(options) {
			var xhr = this.xhr;

			if (options.hasOwnProperty('before') && typeof options.before == 'function') {
				options.before.call(this);
			}

			return new Promise(function (resolve, reject) {
				if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
					throw new Error('get expecting a json object to be passed as an argument, but ' + (typeof options === 'undefined' ? 'undefined' : _typeof(options)) + ' was passed.');
				}

				options.data = options.data || {};

				if (_typeof(options.data) !== 'object') {
					throw new Error('data property expecting a json object to be passed as an argument, but ' + _typeof(options.data) + ' was passed.');
				}

				xhr.open('GET', options.url, true);

				xhr.responseType = options.dataType || 'json';
				xhr.timeout = options.timeout || 3000;

				xhr.onreadystatechange = function () {
					if (this.readyState != 4 || this.status != 200) {
						return;
					}

					resolve(this.response);

					if (options.hasOwnProperty('after') && typeof options.after == 'function') {
						options.after.call(this);
					}
				};

				xhr.onerror = function (message) {
					options.error(message);
					reject(message);
				};

				if (!options.data) {
					xhr.send(null);
				}

				var queryString = Object.keys(options.data).map(function (key) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(options.data[key]);
				}).join('&');

				xhr.send(queryString);
			});
		}
	}]);

	return Request;
}();

var defaultMessage$2 = 'trying to bind an already existing bound.';

var InvalidBindingException = function (_ExceptionHandler3) {
	_inherits(InvalidBindingException, _ExceptionHandler3);

	function InvalidBindingException() {
		var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, InvalidBindingException);

		message = message || defaultMessage$2;

		var _this3 = _possibleConstructorReturn(this, (InvalidBindingException.__proto__ || Object.getPrototypeOf(InvalidBindingException)).call(this, message));

		_get(InvalidBindingException.prototype.__proto__ || Object.getPrototypeOf(InvalidBindingException.prototype), 'stackTrace', _this3).call(_this3, _this3, message);
		return _this3;
	}

	return InvalidBindingException;
}(ExceptionHandler);

/**
 * @file 
 * Container class.
 *
 * Handles/Controls the dependencies of ecommerce.
 */

/**
 * Stores the instances
 *
 * @var array
 */


var _instances = [];

var Container = function () {
	function Container() {
		_classCallCheck(this, Container);
	}

	_createClass(Container, [{
		key: 'bind',

		/**
   * Binds key to concrete class.
   *
   * @param string | key
   * @param class | concrete
   * @return void
   */
		value: function bind(key, concrete) {
			if (typeof key != 'string') {
				throw new InvalidArgumentException$1('bind() expects the first parameter to be string, but ' + (typeof key === 'undefined' ? 'undefined' : _typeof(key)) + ' was passed instead.');
			}

			if (typeof concrete != 'function') {
				throw new InvalidArgumentException$1('bind() expects the second parameter to be a function, but ' + (typeof concrete === 'undefined' ? 'undefined' : _typeof(concrete)) + ' was passed instead.');
			}

			if (typeof this[key] != 'undefined') {
				throw new InvalidBindingException('bind() recieved an already existing bind.');
			}

			this[key] = concrete.bind(concrete, this);
		}

		/**
   * Sets an instance.
   *
   * @param string | key
   * @param object | instance
   * @param string | alias
   * @return void
   */

	}, {
		key: 'setInstance',
		value: function setInstance(key, instance) {
			var alias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			if (typeof key != 'string') {
				throw new InvalidArgumentException$1('setInstace() expects the first parameter to be a string, but ' + (typeof key === 'undefined' ? 'undefined' : _typeof(key)) + ' was passed instead.');
			}

			if ((typeof instance === 'undefined' ? 'undefined' : _typeof(instance)) != 'object') {
				throw new InvalidArgumentException$1('setInstance() expects the second parameter to be an object, but ' + (typeof instance === 'undefined' ? 'undefined' : _typeof(instance)) + ' was passed instead.');
			}

			_instances[key] = instance;
			_instances[alias] = instance;
			this[key] = instance;
		}

		/**
   * Resolves an instance out of 
   * the ioc container.
   * 
   * @param string | key
   * @return object
   */

	}, {
		key: 'getInstance',
		value: function getInstance(key) {
			if (typeof key != 'string') {
				throw new InvalidArgumentException$1('getInstace() expects the first parameter to be a string, but ' + (typeof key === 'undefined' ? 'undefined' : _typeof(key)) + ' was passed instead.');
			}

			if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == 'object') {
				return _instances[key.constructor.name] || null;
			}

			return _instances[key] || null;
		}

		/**
   * Checks if an instance exist.
   *
   * @param mixed | instance
   * @return bool
   */

	}, {
		key: 'instanceExist',
		value: function instanceExist(instance) {
			if ((typeof instance === 'undefined' ? 'undefined' : _typeof(instance)) == 'object') {
				return typeof _instances[instance.constructor.name] !== 'undefined';
			} else if (typeof instance == 'string') {
				return typeof _instances[instance] !== 'undefined';
			}

			throw new InvalidArgumentException$1('instanceExist() expects the first parameter to be string or an object, but ' + (typeof instance === 'undefined' ? 'undefined' : _typeof(instance)) + ' was passed instead.');
		}

		/**
   * Retrieve an object, if not exists
   * will create it, set it in the ioc container
   * for later use and retrieve it.
   *
   * @param mixed | object 
   * @return object
   */

	}, {
		key: 'make',
		value: function make(object) {
			var instance = {};
			var key = void 0;

			if (this.instanceExist(object)) {
				return this.getInstance(object);
			}

			if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) == 'object') {
				instance = object;
				key = object.constructor.name;
				this.setInstance(key, instance);
			} else if (typeof object == 'string' && this.hasOwnProperty(object)) {
				instance = new this[object]();
				key = object;
				this.setInstance(key, instance);
			} else {
				throw new InvalidBindingException('The parameter you passed could not be bounded to the container, parameter: ' + (typeof object === 'undefined' ? 'undefined' : _typeof(object)));
			}

			return instance;
		}
	}, {
		key: 'flush',
		value: function flush() {
			_instances = [];
		}

		/**
   * Retrieve all instances.
   *
   * @return array
   */

	}, {
		key: 'instances',
		value: function instances() {
			return _instances;
		}
	}]);

	return Container;
}();

var defaultMessage$3 = 'The event you called does not exists or you supplied wrong argument';

var BadEventCallException = function (_ExceptionHandler4) {
	_inherits(BadEventCallException, _ExceptionHandler4);

	function BadEventCallException() {
		var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, BadEventCallException);

		message = message || defaultMessage$3;

		var _this4 = _possibleConstructorReturn(this, (BadEventCallException.__proto__ || Object.getPrototypeOf(BadEventCallException)).call(this, message));

		_get(BadEventCallException.prototype.__proto__ || Object.getPrototypeOf(BadEventCallException.prototype), 'stackTrace', _this4).call(_this4, _this4, message);
		return _this4;
	}

	return BadEventCallException;
}(ExceptionHandler);

/**
 * @file 
 * EventManager class.
 *
 * Handles subscripions and publishing of events.
 */

var EventManager = function () {
	/**
  * Stores the events callbacks.
  * 
  * @var array
  */
	function EventManager() {
		_classCallCheck(this, EventManager);

		this.events = {};
	}

	/**
  * Subscribing to an event.
  *
  * @param string | name
  * @param function | callback
  * @return void
  */


	_createClass(EventManager, [{
		key: 'subscribe',
		value: function subscribe(name, callback) {
			if (typeof callback !== 'function') {
				throw new InvalidArgumentException();
			}

			if (typeof this.events[name] == 'undefined') {
				this.events[name] = [];
			}

			this.events[name].push(callback);
		}

		/**
   * Publish an event to all subscribers.
   *
   * @param string | name
   * @param list | data
   * @return void
   */

	}, {
		key: 'publish',
		value: function publish(name) {
			for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				data[_key - 1] = arguments[_key];
			}

			data = data || null;

			// If there are no subscribers simply ignore that event.
			if (typeof this.events[name] == 'undefined') {
				return;
			}

			this.events[name].forEach(function (callback) {
				if (typeof callback != 'function') {
					throw new InvalidArgumentException('subscribe() should recieve callback as second parameter, but ' + (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)) + ' was passed');
				}

				return callback.apply(undefined, _toConsumableArray(data));
			});
		}
	}]);

	return EventManager;
}();

/**
 * @file 
 * Cookie class.
 *
 * Adds some useful functionality for
 * setting or getting cookies.
 */

var Cookie = function () {
	function Cookie() {
		_classCallCheck(this, Cookie);
	}

	_createClass(Cookie, null, [{
		key: 'set',

		/**
  	* Sets a cookie.
  	* 
  	* @param string | name
  	* @param JSON | value
  	* @param integer | days
  	* @return void
  */
		value: function set(name, value, days) {
			if (value.constructor.name == 'Object' || value.constructor.name == 'Array') {
				value = JSON.stringify(value);
			}

			days = days || 10;

			var expires = void 0;

			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
				expires = "; expires=" + date.toGMTString();
			} else {
				expires = "";
			}

			document.cookie = name + "=" + value + expires + "; path=/";
		}

		/**
   * Retrieves the cookie by name.
   *
   * @param string | name
  	 * @return JSON
   */

	}, {
		key: 'get',
		value: function get(name) {
			if (document.cookie.length > 0) {
				var c_start = document.cookie.indexOf(name + "=");

				if (c_start != -1) {
					c_start = c_start + name.length + 1;
					var c_end = document.cookie.indexOf(";", c_start);

					if (c_end == -1) {
						c_end = document.cookie.length;
					}

					return JSON.parse(unescape(document.cookie.substring(c_start, c_end)));
				}
			}

			return {};
		}
	}]);

	return Cookie;
}();

/**
 * @file 
 * Cart class.
 *
 * Handles adding, removing etc... of items.
 */

/**
 * The default settings of the cart.
 *
 * @var object
 */


var defaultSettings$2 = {
	element: '.cart',
	cookie_name: 'cart',
	preview_class: '',
	loader: '',
	class: '',
	width: '60px',
	height: '60px',
	placement: 'right-top',
	fixed: true,
	hover_color: 'orange'
};

/**
 * Stores the container object.
 *
 * @var \Core\Container
 */
var Container$2 = void 0;

/**
 * Stores the event manager object.
 *
 * @var \Core\EventManager
 */
var EventManager$2 = void 0;

/**
 * Stores the request object.
 *
 * @var \Helpers\Request
 */
var Http = void 0;

/**
 * Stores the cart loader.
 *
 * @var HTMLDivElement
 */
var _loadingOverlay = void 0;

/**
 * Stores the items wrapper.
 *
 * @var HTMLDivElement
 */
var itemsDiv = void 0;

var Cart = function () {
	/**
  * - Initialize the IoC container
  * - Initialize the Request
  * - Initialize the EventManager
  * - Creates the preview and the icon of the cart.
  *
  * @param \Core\Container | container
  * @param \Helpers\Request | http
  * @param \Core\EventManager | eventManager
  * @return void
  */
	function Cart(container, http, eventManager) {
		_classCallCheck(this, Cart);

		Container$2 = container;
		Http = http;
		EventManager$2 = eventManager;

		this.previewElement = this.createPreviewElement();
		this.svgIcon = createIcon.call(this);
	}

	/**
  * Sets the object by the users setting.
  *
  * @param object | settings
  * @return void
  */


	_createClass(Cart, [{
		key: 'setup',
		value: function setup(settings) {
			if ((typeof settings === 'undefined' ? 'undefined' : _typeof(settings)) != 'object') {
				throw new InvalidArgumentException$1();
			}

			this.settings = Common.extend(defaultSettings$2, settings);

			this.setElement(this.settings.element);

			DOM.addClass(this.previewElement, 'closed');
			DOM.addClass(this.previewElement, this.settings.preview_class);

			this.bindEventListeners();
			this.addStyleTag();

			if (this.isEmpty(Cookie.get(this.settings.cookie_name))) {
				this.cart = {};
				this.setCart(this.cart);
			}
		}

		/**
   * Checks if the cart is empty
   *
   * @param object | cart
   * @return bool
   */

	}, {
		key: 'isEmpty',
		value: function isEmpty(cart) {
			return Common.emptyObject(cart);
		}

		/**
   * Initialize/Sets the cart as a cookie.
   *
   * @param object | cart
   * @return void
   */

	}, {
		key: 'setCart',
		value: function setCart(cart) {
			this.cart.id = Str.random(10);
			this.cart.items = [];
			this.cart.favorites = [];
			Cookie.set(this.settings.cookie_name, cart, 2);
		}

		/**
   * Adds an item to the cart.
   *
   * @param object | item
   * @return void
   */

	}, {
		key: 'addItem',
		value: function addItem(item) {
			this.cart = Cookie.get(this.settings.cookie_name);

			this.cart.items.push(item);

			Cookie.set(this.settings.cookie_name, this.cart, 2);
		}

		/**
   * Removes an item from the cart.
   *
   * @param object | item
   * @return void
   */

	}, {
		key: 'removeItem',
		value: function removeItem(item) {
			this.cart = Cookie.get(this.settings.cookie_name);

			this.cart.items.splice(this.cart.items.indexOf(item), 1);

			Cookie.set(this.settings.cookie_name, this.cart, 2);
		}

		/**
   * Adds the item to preview.
   *
   * @param array | items
   * @return void
   */

	}, {
		key: 'addToPreview',
		value: function addToPreview(items) {
			itemsDiv.innerHTML = '';

			var table = DOM.createElement('table');

			DOM.addClass(table, 'preview-table');

			for (var i = 0; i < items.length; i++) {

				var attributes = items[i];

				var tr = DOM.createElement('tr', {
					class: 'item'
				});

				for (var attribute in attributes) {
					var td = DOM.createElement('td');

					if (attribute == 'image') {
						var image = DOM.createElement('img', {
							src: attributes[attribute],
							width: '50px',
							height: '50px'
						});

						td.appendChild(image);
					} else {
						td.innerHTML = attributes[attribute];
					}

					tr.appendChild(td);
				}

				table.appendChild(tr);
			}

			itemsDiv.appendChild(table);
		}

		/**
   * Binds everthing to the element.
   *
   * @param string | selector
   * @return void
   */

	}, {
		key: 'setElement',
		value: function setElement(selector) {
			this.icon = DOM.find(selector);

			if (this.icon) {
				DOM.addClass(this.icon, this.settings.class);
				DOM.addClass(this.icon, this.settings.placement);
				this.icon.appendChild(this.svgIcon);
				this.icon.appendChild(this.previewElement);
			}
		}

		/**
   * Creates the cart details preview element.
   *
   * @return HTMLDivElement
   */

	}, {
		key: 'createPreviewElement',
		value: function createPreviewElement() {
			var previewElement = DOM.createElement('div', {
				id: 'preview'
			});

			itemsDiv = DOM.createElement('ul', {
				class: 'items'
			});

			previewElement.appendChild(itemsDiv);

			return previewElement;
		}

		/**
   * Add the eCommerce style tags to the DOM.
   *
   * @return void
   */

	}, {
		key: 'addStyleTag',
		value: function addStyleTag() {
			if (DOM.find('#eCommerce-Cart')) {
				return;
			}

			var position = this.settings.fixed ? 'fixed' : 'absolute';

			var css = '\n\t\t\t' + this.settings.element + ' {\n\t\t\t\tposition: ' + position + ';\n\t\t\t\tcursor: pointer;\n\t\t\t\tcolor: #ffffff;\n\t\t\t\tz-index: 998;\n\t\t\t}\n\n\t\t\t' + this.settings.element + ' > svg {\n\t\t\t\twidth: ' + this.settings.width + ';\n\t\t\t\theight: ' + this.settings.height + ';\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t' + this.settings.element + ' > svg:hover {\n\t\t\t\tfill: ' + this.settings.hover_color + ';\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t' + this.settings.element + '.top-right,\n\t\t\t' + this.settings.element + '.right-top {\n\t\t\t\tright: 10px;\n\t\t\t\ttop: 10px;\n\t\t\t}\n\n\t\t\t' + this.settings.element + '.left-top,\n\t\t\t' + this.settings.element + '.top-left {\n\t\t\t\tleft: 10px;\n\t\t\t\ttop: 10px;\n\t\t\t}\n\n\t\t\t' + this.settings.element + ' > #preview {\n\t\t\t\tposition: ' + position + ';\n\t\t\t\tz-index: 9999;\n\t\t\t\ttop: calc(10px + ' + this.settings.height + ');\n\t\t\t\ttransform: translateX(60px);\n\t\t\t\theight: 400px;\n\t\t\t\twidth: 300px;\n\t\t\t\tborder: 1px solid #e4e4e4;\n\t\t\t\tbackground: #ffffff;\n\t\t\t\ttransition: transform 1s, visibility 1s;\n\t\t\t\tcursor: default;\n\t\t\t\toverflow-Y: scroll;\n\t\t\t}\n\n\t\t\t' + this.settings.element + ' > #preview.opened {\n\t\t\t\tvisibility: visible;\n\t\t\t\ttransform: translateX(-240px);\n\t\t\t}\n\n\t\t\t' + this.settings.element + ' > #preview.closed {\n\t\t\t\tvisibility: hidden;\n\t\t\t\ttransform: translateX(60px);\n\t\t\t}\n\n\t\t\t' + this.settings.element + ' #preview > ul.items {\n\t\t\t\tpadding: 0;\n\t\t\t\tcolor: #000000;\n\t\t\t\tlist-style-type: none;\n\t\t\t}\n\n\t\t\t' + this.settings.element + ' #preview > ul.items > .preview-table td {\n\t\t\t\tpadding: 3px;\n\t\t\t}\n\n\t\t\t' + this.settings.element + ' .items.loading {\n\t\t\t\tdisplay: none;\n\t\t\t\toverflow-Y: none;\n\t\t\t}\n\n\t\t\t' + this.settings.element + ' .cart-loader-overlay {\n\t\t\t\tposition: fixed;\n\t\t\t\ttop: 0; \n\t\t\t    left: 0;\n\t\t\t    right: 0;\n\t\t\t    bottom: 0;\n\t\t\t\tbackground: #ffffff;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tmin-height: 100%;\n\t\t\t\toverflow: auto;\n\t\t\t}\n\n\t\t\t' + this.settings.element + ' .cart-loader-overlay .cart-loader {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tmargin-left: -25px;\n\t\t\t\tmargin-top: -25px;\n\t\t\t\tleft: 50%;\n\t\t\t\tright: 50%;\n\t\t\t\ttop: 50%;\n\t\t\t\tbottom: 50%;\n\t\t\t}\n\t\t';

			DOM.addStyle('Turbo-eCommerce-Cart', css);
		}

		/**
   * Creates an loading overlay.
   *
   * @return HTMLDivElement
   */

	}, {
		key: 'loadingOverlay',
		value: function loadingOverlay() {
			if (_loadingOverlay) {
				return _loadingOverlay;
			}

			var loader = void 0;

			if (this.settings.loader) {
				loader = DOM.createElement('img', {
					src: this.settings.loader,
					class: 'cart-loader'
				});
			} else {
				loader = createLoader();
			}

			_loadingOverlay = DOM.createElement('div', {
				class: 'cart-loader-overlay'
			});

			_loadingOverlay.appendChild(loader);

			return _loadingOverlay;
		}

		/**
   * Loading the cart preview.
   *
   * @return void
   */

	}, {
		key: 'previewStartLoading',
		value: function previewStartLoading() {
			DOM.addClass(itemsDiv, 'loading');
			this.previewElement.appendChild(this.loadingOverlay());
		}

		/**
   * Loading the cart preview.
   *
   * @return void
   */

	}, {
		key: 'previewStopLoading',
		value: function previewStopLoading() {
			if (DOM.find('.cart-loader-overlay', this.previewElement)) {
				this.previewElement.removeChild(this.loadingOverlay());
				DOM.removeClass(itemsDiv, 'loading');
			}
		}

		/**
   * Reloads the items in the cart preview.
   *
   * @return void
   */

	}, {
		key: 'reloadCartPreview',
		value: function reloadCartPreview() {
			this.previewStartLoading();
			var items = this.getCartItems();
			this.addToPreview(items);

			var instance = this;

			setTimeout(function () {
				instance.previewStopLoading.call(instance);
			}, 1000);
		}

		/**
   * Binds event listeners to the cart icon.
   *
   * @return void
   */

	}, {
		key: 'bindEventListeners',
		value: function bindEventListeners() {
			if (this.svgIcon == null) {
				return;
			}

			this.svgIcon.onclick = function (e) {
				e.preventDefault();
				var opening = DOM.toggleClass(this.previewElement, 'opened', 'closed');

				if (opening) {
					this.reloadCartPreview();
				}
			}.bind(this);

			EventManager$2.subscribe('cart.products.added', function (attributes) {
				var cart = Cookie.get(this.settings.cookie_name);
				cart.items.push(attributes);
				Cookie.set(this.settings.cookie_name, cart);
				this.reloadCartPreview();
			}.bind(this));
		}

		/**
   * Retrieve the carts items from the cookie.
   *
   * @return object
   */

	}, {
		key: 'getCartItems',
		value: function getCartItems() {
			var cart = Cookie.get(this.settings.cookie_name);

			return cart ? cart.items : [];
		}
	}]);

	return Cart;
}();

/**
 * Closes the cart preview element.
 *
 * @param event.click
 */


function close(event) {
	event.preventDefault();
	DOM.switchClasses(this.previewElement, 'opened', 'closed');
}

/**
 * Creates the cart svg icon.
 *
 * @return SVGSVGElement
 */
function createIcon() {
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
	var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

	svg.setAttribute('version', '1.1');
	svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
	svg.setAttribute('x', '0px');
	svg.setAttribute('y', '0px');
	svg.setAttribute('width', '446.843px');
	svg.setAttribute('height', '446.843px');
	svg.setAttribute('viewBox', '0 0 446.843 446.843');
	svg.setAttribute('style', 'enable-background:new 0 0 446.843 446.843;');
	svg.setAttribute('xml:space', 'preserve');

	path.setAttribute('d', 'M444.09,93.103c-2.698-3.699-7.006-5.888-11.584-5.888H109.92c-0.625,0-1.249,0.038-1.85,0.119l-13.276-38.27c-1.376-3.958-4.406-7.113-8.3-8.646L19.586,14.134c-7.374-2.887-15.695,0.735-18.591,8.1c-2.891,7.369,0.73,15.695,8.1,18.591l60.768,23.872l74.381,214.399c-3.283,1.144-6.065,3.663-7.332,7.187l-21.506,59.739c-1.318,3.663-0.775,7.733,1.468,10.916c2.24,3.183,5.883,5.078,9.773,5.078h11.044c-6.844,7.616-11.044,17.646-11.044,28.675c0,23.718,19.298,43.012,43.012,43.012s43.012-19.294,43.012-43.012c0-11.029-4.2-21.059-11.044-28.675h93.776c-6.847,7.616-11.048,17.646-11.048,28.675c0,23.718,19.294,43.012,43.013,43.012c23.718,0,43.012-19.294,43.012-43.012c0-11.029-4.2-21.059-11.043-28.675h13.433c6.599,0,11.947-5.349,11.947-11.948c0-6.599-5.349-11.947-11.947-11.947H143.647l13.319-36.996c1.72,0.724,3.578,1.152,5.523,1.152h210.278c6.234,0,11.751-4.027,13.65-9.959l59.739-186.387C447.557,101.567,446.788,96.802,444.09,93.103z M169.659,409.807c-10.543,0-19.116-8.573-19.116-19.116s8.573-19.117,19.116-19.117s19.116,8.574,19.116,19.117S180.202,409.807,169.659,409.807z M327.367,409.807c-10.543,0-19.117-8.573-19.117-19.116s8.574-19.117,19.117-19.117c10.542,0,19.116,8.574,19.116,19.117S337.909,409.807,327.367,409.807z M402.52,148.149h-73.161V115.89h83.499L402.52,148.149z M381.453,213.861h-52.094v-37.038h63.967L381.453,213.861z M234.571,213.861v-37.038h66.113v37.038H234.571z M300.684,242.538v31.064h-66.113v-31.064H300.684z M139.115,176.823h66.784v37.038h-53.933L139.115,176.823z M234.571,148.149V115.89h66.113v32.259H234.571z M205.898,115.89v32.259h-76.734l-11.191-32.259H205.898z M161.916,242.538h43.982v31.064h-33.206L161.916,242.538z M329.359,273.603v-31.064h42.909l-9.955,31.064H329.359z');

	g.appendChild(path);
	svg.appendChild(g);

	return svg;
}

/**
 * Creates the cart loader icon.
 *
 * @return SVGSVGElement
 */
function createLoader() {
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	var count = 12;
	var groups = [];
	var rectangels = [];
	var animations = [];

	svg.setAttribute('class', 'lds-spinner');
	svg.setAttribute('width', '200px');
	svg.setAttribute('height', '200px');
	svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
	svg.setAttribute('viewBox', '0 0 100 100');
	svg.setAttribute('preserveAspectRatio', 'xMidYMid');
	svg.setAttribute('style', 'background: none;');

	var rotation = 0;

	for (var i = 0; i < count; i++) {
		var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
		group.setAttribute('transform', 'rotate(' + rotation + ' 50 50)');
		rotation += 30;
		groups.push(group);
	}

	for (var i = 0; i < count; i++) {
		var rectangel = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		rectangel.setAttribute('x', '47');
		rectangel.setAttribute('y', '24');
		rectangel.setAttribute('rx', '9.4');
		rectangel.setAttribute('ry', '4.8');
		rectangel.setAttribute('width', '6');
		rectangel.setAttribute('height', '12');
		rectangel.setAttribute('fill', '#4658ac');
		rectangels.push(rectangel);
	}

	var begin = 0.09 * 11;

	for (var i = 0; i < count; i++) {
		var animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
		animate.setAttribute('attributeName', 'opacity');
		animate.setAttribute('values', '1;0');
		animate.setAttribute('times', '0;1');
		animate.setAttribute('dur', '1s');
		animate.setAttribute('begin', begin.toFixed(8) + 's');
		animate.setAttribute('repeatCount', 'indefinite');
		animations.push(animate);
		begin -= 0.09;
	}

	for (var i = 0; i < groups.length; i++) {
		var _group = groups[i];
		var _rectangel = rectangels[i];
		var _animate = animations[i];
		_rectangel.appendChild(_animate);
		_group.appendChild(_rectangel);
		svg.appendChild(_group);
	}

	DOM.addClass(svg, 'cart-loader');

	return svg;
}

/**
 * @file 
 * Filter class.
 *
 * The Filter Object, handles the filter of the products/services.
 */

/**
 * The default settings of the filter.
 */
var defaultSettings$3 = {
	element: '.filter',
	class: '',
	width: '',
	height: ''
};

/**
 * Stores the container object.
 *
 * @var \Core\Container
 */
var Container$3 = void 0;

var Filter = function () {
	/**
  * - Initialize the IoC container.
  *
  * @param \Core\Container | container
  * @return void
  */
	function Filter(container) {
		_classCallCheck(this, Filter);

		Container$3 = container;
	}

	/**
  * Setup the filter class.
  *
  * @param object | settings
  * @return void
  */


	_createClass(Filter, [{
		key: 'setup',
		value: function setup(settings) {
			if ((typeof settings === 'undefined' ? 'undefined' : _typeof(settings)) != 'object') {
				throw new InvalidArgumentException$1();
			}

			this.settings = Common.extend(defaultSettings$3, settings);

			document.addEventListener('DOMContentLoaded', function () {

				this.setElement(this.settings.element);

				this.addStyleTag();
			}.bind(this));
		}

		/**
   * Sets the element to be bound to.
   *
   * @param string | selector
   * @return void
   */

	}, {
		key: 'setElement',
		value: function setElement(selector) {
			this.wrapper = DOM.find(selector);

			DOM.addClass(this.wrapper, this.settings.class);
		}

		/**
   * Add the eCommerce style tags to the DOM.
   */

	}, {
		key: 'addStyleTag',
		value: function addStyleTag() {
			if (DOM.find('#Turbo-eCommerce-Filter')) {
				return;
			}

			var width = this.settings.width ? 'width:' + this.settings.width + ';' : '';
			var minWidth = this.settings.min_width || '200px';
			var height = this.settings.height || 'auto';

			var css = '\n\t\t\t' + this.settings.element + ' {\n\t\t\t\tposition: relative;\n\t\t\t\tmargin: 5px 5px;\n\t\t\t\tborder: 1px solid #e4e4e4;\n\t\t\t\t' + width + '\n\t\t\t\tmin-width: ' + minWidth + ';\n\t\t\t\theight: ' + height + ';\n\t\t\t\tmin-height: 200px;\n\t\t\t\tcolor: #ffffff;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\n\t\t';

			DOM.addStyle('Turbo-eCommerce-Filter', css);
		}
	}]);

	return Filter;
}();

/**
 * @file 
 * Products class.
 *
 * The Products component, handles the products tasks.
 */

/**
 * The default settings of each product.
 *
 * @var object
 */


var defaultSettings$4 = {
	element: '.products',
	class: '',
	item_class: '',
	add_button_class: 'btn btn-primary',
	favorite_button_class: 'btn btn-danger',
	width: '200px',
	height: '250px',
	attributes: ['name', 'price', 'deliveryTime', 'image'],
	url: 'products.php'
};

/**
 * Stores the container object.
 * 
 * @var \Core\Container
 */
var Container$4 = void 0;

/**
 * Stores the container object.
 * 
 * @var \Core\EventManager
 */
var EventManager$3 = void 0;

/**
 * Stores the request object.
 * 
 * @var \Helper\Request 
 */
var Http$1 = void 0;

/**
 * Stores the chunked per 
 * page products.
 * 
 * @var array
 */
var chunkedProducts = void 0;

var Products = function () {
	/**
  * Initalize the Container.
  *
  * @param \Core\Container | container
  * @param \Helpers\Request | http
  * @return void
  */
	function Products(container, http, eventManager) {
		_classCallCheck(this, Products);

		Container$4 = container;
		Http$1 = http;
		EventManager$3 = eventManager;
		chunkedProducts = [];
	}

	/**
  * Sets the given settings from the user.
  *
  * @param object | settings
  * @return void
  */


	_createClass(Products, [{
		key: 'setup',
		value: function setup(settings) {
			if ((typeof settings === 'undefined' ? 'undefined' : _typeof(settings)) != 'object') {
				throw new InvalidArgumentException$1();
			}

			this.settings = Common.extend(defaultSettings$4, settings);
			this.totalItems = null;

			document.addEventListener('DOMContentLoaded', function () {

				this.setElement(this.settings.element);

				this.addStyleTag();

				this.loadProducts(1);
			}.bind(this));
		}

		/**
   * Loads the products for the page.
   * 
   * @param number | pageNumber
   * @param bool | all
   */

	}, {
		key: 'loadProducts',
		value: function loadProducts() {
			var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
			var all = arguments[1];

			if (Container$4.Pagination && Container$4.Pagination.booted) {

				if (Container$4.Pagination.settings.proccessing == 'client-side') {
					return this.loadPageProductsByClient(pageNumber);
				} else if (Container$4.Pagination.settings.proccessing == 'server-side') {
					return this.loadPageProductsByServer(pageNumber);
				} else {
					throw new InvalidArgumentException$1('for proccessing you can choose \'server-side\' or \'client-side\' options.');
				}
			} else {
				this.loadPageProductsByServer();
			}
		}

		/**
   * Loads the products and 
   * replace them in the div container.
   *
   * @param number | pageNumber
   * @return void
   */

	}, {
		key: 'loadPageProductsByServer',
		value: function loadPageProductsByServer() {
			var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			var request = this.getProducts(pageNumber);

			request.then(function (products) {

				this.currentItems = products;

				for (var i = 0; i < this.currentItems.length; i++) {
					var product = this.currentItems[i];
					EventManager$3.publish('products.loading', product);
				}

				EventManager$3.publish('products.loaded', products);
				this.replaceItems(products);
				resolve();
			}.bind(this)).catch(function (error) {});

			return request;
		}

		/**
   * Loads the products and 
   * replace them in the div container.
   *
   * @return void
   */

	}, {
		key: 'loadPageProductsByClient',
		value: function loadPageProductsByClient(pageNumber) {
			var request = void 0;

			if (this.totalItems == null) {
				// need to fetch them from the server.
				request = this.getProducts();
			} else {
				// no need to wait can resolve immediately with the products. 
				request = Promise.resolve(this.totalItems);
			}

			request.then(function (products) {
				this.totalItems = products;

				var pages = this.calculateClientPages(products);

				this.currentItems = pages[pageNumber - 1];

				for (var i = 0; i < this.currentItems.length; i++) {
					var product = this.currentItems[i];
					EventManager$3.publish('products.loading', product);
				}

				EventManager$3.publish('products.loaded', products);
				this.replaceItems(this.currentItems);
				Promise.resolve(this.currentItems);
			}.bind(this)).catch(function (error) {});

			return request;
		}

		/**
   * Calculates the amount of pages for the client.
   *
   * @param array | products
   * @return array
   */

	}, {
		key: 'calculateClientPages',
		value: function calculateClientPages(products) {
			// We are using pagination so we need to update it too.
			Container$4.Pagination.settings.total_items = products.length;

			var perPage = Container$4.Pagination.settings.per_page;

			// We need to calculate the pages on full http request 
			// only once. so we check to see if we have results in our cache.
			if (chunkedProducts.length != 0) {
				return chunkedProducts;
			}

			chunkedProducts = Common.array_chunk(products, perPage);
			return chunkedProducts;
		}

		/**
   * Sets the DOM element 
   * for populating the products.
   *
   * @param string | selector
   * @return void
   */

	}, {
		key: 'setElement',
		value: function setElement(selector) {
			this.wrapper = DOM.find(selector);

			if (this.wrapper) {
				DOM.addClass(this.wrapper, this.settings.class);
			}
		}

		/**
   * Replace items in 
   * the products container.
   *
   * @param array | items
   * @return array
   */

	}, {
		key: 'replaceItems',
		value: function replaceItems(items) {
			if (!Array.isArray(items) || items.length <= 0 && typeof items[0] == 'string') {
				throw new InvalidArgumentException$1();
			}

			var products = this.buildProducts(items, this.settings.item_class, 'div');

			this.wrapper.innerHTML = '';
			products.forEach(function (product) {
				this.wrapper.appendChild(product);
			}.bind(this));

			return items;
		}

		/**
   * Makes an Ajax call to the 
   * server without parameters.
   *
   * @param number | pageNumber
   * @return Promise
   */

	}, {
		key: 'getProducts',
		value: function getProducts() {
			var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			var action = pageNumber ? this.settings.url + '?page=' + pageNumber : this.settings.url;

			return Http$1.get({
				url: action
			});
		}

		/**
   * Builds the html for the products.
   * 
   * @param array | attributesCollection
   * @param string | className
   * @param string | tagType
   * @return array
   */

	}, {
		key: 'buildProducts',
		value: function buildProducts(attributesCollection, className, tagType) {
			if (attributesCollection.constructor.name != 'Array') {
				throw new InvalidArgumentException$1();
			}

			var builtProducts = [];

			attributesCollection.forEach(function (attributes) {
				var builtProduct = this.buildProduct(attributes, className, tagType);
				builtProducts.push(builtProduct);
			}.bind(this));

			return builtProducts;
		}

		/**
   * Builds the html for a single product.
   *
   * @param object | attributes
   * @param string | className
   * @param string | tagType
   * @return object
   */

	}, {
		key: 'buildProduct',
		value: function buildProduct(attributes, className, tagType) {
			if ((typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) != 'object' || typeof tagType != 'string') {
				throw new InvalidArgumentException$1();
			}

			className = className || null;

			var product = DOM.createElement('div', {
				class: 'product'
			});

			DOM.addClass(product, className);

			var overlay = DOM.createElement('div', {
				class: 'product-overlay'
			});

			product.appendChild(overlay);

			for (var attribute in attributes) {
				if (!Common.in_array(attribute, this.settings.attributes)) {
					continue;
				}

				var _tag = DOM.createElement(tagType);

				if (attribute == 'image') {
					var image = DOM.createElement('img', {
						src: attributes[attribute]
					});
					product.appendChild(image);
				} else {
					_tag.innerHTML = attributes[attribute] || '';
				}

				DOM.addClass(_tag, 'product-' + Str.kebabCase(attribute));
				overlay.appendChild(_tag);
			}

			var tag = DOM.createElement('div', {
				id: 'actionButtons',
				class: 'action-buttons'
			});

			var addToCart = DOM.createElement('button', {
				id: 'addToCart',
				class: this.settings.add_button_class,
				type: 'button',
				text: '+'
			});

			var favorite = DOM.createElement('button', {
				id: 'favorite',
				class: this.settings.favorite_button_class,
				type: 'button',
				text: '&hearts;'
			});

			tag.appendChild(addToCart);
			tag.appendChild(favorite);

			addToCart.addEventListener('click', function (e) {
				e.preventDefault();
				EventManager$3.publish('cart.products.added', attributes);
			});

			overlay.appendChild(tag);

			return product;
		}

		/**
   * Add the eCommerce style tags to the DOM.
   */

	}, {
		key: 'addStyleTag',
		value: function addStyleTag() {
			if (DOM.find('#Turbo-eCommerce-Products')) {
				return;
			}

			var width = this.settings.width || 'auto';
			var height = this.settings.height || '200px';
			var minWidth = this.settings.min_width || '200px';
			var maxWidth = this.settings.max_width || '250px';

			var css = '\n\t\t\t.product {\n\t\t\t\tposition: relative;\n\t\t\t\tmargin: 5px 5px;\n\t\t\t\tborder: 1px solid #e4e4e4;\n\t\t\t\twidth: ' + width + ';\n\t\t\t\tmin-width: ' + minWidth + ';\n\t\t\t\tmax-width: ' + maxWidth + ';\n\t\t\t\theight: ' + height + ';\n\t\t\t\tcursor: pointer;\n\t\t\t\tcolor: #ffffff;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\n\t\t\t.product > .product-overlay {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\topacity: 0.5;\n\t\t\t\tz-index: 5;\n\t\t\t\ttransition: 1s all;\n\t\t\t\ttransform: translateX(-250px);\n\t\t\t}\n\n\t\t\t.product:hover > .product-overlay {\n\t\t\t\tbackground: rgba(0, 0, 0, 0.45);\n\t\t\t\ttransform: translateX(0px);\n\t\t\t\topacity: 1;\n\t\t\t\ttransition: 1s all;\n\t\t\t}\n\n\t\t\t.product > img {\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0;\n\t\t\t\ttop: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t}\n\n\t\t\t.product > .product-image {\n\t\t\t\tz-index: 0;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\t.product > .product-overlay > .product-name, \n\t\t\t.product > .product-overlay > .product-price,\n\t\t\t.product > .product-overlay > .product-delivery-time {\n\t\t\t\tz-index: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttext-align: center;\n\t\t\t\tmargin-top: 25px;\n\t\t\t}\n\n\t\t\t.product > .product-overlay > .action-buttons {\n\t\t\t\twidth: 100%;\n\t\t\t\tmargin-top: 10px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.product > .product-overlay > .action-buttons > #favorite {\n\t\t\t\tmargin-left: 10px;\n\t\t\t}\n\n\t\t';

			DOM.addStyle('Turbo-eCommerce-Products', css);
		}
	}]);

	return Products;
}();

/**
 * The Services Object, handles the services.
 */


var Services = function Services() {
	_classCallCheck(this, Services);
};

var defaultMessage$4 = 'sorry, no more pages.';

var NotInPageRangeException = function (_ExceptionHandler5) {
	_inherits(NotInPageRangeException, _ExceptionHandler5);

	function NotInPageRangeException() {
		var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, NotInPageRangeException);

		message = message || defaultMessage$4;

		var _this5 = _possibleConstructorReturn(this, (NotInPageRangeException.__proto__ || Object.getPrototypeOf(NotInPageRangeException)).call(this));

		_get(NotInPageRangeException.prototype.__proto__ || Object.getPrototypeOf(NotInPageRangeException.prototype), 'stackTrace', _this5).call(_this5, _this5, message);
		return _this5;
	}

	return NotInPageRangeException;
}(ExceptionHandler);

/**
 * @file 
 * Pagination class.
 *
 * The Pagination component, handles the pagination.
 */

/**
 * The default settings of the pagination.
 *
 * @var object
 */


var defaultSettings$5 = {
	element: '.pagination-links',
	proccessing: 'client-side',
	class: '',
	per_page: 5,
	total_items: 10
};

/**
 * Stores the container object.
 *
 * @var \Core\Container
 */
var Container$5 = void 0;

/**
 * Stores the products component.
 *
 * @var \Components\Products
 */
var Products$2 = void 0;

var Pagination = function () {
	/**
  * - Initialize the container object.
  * - Initialize the products component.
  *
  * @param \Core\Container | container
  * @param \Components\Products | products
  * @return void
  */
	function Pagination(container, products) {
		_classCallCheck(this, Pagination);

		this.setCurrent(1);
		Container$5 = container;
		Products$2 = products;
	}

	/**
  * Setup the pagination.
  *
  * @param object | settings
  * @return void
  */


	_createClass(Pagination, [{
		key: 'setup',
		value: function setup(settings) {
			if ((typeof settings === 'undefined' ? 'undefined' : _typeof(settings)) != 'object') {
				throw new InvalidArgumentException$1();
			}

			this.settings = Common.extend(defaultSettings$5, settings);

			this.totalPages = this.calculateTotalPages(this.settings.per_page, this.settings.total_items);

			this.setElement(this.settings.element);
			this.links = this.createLinks();
			this.bindEventListeners(this.links);
			this.replaceLinks(this.links);
		}

		/**
   * Sets the wrapper element.
   *
   * @param string | selector
   * @return void
   */

	}, {
		key: 'setElement',
		value: function setElement(selector) {
			this.wrapper = DOM.find(selector);

			DOM.addClass(this.wrapper, this.settings.class);
		}

		/**
   * Replaces the links in the wrapper.
   *
   * @param HTMLUListElement | links
   * @return void
   */

	}, {
		key: 'replaceLinks',
		value: function replaceLinks(links) {
			this.wrapper.innerHTML = '';
			this.wrapper.appendChild(links);
		}

		/**
   * Calculates the total pages.
   *
   * @param number | perPage
   * @param number | totalItems
   * @return number
   */

	}, {
		key: 'calculateTotalPages',
		value: function calculateTotalPages(perPage, totalItems) {
			perPage = parseInt(perPage);
			totalItems = parseInt(totalItems);

			return Math.ceil(totalItems / perPage);
		}

		/**
   * Binds the buttons events listeners.
   *
   * @param HTMLUListElement | links
   * @return void
   */

	}, {
		key: 'bindEventListeners',
		value: function bindEventListeners(links) {
			var instance = this;

			this.next.childNodes[0].onclick = function (e) {
				e.preventDefault();

				var requestedPage = instance.current + 1;

				if (instance.notInPageRange(requestedPage)) {
					throw new NotInPageRangeException();
				}

				Products$2.loadProducts(requestedPage).then(function (products) {
					instance.setCurrent(requestedPage);
				});
			};

			this.previous.childNodes[0].onclick = function (e) {
				e.preventDefault();

				var requestedPage = instance.current - 1;

				if (instance.notInPageRange(requestedPage)) {
					throw new NotInPageRangeException();
				}

				Products$2.loadProducts(requestedPage).then(function (products) {
					instance.setCurrent(requestedPage);
				});
			};

			for (var i = 0; i < this.pages.length; i++) {
				this.pages[i].childNodes[0].onclick = function (e) {
					e.preventDefault();

					var requestedPage = this.getAttribute('data-page-nr');

					Products$2.loadProducts(requestedPage).then(function (products) {
						instance.setCurrent(requestedPage);
					});
				};
			}
		}

		/**
   * Sets the current page.
   *
   * @param number | pageNumber
   * @return void
   */

	}, {
		key: 'setCurrent',
		value: function setCurrent(pageNumber) {
			this.current = parseInt(pageNumber);
			this.changeUrl(pageNumber);
			this.setActiveLink(pageNumber);
		}

		/**
   * Gets the current page.
   *
   * @return number
   */

	}, {
		key: 'getCurrent',
		value: function getCurrent() {
			return this.current;
		}

		/**
   * Creates the pagination links.
   *
   * @return HTMLUListElement
   */

	}, {
		key: 'createLinks',
		value: function createLinks() {
			var ul = document.createElement('ul');

			this.pages = this.createPageLinks();
			this.previous = this.createPreviousButton();
			this.next = this.createNextButton();

			ul.className = 'pagination';
			ul.appendChild(this.previous);

			this.pages.forEach(function (page) {
				ul.appendChild(page);
			});

			ul.appendChild(this.next);

			return ul;
		}

		/**
   * Creates the pages item links.
   *
   * @return array<HTMLLIElement>
   */

	}, {
		key: 'createPageLinks',
		value: function createPageLinks() {
			var pages = [];

			for (var i = 1; i <= this.totalPages; i++) {
				var pageItem = document.createElement('li');
				var link = document.createElement('a');
				pageItem.className = this.current == i ? 'page-item active' : 'page-item';
				link.className = 'page-link';
				link.setAttribute('href', '?page=' + i);
				link.setAttribute('data-page-nr', i);
				link.innerHTML = i;
				pageItem.appendChild(link);
				pages.push(pageItem);
			}

			return pages;
		}

		/**
   * Creates the previous button link.
   *
   * @return HTMLLIElement
   */

	}, {
		key: 'createPreviousButton',
		value: function createPreviousButton() {
			var li = document.createElement('li');
			var link = document.createElement('a');
			var span1 = document.createElement('span');
			var span2 = document.createElement('span');

			li.className = 'page-item';
			link.className = 'page-link';
			span2.className = 'sr-only';

			link.setAttribute('href', '');
			link.setAttribute('aria-label', 'Previous');
			span1.setAttribute('aria-hidden', 'true');

			span1.innerHTML = '&laquo;';
			span2.innerHTML = 'Previous';

			link.appendChild(span1);
			link.appendChild(span2);
			li.appendChild(link);

			return li;
		}

		/**
   * Creates the next button link.
   *
   * @return HTMLLIElement
   */

	}, {
		key: 'createNextButton',
		value: function createNextButton() {
			var li = document.createElement('li');
			var link = document.createElement('a');
			var span1 = document.createElement('span');
			var span2 = document.createElement('span');

			li.className = 'page-item';
			link.className = 'page-link';
			span2.className = 'sr-only';

			link.setAttribute('href', '');
			link.setAttribute('aria-label', 'Next');
			span1.setAttribute('aria-hidden', 'true');

			span1.innerHTML = '&raquo;';
			span2.innerHTML = 'Next';

			link.appendChild(span1);
			link.appendChild(span2);
			li.appendChild(link);

			return li;
		}

		/**
   * Checks if the given page is in range.
   *
   * @param number | pageNumber
   * @return bool
   */

	}, {
		key: 'notInPageRange',
		value: function notInPageRange(pageNumber) {
			return pageNumber > this.totalPages || pageNumber <= 0 || isNaN(pageNumber);
		}

		/**
   * Changes the url to a given page number.
   *
   * @param number | pageNumber
   * @return void
   */

	}, {
		key: 'changeUrl',
		value: function changeUrl(pageNumber) {
			pageNumber = pageNumber || queryString()['page'];
			window.history.replaceState('', '', this.updateURLParameter(window.location.href, 'page', pageNumber));
		}

		/**
   * Sets the active link.
   *
   * @param number | pageNumber
   * @return void
   */

	}, {
		key: 'setActiveLink',
		value: function setActiveLink(pageNumber) {
			for (var page in this.pages) {
				if (this.pages[page].childNodes[0].getAttribute('data-page-nr') == pageNumber) {
					DOM.addClass(this.pages[page], 'active');
				} else {
					DOM.removeClass(this.pages[page], 'active');
				}
			}
		}

		/**
   * Get the get variables from the url.
   *
   * @return array
   */

	}, {
		key: 'queryString',
		value: function queryString() {
			var vars = {};
			var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
				vars[key] = value;
			});

			return vars;
		}

		/**
   * Modifies the get parameter in the url.
   *
   * @param string | url
   * @param string | param
   * @param number | paramVal
   * @return string
   */

	}, {
		key: 'updateURLParameter',
		value: function updateURLParameter(url, param, paramVal) {
			var newAdditionalURL = "";
			var tempArray = url.split("?");
			var baseURL = tempArray[0];
			var additionalURL = tempArray[1];
			var temp = "";

			if (additionalURL) {
				tempArray = additionalURL.split("&");
				for (var i = 0; i < tempArray.length; i++) {
					if (tempArray[i].split('=')[0] != param) {
						newAdditionalURL += temp + tempArray[i];
						temp = "&";
					}
				}
			}

			var rowsText = temp + "" + param + "=" + paramVal;
			return baseURL + "?" + newAdditionalURL + rowsText;
		}

		/**
   * Resets the pagination.
   *
   * @return void
   */

	}, {
		key: 'reset',
		value: function reset() {
			this.setCurrent(1);
			this.changeUrl(1);
		}
	}]);

	return Pagination;
}();

var defaultMessage$5 = 'In order to use components you must register them with the shop!';

var ComponentNotRegisteredException = function (_ExceptionHandler6) {
	_inherits(ComponentNotRegisteredException, _ExceptionHandler6);

	function ComponentNotRegisteredException() {
		var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, ComponentNotRegisteredException);

		message = message || defaultMessage$5;

		var _this6 = _possibleConstructorReturn(this, (ComponentNotRegisteredException.__proto__ || Object.getPrototypeOf(ComponentNotRegisteredException)).call(this, message));

		_get(ComponentNotRegisteredException.prototype.__proto__ || Object.getPrototypeOf(ComponentNotRegisteredException.prototype), 'stackTrace', _this6).call(_this6, _this6, message);
		return _this6;
	}

	return ComponentNotRegisteredException;
}(ExceptionHandler);

var defaultSettings = {
	debug_level: 'error',
	element: 'body',
	inject_libraries: [],
	components: ['Products', 'Services', 'Filter', 'Pagination', 'Cart'],
	loading_animation: true
};

var externalLibraries = {
	bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
};

var _debugLevel = void 0;

var TurboEcommerce$1 = function () {
	function TurboEcommerce$1(settings) {
		_classCallCheck(this, TurboEcommerce$1);

		if ((typeof settings === 'undefined' ? 'undefined' : _typeof(settings)) != 'object') {
			throw new InvalidArgumentException$1();
		}

		this.container = new Container();
		this.settings = Common.extend(defaultSettings, settings);

		this.loadExternalLibraries();

		document.addEventListener('DOMContentLoaded', function () {
			this.setElement(this.settings.element);

			if (this.settings.loading_animation) {
				startLoading.call(this);
			}

			this.addStyleTag();
		}.bind(this));

		_debugLevel = this.settings.debug_level;

		if (_debugLevel == 'warning' || _debugLevel == 'info') {
			window.onerror = function () {
				return true;
			};
		}

		bindComponentsDependencies.call(this, settings.components);

		return new Proxy(this, {
			get: function get(target, source) {
				if (Common.in_array(source, settings.components)) {
					return target.container.make(source);
				} else if (target.container.instanceExist(source)) {
					return target.container.getInstance(source);
				}

				throw new ComponentNotRegisteredException('components must be registered in order to use them.');
			}
		});
	}

	_createClass(TurboEcommerce$1, [{
		key: 'loadExternalLibraries',
		value: function loadExternalLibraries() {
			var i = void 0;
			var libraries = this.settings.inject_libraries;

			for (i = 0; i < libraries.length; i++) {
				if (externalLibraries.hasOwnProperty(libraries[i])) {
					var id = 'Turbo-eCommerce-' + Str.ucfirst(libraries[i]);

					if (!DOM.find(id)) {
						DOM.addLinkedStyle(id, externalLibraries[libraries[i]]);
					}
				}
			}
		}

		/**
   * Sets the element to be bound to.
   *
   * @param string | selector
   * @return void
   */

	}, {
		key: 'setElement',
		value: function setElement(selector) {
			this.wrapper = DOM.find(selector);

			DOM.addClass(this.wrapper, this.settings.class);
		}

		/**
   * Add the eCommerce style tags to the DOM.
   */

	}, {
		key: 'addStyleTag',
		value: function addStyleTag() {
			if (DOM.find('#Turboe-Commerce')) {
				return;
			}

			var css = '\n\t\t\t' + this.settings.element + ' {\n\t\t\t\tposition: relative;\n\t\t\t\tclear: both;\n\t\t\t}\n\n\t\t\t.loading-progress-bar {\n\t\t\t\tposition: fixed;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\theight: 5px;\n\t\t\t\twidth: 100%;\n\t\t\t\t-webkit-box-shadow: 0px 0px 5px 1px rgba(168,168,168,1);\n\t\t\t\t-moz-box-shadow: 0px 0px 5px 1px rgba(168,168,168,1);\n\t\t\t\tbox-shadow: 0px 0px 5px 1px rgba(168,168,168,1);\n\t\t\t}\n\n\t\t\t.loading-progress-bar > .loading-progress-fill {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tposition: absolute;\n\t\t\t\tbackground-color: #9dd2ff;\n\t\t\t\ttransform: translateX(-' + document.documentElement.clientWidth + 'px);\n\t\t\t}\n\t\t';

			DOM.addStyle('Turbo-eCommerce', css);
		}
	}], [{
		key: 'debugLevel',
		value: function debugLevel() {
			return _debugLevel;
		}
	}]);

	return TurboEcommerce$1;
}();

/**
 * Binds components dependencies.
 *
 * @param object | components
 * @return void
 */


function bindComponentsDependencies(components) {

	this.container.setInstance('Events', new EventManager());

	var request = this.container.make(new Request());

	this.container.bind('Filter', function (container) {
		var component = new Filter(container);
		component.booted = true;
		return component;
	});

	this.container.bind('Services', function (container) {
		var component = new Services(container);
		component.booted = true;
		return component;
	});

	this.container.bind('Products', function (container) {
		var component = new Products(container, request, container.Events);
		component.booted = true;
		return component;
	});

	this.container.bind('Pagination', function (container) {
		var component = new Pagination(container, container.make('Products'), container.Events);
		component.booted = true;
		return component;
	});

	this.container.bind('Cart', function (container) {
		var component = new Cart(container, request, container.Events);
		component.booted = true;
		return component;
	});

	this.container.Filter.booted = false;
	this.container.Services.booted = false;
	this.container.Products.booted = false;
	this.container.Pagination.booted = false;
	this.container.Cart.booted = false;
}

/**
 * Attaches a loader to the top of the screen
 * and hides the content.
 *
 * @return void 
 */
function startLoading() {
	var div = DOM.createElement('div', {
		class: 'loading-progress-bar'
	});

	var fill = DOM.createElement('span', {
		class: 'loading-progress-fill'
	});

	div.appendChild(fill);
	document.body.appendChild(div);

	var progress = document.documentElement.clientWidth;

	window.requestAnimationFrame(progressDraw);

	var content = this.wrapper;
	var opacity = 0;

	content.style.opacity = "0";

	function progressDraw() {
		fill.style.transform = 'translateX(-' + progress + 'px)';
		progress -= 3;

		if (progress < document.documentElement.clientWidth * 0.80) {
			done();
			return;
		}

		if (progress <= 0) {
			return;
		}

		window.requestAnimationFrame(progressDraw);
	}

	function done() {
		fill.style.opacity = progress / 1000;
		fill.style.transform = 'translateX(-' + progress + 'px)';

		progress -= 15;

		if (progress < 100) {
			content.style.opacity = opacity;
			opacity += 0.2;
		}

		if (progress <= 0) {

			if (typeof div != 'undefined') {
				div.parentNode.removeChild(div);
			}

			return;
		}

		window.requestAnimationFrame(done);
	}
}

module.exports = TurboEcommerce$1;