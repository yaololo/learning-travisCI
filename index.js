const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3001, () => {
  console.log('App is listening on port 3001');
});
