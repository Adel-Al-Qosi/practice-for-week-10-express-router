const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
app.use('/:personId/likes', peopleRouter)
app.use('/people', peopleRouter);
app.use('/', peopleRouter)
app.use('/best-dressed/comments', peopleRouter)

const port = 5002;
app.listen(port, () => console.log('Server is listening on port', port));