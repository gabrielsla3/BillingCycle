const _ = require('lodash');
const BillingCycle = require('../billingCycle/billingCycle');

//Funçao middleware
function getSummary(req, res){    
    BillingCycle.aggregate(
    {
        //O project passa um documento somente com os campos especificados para a próxima etapa do fluxo. Neste caso, um somatório de créditos e débitos.
        $project: {credit: {$sum : "$credits.value"}, debt: {$sum: "$debts.value"}}
    },
    { 
        $group : {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    },
    {
        //Retira o ID, como se ignorasse
        $project: {_id: 0, credit: 1, debt: 1}
    },

    function(error, result){
        if(error){
            res.status(500).json({errors: [error]});
        } else{
            res.json(_.defaults(result[0], {credit: 0, debt: 0})) //Segundo parâmetro é utilizado caso o primeiro der problema sem gerar erro, por exemplo ser indefinido.
        }
    })
}

//Exporta a função
module.exports = { getSummary }