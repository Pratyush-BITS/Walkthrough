sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageToast, JSONModel) {
		"use strict";

		return Controller.extend("com.learn.walkthrough.controller.HelloPanel", {
			onInit: function(){
				var oData = {
					recipient : {
					   name : "World"
					}
				 };
				 var oModel = new JSONModel(oData);
				 this.getView().setModel(oModel);
			},
            onPress: function(){
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				
				MessageToast.show(sMsg);
			},
			onOpenDialog : function () {
				this.getOwnerComponent().openHelloDialog();
			},
			
        });
});