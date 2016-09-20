var module = angular.module('myApp', ['ngRoute', 'customServices']);
module.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/detail', {
            templateUrl: 'detail.html',
            controller: 'detailCtrl'
        }).
        otherwise({
            //redirectTo: '/list',
            templateUrl: 'list.html',
            controller: 'myCtrl'
        });
    }
]);
module.controller('myCtrl', function($scope, myService) {
    $scope.order = 'popularity';
    $scope.pages = 5;

    $scope.currentPage = myService.currentPage();

    $scope.getApts = function() {
        myService.getApts($scope);
    };
    $scope.getApts();
    $scope.changeSort = function(order) {
        $scope.order = order;
    };
    $scope.trackDetail = function(name) {
        myService.trackDetail(name);
    };
    $scope.getNumber = function() {
        $scope.pageNum = Math.ceil($scope.aptNumber / $scope.pages);
    }
    $scope.getNumber();
})

module.controller('detailCtrl', function($scope, myService) {
    $scope.getDetail = function() {
        myService.getDetail($scope);
    };
    $scope.getDetail();
})
