app.controller('MainController', ['$scope', 'planet', function($scope, planet) { 
 planet.success(function(data) {
    $scope.planetinfo = data;
 });
}]);