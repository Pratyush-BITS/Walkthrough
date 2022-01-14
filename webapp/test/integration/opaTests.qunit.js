/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/learn/walkthrough/test/integration/NavigationJourney"
	], function () {
		QUnit.start();
	});
});
