//
// * Created by nmukammel on 7/14/17.
//

var app = angular.module("app", []);
app.controller("ctrl", ["$scope", "sumService", function($scope, sumService){
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function () {
        $scope.sum = sumService.getSum($scope.a, $scope.b)
    }
}]);


// <!--*************       Service        *************-->
//  a service is a service which
//      itself acts as a constructor function
//  So, the internal functions have to be assigned to 'this.'
//  The contorller can than refer to the internal function directly
//      with service_name.function_name(parameters_if_any)

app.service('sumService', ['$log', function ($log) {

    $log.log("Instantiating Service ...")

    this.getSum = function(a, b) {
        return sum = parseInt(a) + parseInt(b)
    }
}]);
// <!--*************       Service        *************-->