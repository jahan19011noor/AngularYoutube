var app = angular.module("app", []);
app.controller("ctrl", ["$scope", "$http", "$log", function($scope, $http, $log){
    $scope.a = 10
    $scope.b = 20

    $scope.doubleAndSum = function () {
        $http({
            url:"http://dummyurl.com/sum?a=" + $scope.a + "&b=" + $scope.b,
            method:"GET"
        })
        .then(
            function (res) {
                //success function
                $scope.sum = res.data
            },
            function (res) {
                //failure function
                // debugger;
                $log.error("Url not found: 404")
                $scope.a = $scope.a * 2
                $scope.b = $scope.b * 2
                $scope.sum = parseInt($scope.a) + parseInt($scope.b)
            }
        )
    }
}])

// <!--*************       Notes        *************-->
//  $http is the built in function for sending ajax request to server side
//  The first function after then is executed on success
//  the second one is executed on failure
//  the $http({}) contains the url and method and other stuff related to the request
//  it essentially prepares the request
//  debugger stops execution at that point
//  log allows to display data to the console
// <!--*************       Notes        *************-->