app.controller("cricctrl", function ($scope, cricfactory) {
    $scope.searchByPid = function () {
        var playerId = $scope.playerId;
        var promise = cricfactory.serverCall(playerId);
        promise.then(function (data) {
            showIt = true;
            $scope.result = data;
        }, function (error) {
            $scope.error = error;
        });
    }
});