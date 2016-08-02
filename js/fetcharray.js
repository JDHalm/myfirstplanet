app.factory('planet', ['$http', function($http) { 
  return $http.get('https://jdhalm.github.io/myfirstplanet/js/controllers/PlanetArray.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
