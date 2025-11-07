const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

// Statische Dateien ausliefern
app.use(express.static(path.join(__dirname)));

// Server starten
app.listen(PORT, () => {
  console.log(`Jump-and-Run läuft auf http://localhost:${PORT}`);
});
