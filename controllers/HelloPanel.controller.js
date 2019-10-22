sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("example.controllers.HelloPanel", {
        onShowHello : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient, 'Lily']);
            MessageToast.show(sMsg);
        },
        onOpenDialog : function () {
            this.getOwnerComponent().openHelloDialog();
        },
        onAfterRendering: function() {
            document.getElementById('loader').style.display = 'none'
            // sap.ui.core.BusyIndicator.hide();
        }
    });
});
