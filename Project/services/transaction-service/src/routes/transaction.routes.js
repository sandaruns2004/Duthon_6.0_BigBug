const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');
const { validate, transferSchema } = require('../utils/validation');

// ═══════════════════════════════════════════════════════════════════
// Transaction Routes (/api/transactions)
// ═══════════════════════════════════════════════════════════════════

router.post('/transfer', validate(transferSchema), transactionController.transfer);
router.get('/', transactionController.listTransactions);
router.get('/:id', transactionController.getTransaction);
router.get('/:id/receipt', transactionController.getReceipt);

module.exports = router;
