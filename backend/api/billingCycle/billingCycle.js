//Expor a API para a aplicação front-end
const restful = require('node-restful');
const mongoose = restful.mongoose;

//Informações de como será armazenado o crédito no mongodb
const creditSchema = new mongoose.Schema({
  name: { type: String, required: true},
  value: { type: Number, min: 0, required: true}
});

//Informações de como será armazenado o débito no mongodb
const debtSchema = new mongoose.Schema({
  name: { type: String, required: true},
  value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!']},
  status: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
});

//Ciclo de pagamentos
const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true},
  credits: [creditSchema],
  debts: [debtSchema]
});

//Expõe o schema para outro módulo
module.exports = restful.model('BillingCycle', billingCycleSchema);
