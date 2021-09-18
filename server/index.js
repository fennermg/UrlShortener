const express = require("express");
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();

app.use(cors())

app.use(express.json({ extented: false }));


//Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));
app.use('/api/auth', require('./routes/auth'));



const PORT = 5000;

app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)});

