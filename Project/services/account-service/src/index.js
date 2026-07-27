const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'account-service' });
});

app.listen(PORT, () => {
  console.log(`✅ Account Service running on port ${PORT}`);
});
