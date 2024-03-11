const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/db.config');
// Routers
const userRouter = require('./routings/user.routing');
const constants = require('./utils/constants');

const app = express();

mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log(constants.dbConnected);
}).catch((err) => {
    console.error(constants.dbConnectedError, err);
});

app.use(express.json());

app.use('/users', userRouter);
// app.use('/', )

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});