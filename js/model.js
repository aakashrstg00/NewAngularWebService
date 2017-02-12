app.factory("cricfactory", function ($http, $q) {
    var object = {
        serverCall: function (pidValue) {
            var pr = $q.defer();
            $http.get(urls.cricPlayerURL + "pid=" + pidValue + "&apikey=" + urls.apikey).then(function (data) {
                pr.resolve(data);
                console.log("data recieved");
            }, function (error) {
                pr.reject(error);
                console.log("data not recieved");
            });
            return pr.promise;
        }
    };
    return object;
});