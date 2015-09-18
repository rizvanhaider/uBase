var app = angular.module("uBase", []);

app.controller("uiCtrl", function($scope) {
    $scope.newproject= false;
    $scope.closeproject= function() {
        $scope.newproject=false;
    }
    $scope.createModel= function(){
        console.log("Model Created");
       $('#newModel').modal('hide');
    }
    $scope.createProject= function(){
        $scope.newproject=true;
        console.log("Project Created");
       $('#newProject').modal('hide');
    }
    
});