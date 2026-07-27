const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'transaction-service' });
});

app.listen(PORT, () => {
  console.log(`✅ Transaction Service running on port ${PORT}`);
});
