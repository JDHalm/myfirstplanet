app.factory('planet', ['$http', function($http) { 
  return $http.get('https://github.com/JDHalm/myfirstplanet/blob/master/js/controllers/PlanetArray.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
