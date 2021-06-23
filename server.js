const express = require('express');
const compression = require('compression');

const port = process.env.PORT || 9000;
const appFolder = 'dist';

const app = express();
app.use(compression());

app.get('*.*', express.static(appFolder, { maxAge: '1y' }));

app.all('*', function (req, res) {
  res.status(200).sendFile('/', { root: appFolder });
});

app.listen(port, function () {
  console.log(`Server is running on ${port}`);
});
