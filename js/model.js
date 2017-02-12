app.factory("cricfactory", function ($http, $q) {
    var object = {
        var pr = $q.defer();
        serverCall = function (pidValue) {
            $http.get(urls.cricPlayerURL + "pid=" + pidValue + "&apikey=" + urls.apikey).then(function (data) {
                pr.resolve(data);
            }, function (error) {
                pr.reject(error);
            });
            return pr.promise;
        }
    };
    return object;
});