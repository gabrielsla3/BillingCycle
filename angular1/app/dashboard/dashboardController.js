angular.module('billingCycleApp').controller('DashboardCtrl', ['$scope', '$http', DashboardController]);

function DashboardController($scope, $http){

    $scope.getSummary = function(){
        
        const url = 'http://localhost:3003/api/billingSummary';

        $http.get(url).then(function(response){

            //Atribui um valor padrão para o crédito/débito para evitar que o valor seja nulo.
            const {credit = 0, debt = 0} = response.data;

            $scope.credit = credit;
            $scope.debt = debt;
            $scope.total = credit - debt;
        });
    }

    //Ao iniciar a aplicação, já chama as funções abaixo.
    $scope.getSummary();

}