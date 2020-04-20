require('dotenv').config();
const { app, startServer } = require('./config/server');

startServer()

app.use('/api/v1/mail', require('./routes/mail'));
