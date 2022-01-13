sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageToast,JSONModel) {
		"use strict";

		return Controller.extend("com.learn.walkthrough.controller.InvoiceList", {
			onInit: function(){
				var oCurrencyModel= new JSONModel({
                    INR: "₹"
                });
                this.getView().setModel(oCurrencyModel, "currency");
               
			},
            onClick: function(){
                MessageToast.show("hey");
            }			
		});
	});
