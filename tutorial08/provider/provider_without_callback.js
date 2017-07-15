//
// * Created by nmukammel on 7/14/17.
//

var app = angular.module("app", []);
app.controller("ctrl", ["$scope", "sumProvider", function($scope, sumProvider){
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function () {
        $scope.sum = sumProvider.getSum($scope.a, $scope.b)
    }
}]);


// <!--*************       Provider        *************-->
//  A provider gets initiated during config stage
//      its name has to be provided
//          followed by the word Provider
//      to the app.config()
//  The config function provides configuration to the provider
//  Any other service if has to be used in the provider
//  Then it has to be passed to the this.$get() function
//      which is the constructor function of the provider

app.provider('sumProvider', function () {

    this.$get = ["$log", function($log) {
        $log.log("Provider initialized already ...")

        var oSumProvider = {};

        oSumProvider.getSum = function(a, b) {
            var sum = parseInt(a) + parseInt(b)
            return sum
        }
        return oSumProvider
    }]
});

app.config(["sumProviderProvider", function (sumProviderProvider) {
    
}])
// <!--*************       Provider        *************-->