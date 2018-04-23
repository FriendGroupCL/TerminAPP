(function () {
    angular.module('TerminAPP').controller("inicioCtrl", function ($scope, $location, $http) {
   
   //http://localhost:8080/facebook/webresources/Users
        var parametros={};
        $http.get('http://localhost:8080/facebook/webresources/Users').
        then(function(response) {
            parametros = response.name;
        });
    //console.log("home controller reached "+parametros);
        console.log(JSON.stringify(parametros));
});
})();