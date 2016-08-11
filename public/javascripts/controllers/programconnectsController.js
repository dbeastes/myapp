"use strict";

/**
 * controller for Program Connects Controller
 */
app.controller('programconnectsController', ["$scope", "$rootScope", "$http", "$location",
function ($scope, $rootScope, $http, $location) {
        var path = $location.path();
        //var arrPath = path.split( '/' );
        var arrPath = window.location.pathname.split('/');
        for (var i = 0; i < arrPath.length; i++) {
            console.log("param: " + arrPath[i]);
        }
        var idVal = arrPath[3];
        var meth = "";
        var urlID = "";
        if (idVal == "NEW") {
            meth = 'POST';

            $scope.pc = {};
            $scope.pc._id = '';
            $scope.pc.status = '';
            $scope.pc.programID = '';
            $scope.pc.mguID = '';
            $scope.pc.defaultUWID = '';
            $scope.pc.wholesaleID = '';
            $scope.pc.defaultWholesaleRepID = 0;
            $scope.pc.defaultWholesaleFee = 0;
            $scope.pc.defaultWholesaleCom = 0;
            $scope.pc.agencyID = '';
            $scope.pc.defaultRetailFee = 0;
            $scope.pc.defaultRetailCom = 0;

            $scope.options_defaultUWID = [{
                "_id": "12345",
                "name": "Select an item..."
            }];
            $scope.options_defaultWholesaleRepID = [{
                "_id": "12345",
                "name": "Select an item..."
            }];

        } else {
            meth = 'PUT';
            $http.get('/api_v2/programconnects/' + idVal, {
                params: {}
            }).then(function (response) {

                urlID = "/" + response.data._id;

                $scope.pc = {};
                $scope.pc._id = response.data._id;
                $scope.pc.status = response.data.status;
                $scope.pc.mguID = response.data.mguID._id;

                // Populate the Default Underwriter Drop-Down
                $http.get('/api/users?agency=' + response.data.mguID._id, {
                    params: {}
                }).then(function (response) {
                    return response.data.map(function (item) {
                        return item;
                    });
                }).then(function (resp) {
                    resp = JSON.parse(JSON.stringify(resp));

                    // Clear the drop-downs
                    $scope.options_defaultUWID = [];

                    for (var i = 0; i < resp.length; i++) {
                        $scope.options_defaultUWID.push({
                            "_id": resp[i]._id,
                            "name": resp[i].firstName + ' ' + resp[i].lastName
                        });
                    }
                });

                $scope.programID = response.data.programID;
                $scope.selected_defaultUWID = response.data.defaultUWID;
                $scope.wholesaleID = response.data.wholesaleID;

                $http.get('/api/users?agency=' + $scope.wholesaleID._id, {
                    params: {}
                }).then(function (response) {
                    return response.data.map(function (item) {
                        return item;
                    });
                }).then(function (resp) {
                    resp = JSON.parse(JSON.stringify(resp));
                    // Clear the drop-downs
                    $scope.options_defaultWholesaleRepID = [];
                    // Populate the drop-downs
                    for (var i = 0; i < resp.length; i++) {
                        $scope.options_defaultWholesaleRepID.push({
                            "_id": resp[i]._id,
                            "name": resp[i].firstName + ' ' + resp[i].lastName
                        });
                    }
                });

                $scope.selected_defaultWholesaleRepID = response.data.defaultWholesaleRepID;
                $scope.pc.defaultWholesaleFee = response.data.defaultWholesaleFee;
                $scope.pc.defaultWholesaleCom = response.data.defaultWholesaleCom;
                $scope.agencyID = response.data.agencyID;
                $scope.pc.defaultRetailFee = response.data.defaultRetailFee;
                $scope.pc.defaultRetailCom = response.data.defaultRetailCom;

            });
        }

        $scope.updateByProgram = function ($item, $model, $label) {
            // Set the MGU ID
            $scope.pc.mguID = $item.mguID;

            // Populate the Default Underwriter Drop-Down
            $http.get('/api/users?agency=' + $item.mguID, {
                params: {}
            }).then(function (response) {
                return response.data.map(function (item) {
                    return item;
                });
            }).then(function (resp) {
                resp = JSON.parse(JSON.stringify(resp));

                // Clear the drop-downs
                $scope.options_defaultUWID = [];

                for (var i = 0; i < resp.length; i++) {
                    $scope.options_defaultUWID.push({
                        "_id": resp[i]._id,
                        "name": resp[i].firstName + ' ' + resp[i].lastName
                    });
                }
            });
        };

        $scope.updateByWholesale = function ($item, $model, $label) {

            // Populate the Default Underwriter Drop-Down
            $http.get('/api/users?agency=' + $item._id, {
                params: {}
            }).then(function (response) {
                return response.data.map(function (item) {
                    return item;
                });
            }).then(function (resp) {
                resp = JSON.parse(JSON.stringify(resp));

                // Clear the drop-downs
                $scope.options_defaultWholesaleRepID = [];

                for (var i = 0; i < resp.length; i++) {
                    $scope.options_defaultWholesaleRepID.push({
                        "_id": resp[i]._id,
                        "name": resp[i].firstName + ' ' + resp[i].lastName
                    });
                }
            });
        };

        $scope.getPrograms = function (val) {
            return $http.get('/searchv2/programs?term=' + val, {
                params: {}
            }).then(function (response) {
                return response.data.map(function (item) {
                    return item;
                });
            }).then(function (object) {

                console.log(JSON.stringify(object));

                return object;
            });
        };

        $scope.getAgency = function (val) {
            return $http.get('/searchv2/agencies?term=' + val, {
                params: {}
            }).then(function (response) {
                return response.data.map(function (item) {
                    return item;
                });
            }).then(function (object) {

                console.log(JSON.stringify(object));

                return object;
            });
        };

        $scope.save = function (e) {
            console.log('$scope.pc: ' + JSON.stringify($scope.pc));

            if ($scope.pc._id === "") {
                delete $scope.pc._id;
            }

            $scope.pc.agencyID = $scope.agencyID._id;
            $scope.pc.wholesaleID = $scope.wholesaleID._id;
            $scope.pc.defaultWholesaleRepID = $scope.selected_defaultWholesaleRepID._id;
            $scope.pc.programID = $scope.programID._id;
            $scope.pc.defaultUWID = $scope.selected_defaultUWID._id;

            console.log("PROGRAM CONNECT PAYLOAD: " + JSON.stringify($scope.pc));

            $http({
                    method: meth,
                    url: '/collections/programconnects' + urlID,
                    data: $scope.pc,
                    headers: {
                        'Content-Type': 'application/json'
                    } // set the headers so angular passing info as form data (not request payload)
                })
                .success(function (data) {
                    window.location = "/agency/" + $scope.agencyID._id + "#" + "programs";
                })
                .error(function (data) {
                    swal("Error saving program connection", JSON.stringify(data));
                });
        };
}]);
