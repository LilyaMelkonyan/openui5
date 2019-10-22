sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";
	// sap.ui.core.BusyIndicator.show();

	new ComponentContainer({
		name: "example",
		settings : {
			id : "example"
		},
		async: true
	}).placeAt("content");
});