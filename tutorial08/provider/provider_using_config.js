//
// * Created by nmukammel on 7/14/17.
//

var app = angular.module("app", []);
app.controller("ctrl", ["$scope", "sumProvider", function($scope, sumProvider){
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function () {
        sumProvider.getSum($scope.a, $scope.b, function (result) {
            $scope.sum = result
        })
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

//  this part has already been executed during config stage
    var introText;
    
    this.config = function (text) {
        introText = text;
    }

//  this part gets executed during runtime
    this.$get = ["$log", function($log) {
        $log.log(introText)

        var oSumProvider = {};

        oSumProvider.getSum = function(a, b, cb) {
            var sum = parseInt(a) + parseInt(b)
            cb(sum)
        }
        return oSumProvider
    }]
});

app.config(["sumProviderProvider", function (sumProviderProvider) {

//  execute the config method of the provider
//  and pass it the string
    sumProviderProvider.config("Provider initialized already ...")
}])
// <!--*************       Provider        *************-->