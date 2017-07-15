var app = angular.module("app", []);
app.controller("ctrl", ["$scope", "xFactory", "yService", "zProvider", function($scope, xFactory, yService, zProvider){
    $scope.a = xFactory.getx()
    $scope.b = yService.gety()
    //
    $scope.doSum = function () {
        zProvider.getSum($scope.a, $scope.b, function (result) {
            $scope.sum = result
        })
    }
}]);

// a factory can return anything
app.factory('xFactory', function () {

    var oXFactory = {};

    oXFactory.getx = function () {
        return 20
    }

    return oXFactory;
})

// // a service returns an object
app.service('yService', function () {
    this.gety = function () {
        return 50
    }
})

// // the provider gets instantiated during config
// // everything except the this.$get() function in it gets called before run
// // the this.$get() gets called when the provider gets used
app.provider('zProvider', function (){
    var introText;

    this.config = function (text) {
        introText = text;
    }

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

app.config(["zProviderProvider", function (zProviderProvider) {
    zProviderProvider.config("Provider initialized already ...")
}])