sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Fragment} ManagedObject
	 */
	function (ManagedObject,Fragment) {
		"use strict";

		return ManagedObject.extend("com.learn.walkthrough.controller.HelloDialog", {

            constructor: function(oView){
                this._oView = oView;
            },
            
            exit: function(){
                delete this._oView;
            },

			open: function(){
                var oView = this._oView;

                //load asynchronous XML Fragment
                if (!this.pDialog) {

                    var oFragmentController = {
                        onCloseDialog : function () {
                            oView.byId("helloDialog").close();
                        }
                    };

                    // load asynchronous XML Fraagment
					this.pDialog = Fragment.load({
                        id: oView.getId(),
						name: "com.learn.walkthrough.fragment.HelloDialog",
                        controller: oFragmentController
					}).then(function(oDialog){
                        //connect dialog to root view of this component(models, lifecycle) 
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
				} 
				this.pDialog.then(function(oDialog) {
					oDialog.open();
				});

            }	
		});
	});
