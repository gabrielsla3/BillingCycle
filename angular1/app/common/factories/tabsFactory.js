(function(){
    angular.module('billingCycleApp').factory('tabs', [ TabsFactory ]);

    function TabsFactory(){

        //Reparar que neste caso, é passado um objeto referente as tabs da tela de ciclos de pagamento.
        function show(owner, { tabList = false, tabCreate = false, tabUpdate = false, tabDelete = false }){
            owner.tabList = tabList;
            owner.tabCreate = tabCreate;
            owner.tabUpdate = tabUpdate;
            owner.tabDelete = tabDelete;
        }

        return { show }

    }
})();