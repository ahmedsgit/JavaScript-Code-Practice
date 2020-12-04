const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// About Page
app.get('/About', (req, res) => {
  res.render('pages/about', { page: 'About' });
});

// About Page
app.get('/help', (req, res) => {
  res.render('pages/help', { page: 'Help' });
});

// Home Page
app.get('/', (req, res) => {
  // res.send('<h1>Working With Template Engine</h1>');
  let post = {
    title: 'EJS is Awesome',
    status: true,
  };
  let posts = [
    { title: 'Node dev.', name: 'Ahmed Sazzad' },
    { title: 'React dev.', name: 'Monir Hossain' },
    { title: 'Android dev.', name: 'Asif Ahmed' },
  ];
  res.render('pages/index', {
    page: 'Home',
    title: 'Ejs is an Awesome Template Engine',
    post,
    posts,
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
