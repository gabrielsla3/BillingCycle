const express = require('express');

module.exports = function(server){
  
  //API Routes
  const router = express.Router();
  //Tudo deverá conter /api na rota
  server.use('/api', router);

  //Rotas da API
  const billingCycleService = require('../api/billingCycle/billingCycleService');
  billingCycleService.register(router, '/billingCycles');

  //Sumário
  const billingSummaryService = require('../api/billingSummary/billingSummaryService');
  router.route('/billingSummary').get(billingSummaryService.getSummary)

};
