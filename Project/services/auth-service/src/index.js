const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'auth-service' });
});

app.listen(PORT, () => {
  console.log(`✅ Auth Service running on port ${PORT}`);
});
