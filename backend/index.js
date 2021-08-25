const express = require('express')

const onConnect = require("./src/waConnection");
const onSend = require("./src/waSendMessage");

const app = express()
const port = 3010

app.get('/connect', async (req, res) => {
  await onConnect(res);
})

app.get('/send', async (req, res) => {
  await onSend(req, res);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})