sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/learn/walkthrough/model/models",
	"./controller/HelloDialog"
], function (UIComponent, Device, models, HelloDialog) {
	"use strict";

	return UIComponent.extend("com.learn.walkthrough.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			//set Dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
			
			// create the views based on the url/hash
			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
		exit: function(){
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		openHelloDialog: function(){
			this._helloDialog.open();
		}
	});
});
