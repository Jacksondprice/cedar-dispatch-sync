const express = require('express');
const shipments = require('./routes/shipments');

const app = express();
app.use(express.json());
app.use('/api/shipments', shipments);
app.get('/health', (_req, res) => res.json({ ok: true }));

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`listening on ${port}`));
