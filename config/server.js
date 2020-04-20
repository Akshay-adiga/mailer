const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

/** Start the server with on a port,
 * Default port is set to 8000.
 * @param  {number} [port=8000] port number
 */
function startServer(port = 8000) {
    app.listen(port, () => {
        console.log(`app started at port ${port}`)
    })
}

module.exports = { app, express, startServer }