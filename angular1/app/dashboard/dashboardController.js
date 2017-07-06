(function(){

angular.module('billingCycleApp').controller('DashboardCtrl', ['$http', DashboardController]);

function DashboardController($http){
    const vm = this;
    vm.getSummary = function(){
        
        const url = 'http://localhost:3003/api/billingSummary';

        $http.get(url).then(function(response){

            //Atribui um valor padrão para o crédito/débito para evitar que o valor seja nulo.
            const {credit = 0, debt = 0} = response.data;

            vm.credit = credit;
            vm.debt = debt;
            vm.total = credit - debt;
        });
    }

    //Ao iniciar a aplicação, já chama as funções abaixo.
    vm.getSummary();

}

})();