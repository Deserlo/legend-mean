// public/api/core.js

//Angular setup
//1. create a module
//2. create a controller
//3. define function handlers
//4. apply to view

var studentsTrack = angular.module('studentsTrack', []);

function mainController($scope, $http) {

  $scope.formData = {};

  $http.get('/admin/students')
    .success(function(data)) {

      $scope.students = data;
      console.log(data);

    })
    .error(function(data)) {
      console.log('Error: ' + data);
    });

}
