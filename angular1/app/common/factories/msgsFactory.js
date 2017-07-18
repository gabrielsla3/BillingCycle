(function(){
    angular.module('billingCycleApp').factory('msgs', ['toastr', MsgsFactory]);

    function MsgsFactory(toastr){
        
        //Método interno
        //msgs: Mensagens
        //title: Título da mensagem
        //method: Refere-se ao tipo de erro da mensagem, por exemplo "error"
        function addMsg(msgs, title, method){
            if(msgs instanceof Array){
                msgs.forEach(msg => toastr[method](msg, title));
            } else{
                toastr[method](msgs, title);
            }
        }

        function addSuccess(msgs){
            addMsg(msgs, 'Sucesso', 'success');
        }

        function addError(msgs){
            addMsg(msgs, 'Erro', 'error');
        }

        return { addSuccess, addError }
    }
})();