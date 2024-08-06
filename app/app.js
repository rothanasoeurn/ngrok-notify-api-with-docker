const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: '*' }));

app.post('/notify', (req, res) => {
  console.log('\n===========POST============\n');
  console.log('headers: ', req.headers);
  console.log('\n=======================\n');

  console.log('body: ', req.body);

  return res.status(200).json({
    code: 200,
    message: 'Success',
  });
});

app.get('/notify', (req, res) => {
  console.log('\n===========GET============\n');
  console.log('headers: ', req.headers);
  console.log('\n=======================\n');

  console.log('body: ', req.body);

  return res.status(200).json({
    code: 200,
    message: 'Success',
  });
});

app.get('/', (req, res) => {
  return res.status(200).json({
    code: 200,
    message: 'Server is running',
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
