sap.ui.define([
    "sap/ui/core/mvc/Controller"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projetodialogs.controller.Main", {
            onInit: function () {

            },

            _getDialog: function() {
                if (!this._oDialog) {
                    
                    this._oDialog = sap.ui.xmlfragment("projetodialogs.view.HelloDialog", this);
                    this.getView().addDependent(this._oDialog);
                }
                return this._oDialog;
            },

            onShowDialog: function () {
                this._getDialog().open();
            },

            onCloseDialog: function() {
                this._getDialog().close();
            }
        });
    });
