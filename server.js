const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
