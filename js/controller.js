app.controller("cricctrl", function ($scope, cricfactory) {
    $scope.searchByPid = function () {
        console.log("Checking");
        var playerId = $scope.playerId;
        var promise = cricfactory.serverCall(playerId);
        promise.then(function (data) {
            $scope.result = data;
        }, function (error) {
            $scope.error = error;
        });
    }
});