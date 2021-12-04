const express = require('express');
const app = express();
const port = 8000;


require('./routes/person.routes')(app); // the shorthand way



app.listen(port, () => console.log(`Listening on port: ${port}`) );