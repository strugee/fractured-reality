(function(){
	'use strict';

	// If changing this make sure to make the same change in the HTML
	var debuggerEnabled = true;
	var debuggerToggle;
	var debuggerToggleStateText;
	var debuggerPanel = {};
	debuggerPanel.commands = {};
	debuggerPanel.commands.gridInspector = {};
	var startButton;

	// Wait for the DOM to be ready
	document.addEventListener('DOMContentLoaded', init);

	function init() {
		// Initialize element variables
		startButton = document.querySelector('#start');
		debuggerToggle = document.querySelector('#debugger');
		debuggerToggleStateText = document.querySelector('#debuggerState');
		debuggerPanel.panel = document.querySelector('#debuggerPanel');
		debuggerPanel.render = document.querySelector('#debuggerRender');

		// Reset button state
		startButton.removeAttribute('disabled');

		// Set up event handlers
		startButton.addEventListener('click', initGame);

		debuggerToggle.addEventListener('click', function(event) {
			switch (debuggerToggleStateText.innerText) {
			case 'ON':
				debuggerToggleStateText.innerText = 'OFF';
				debuggerEnabled = false;
				debuggerPanel.panel.setAttribute('hidden', '');
				console.log('Debugger disabled.');
				break;
			case 'OFF':
				debuggerToggleStateText.innerText = 'ON';
				debuggerEnabled = true;
				debuggerPanel.panel.removeAttribute('hidden');
				console.log('Debugger enabled.');
				break;
			default:
				throw new Error('Debugger button is in an unknown state!');
			}
		});

		// Load debugger components and set up debugger panel commands
		var debuggerComponents = require('./debugger/*.js', {mode: 'list'});
		debuggerComponents.forEach(function(component) {
			var cmd = component.name.split('/')[component.name.split('/').length - 1].split('.')[0];
			debuggerPanel.commands[cmd] = component.module;
			debuggerPanel.commands[cmd].trigger = document.querySelector('#' + cmd);
			debuggerPanel.commands[cmd].trigger.removeAttribute('disabled', '');
			debuggerPanel.commands[cmd].trigger.addEventListener('click', function(event) {
				// If there's a current command...
				if (typeof debuggerPanel.commands.current == 'object') {
					// ...make that button active and call the old command's teardown
					debuggerPanel.commands.current.trigger.removeAttribute('disabled');
					debuggerPanel.commands.current.teardown(debuggerPanel.render);
				}

				// Disable the selected button and set the current command
				this.setAttribute('disabled', '');
				debuggerPanel.commands.current = debuggerPanel.commands[cmd];
				
				debuggerPanel.commands[cmd].init(debuggerPanel.render);
			});
			console.log('Loaded debugger component: ' + cmd);
		});
	}

	function initGame () {
		var BABYLON = require('babylonjs/babylon.js');

		startButton.setAttribute('disabled', '');
		
		console.log("Hello BabylonJS");
		
		// Get the canvas element from our HTML above
		var canvas = document.querySelector("#render");

		// Load the BABYLON 3D engine
		var engine = new BABYLON.Engine(canvas, true);
		
		// This begins the creation of a function that we will 'call' just after it's built
		var createScene = function () {

			// Now create a basic Babylon Scene object 
			var scene = new BABYLON.Scene(engine);

			// Change the scene background color to black.
			scene.clearColor = new BABYLON.Color3(0, 0, 0);

			// This creates and positions a free camera
			var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

			// This targets the camera to scene origin
			camera.setTarget(BABYLON.Vector3.Zero());

			// This attaches the camera to the canvas
			camera.attachControl(canvas, false);

			// This creates a light, aiming 0,1,0 - to the sky.
			var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

			// Dim the light a small amount
			light.intensity = .5;

			// Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
			var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

			// Move the sphere upward 1/2 its height
			sphere.position.y = 1;

			// Let's try our built-in 'ground' shape.  Params: name, width, depth, subdivisions, scene
			var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

			// Leave this function
			return scene;

		};  // End of createScene function
		
		var scene = createScene();
		
		engine.runRenderLoop(function () {
			scene.render();
		});
		
		window.addEventListener("resize", function () {
			engine.resize();
		});
	}
})();
