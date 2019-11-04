sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
//	"use strict";

	return Controller.extend("demo.selectDialog.controller.View1", {
		onHelpRequest : function(oEvent){
			var oDialog = new sap.ui.xmlfragment("demo.selectDialog.fragments.helpDialog",this);
			this.getView().addDependent(oDialog);
			var input = oEvent.getParameters().id.split("--")[2];
			
			if(input == "input2"){
				oDialog.bindAggregation("items",{
				path : "country>/Countries",
				template : new sap.m.StandardListItem({
					title : "{country>countryName}"
				})
			});
			}
			else{
				oDialog.bindAggregation("items",{
				path : "city>/Cities",
				template : new sap.m.StandardListItem({
					title : "{city>cityName}"
				})
			});
			}
			
			oDialog.open();
			
		}
		/*onSelection : function(oParams){
			var selOptn = oParams.getParameters().selectedItem.getTitle();
			//this.getView().byId("input1").setValue(selOptn);
		}*/
	});
});