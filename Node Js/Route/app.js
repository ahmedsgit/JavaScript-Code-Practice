const express = require('express');
const morgan = require('morgan');

const app = express();

// app.use(morgan('dev'));

function customMiddleWare(req, res, next) {
  if (req.url === '/help') {
    res.send('<h1>This Page is Blocked by Admin</h1>');
  }
  next();
}

app.use(customMiddleWare);

app.get('/about', morgan('dev'), (req, res) => {
  res.send('<h1>About Page</h1>');
});
app.get('/help', morgan('dev'), (req, res) => {
  res.send('<h1>Help Page</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1>');
});

app.get('/', (req, res) => {
  res.send("<h1>I'm Listening</h1>");
});

app.get('*', (req, res) => {
  res.send('<h1>404 not found</h1>');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
