var app = angular.module('angularable', []);


var tblCtrl = function($scope, $http) {
  $scope.posts = []; 
  $scope.currentPage = 0;
  $scope.pageSize = 10;

  $http.get("https://jsonplaceholder.typicode.com/posts") //Obtener los datos
  .success(function(data){
    console.log(data);
   $scope.posts = data;
   $scope.numberOfPages = function(){
        return Math.ceil($scope.posts.length/$scope.pageSize);                
    }
  })
  .error(function(err){
    
  });

      $scope.selectItem = function( post ) {
        $scope.selectedItem = post;
    };


}
tblCtrl.$inject = ['$scope', '$http'];
app.controller('tblCtrl', tblCtrl);

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});


/* 
app.factory('tblFactory', function($http) {
  return {
    getPosts: function(){
      return $http.get('http://jsonplaceholder.typicode.com/posts').success(function(result) {
        return JSON.stringify(result);
      });
    }
  }
}); 

*/
