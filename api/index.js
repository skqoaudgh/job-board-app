const express = require('express');
const app = express();

const redis = require('redis'),
      client = redis.createClient();

const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {
    const jobs = await getAsync('github');
    return res.send('Hello World!');
});

app.listen(3001, () => {
    console.log('server is opened on port 3001');
});