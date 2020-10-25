const express = require('express');

const app = express();

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.get('/', (req, res) => {
  res.send("I'm Listening");
});

app.get('*', (req, res) => {
  res.send("404 not found");
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
