const BillingCycle = require('./billingCycle');

//Cria a API REST em cima dos métodos do http, recebendo um array de métodos
BillingCycle.methods(['get', 'post', 'put', 'delete']);
//Sempre que um objeto for atualizado, retorna o objeto novo e não o antigo
BillingCycle.updateOptions({new: true, runValidators: true});

BillingCycle.route('count', function(req, res, next){
  BillingCycle.count(function(error, value){
    if(error){
      res.status(500).json({error: [error]});
    }else{
      res.json({value})
    }
  });
});

module.exports = BillingCycle;
