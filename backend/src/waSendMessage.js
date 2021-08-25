const { MessageType } = require("@adiwajshing/baileys");
const getWaConnection = require("./getWaConnection");

module.exports = async (req, res) => {
  const connection = await getWaConnection();
  const { number, message } = req.query;

  if(!number || !message) {
    res.send("ERROR: Passe todos os parâmetros!!!");
    return;
  }

  const waId = `${number}@s.whatsapp.net`;
  await connection.sendMessage(waId, message, MessageType.text);

  res.send(`Para ${number}: ${message}`);
}