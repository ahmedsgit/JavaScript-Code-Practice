const express = require('express');
const morgan = require('morgan');
const userRouter = require('./user');

const app = express();
app.use(morgan('dev'));

app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('<h1>Hello from Home</h1>');
});
app.get('*', (req, res) => {
  res.send('<h1>404 not found</h1>');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
