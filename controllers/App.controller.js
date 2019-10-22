sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("example.controllers.App", {
        onOpenDialog : function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});
