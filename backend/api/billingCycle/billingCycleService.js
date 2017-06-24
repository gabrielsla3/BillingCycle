const _ = require('lodash');
const BillingCycle = require('./billingCycle');

//Cria a API REST em cima dos métodos do http, recebendo um array de métodos
BillingCycle.methods(['get', 'post', 'put', 'delete']);
//Sempre que um objeto for atualizado, retorna o objeto novo e não o antigo
BillingCycle.updateOptions({new: true, runValidators: true});

//Após o método POST ou PUT, é chamado a função "sendErrorsOrNext"
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

function sendErrorsOrNext(req, res, next){
  //O Bundle tem os erros, o valor persistido utilizado na resposta e etc
  const bundle = res.locals.bundle;

  //Verifica se existe erros
  if(bundle.errors){
    var errors = parseErrors(bundle.errors);
    res.status(500).json({errors});
  }
  else{
    next();
  }
}

//Auxílio ao retorno dos erros padronizados
function parseErrors(nodeRestfulErrors){
  const errors = [];
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors;
}

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
