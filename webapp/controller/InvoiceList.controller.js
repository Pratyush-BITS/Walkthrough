sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"../model/Formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageToast,JSONModel,Formatter) {
		"use strict";

		return Controller.extend("com.learn.walkthrough.controller.InvoiceList", {
			
			format: Formatter,

			onInit: function(){
				var oCurrencyModel= new JSONModel({
                    INR: "₹"
                });
                this.getView().setModel(oCurrencyModel, "currency");
               
			},
            onClick: function(){
                MessageToast.show("hey");
            },
			onFilterInvoices: function(oEvent){
				
				var aFilter = [];
				var sQuery = oEvent.getParamenter("query");
				
				// Read about Filter & Filter operator :
				// Filter -> https://sapui5.hana.ondemand.com/#/api/sap.ui.model.Filter
				// FilterOperator -> https://sapui5.hana.ondemand.com/#/api/sap.ui.model.FilterOperator
				if(sQuery){
					aFilter.push(new Filter("ProductName", FilterOperator.StartsWith))
				}

				var oList = this.byId("invoiceList");
				var oBinding = oList.getBinding('items');
				oBinding.Filter(aFilter)

			}	
		});
	});
