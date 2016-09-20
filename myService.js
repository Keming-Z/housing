var baseService = function($http) {
    var aptNumber = 0;
    var track = '';
    var current = 0;
    this.currentPage = function() {
        return current;
    }
    this.getApts = function($scope) {
        $http.get('apartment.json').success(function(res) {
            $scope.apts = res.apartments;
            aptNumber = $scope.apts.length;
            $scope.aptNumber = aptNumber;
        })
    };
    this.trackDetail = function(name) {
        track = name;
    }
    this.getDetail = function($scope) {
        $scope.name = track;
        $http.get('apartment.json').success(function(res) {
            var data = res.apartments;
            for (var i = 0; i < data.length; i++) {
                if (data[i].name === track) {
                    $scope.apt = data[i];
                }
            }
        })
    };
};

var module = angular.module("customServices", [])
    .service("myService", baseService)
