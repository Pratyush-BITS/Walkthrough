sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageToast) {
		"use strict";

		return Controller.extend("com.learn.walkthrough.controller.App", {
			onInit: function () {

			},
			onPress: function(){
				MessageToast.show("Haai");
			}
		});
	});
