const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

const user = require('./routes/user');
const blog = require('./routes/blog');

mongoose.connect(process.env.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));


app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/public/uploads', express.static(path.join(__dirname, '/public/uploads')))


app.use('/api/auth', user);
app.use('/api/blog', blog);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));