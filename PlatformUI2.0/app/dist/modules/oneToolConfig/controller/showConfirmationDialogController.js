/*******************************************************************************
 * Copyright 2017 Cognizant Technology Solutions
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 ******************************************************************************/
//// <reference path="../../../_all.ts" />
var ISightApp;
(function (ISightApp) {
    var ShowToolConfirmationDialogController = /** @class */ (function () {
        function ShowToolConfirmationDialogController($mdDialog, $route, $location) {
            this.$mdDialog = $mdDialog;
            this.$route = $route;
            this.$location = $location;
            this.statusObject = this['locals'].statusObject;
            this.selectedOperation = this['locals'].selectedOperation;
            this.operationName = this['locals'].operationName;
            this.notification = 'Are you sure you want to ' + this.selectedOperation + ' this ' + this.operationName + '?';
        }
        ShowToolConfirmationDialogController.prototype.hide = function () {
            this.$mdDialog.hide();
        };
        ShowToolConfirmationDialogController.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        ShowToolConfirmationDialogController.prototype.finalConfirmation = function () {
            this.statusObject.status = true;
            this.hide();
        };
        ShowToolConfirmationDialogController.$inject = ['$mdDialog', '$route', '$location'];
        return ShowToolConfirmationDialogController;
    }());
    ISightApp.ShowToolConfirmationDialogController = ShowToolConfirmationDialogController;
})(ISightApp || (ISightApp = {}));
//# sourceMappingURL=showConfirmationDialogController.js.map