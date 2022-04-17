const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  //useFindAndModify: false,
  useNewUrlParser: true,
  //useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

// turn on connection to db and server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});