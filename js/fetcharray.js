app.factory('planet', ['$http', function($http) { 
  return $http.get('http://nmsfirstplanet.com/js/controllers/PlanetArray.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);