var app = angular.module("app", []);
app.controller("ctrl", ["$scope", "sumFactory", function($scope, sumFactory){
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function () {

        // the callback function ensures javascript proceeds asynchronously
        // without waiting for the result of the getSum() function
        // it moves on to the next line of code

        sumFactory.getSum($scope.a, $scope.b, function(result){
            $scope.sum = result
        })
    }
}]);


// <!--*************       Factory        *************-->
//  a factory is a service which
//      instantiates a service object
//      adds a method/function to that object
//          The function in turn works to add its properties or variables to the object
//  The factory then return the object to the controller using it
//      So, the method added to the factory-service-object can be referred to in the controller as
//          factory_name.method_name(parameters_if_any)

app.factory('sumFactory', ['$http', '$log', function ($http, $log) {

    $log.log("Instantiating Factory ...")

    var oSumService = {};

    // the callback function ensures javascript proceeds asynchronously
    // without waiting for the result of the getSum() function
    // it moves on to the next line of code in the controller
    // where the getSum is being called

    oSumService.getSum = function(a, b, callback) {
        var sum = parseInt(a) + parseInt(b)
        callback(sum)
    }

    return oSumService
}]);
// <!--*************       Factory        *************-->