sap.ui.define([
],
	function () {
		"use strict";

		return  {
			statusText: function(sStatus){
				var resourceBundle = this.getView().getModel('i18n').getResourceBundle();

                switch(sStatus){
                    case 'A' : return resourceBundle.getText('A');
                    case 'B' : return resourceBundle.getText('B');
                    case 'C' : return resourceBundle.getText('C');
                    default : return sStatus;
                }
			}
		};
	});
