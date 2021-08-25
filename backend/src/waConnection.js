const { WAConnection } = require('@adiwajshing/baileys');
const fs = require("fs");

async function connectToWhatsApp(res) {
  const connection = new WAConnection();
  
  connection.on("qr", qr => {
    res.send(qr);
  });

  connection.on ('open', () => {
    const authInfo = connection.base64EncodedAuthInfo();
    fs.writeFileSync('./auth_info.json', JSON.stringify(authInfo, null, '\t'));
  })

  await connection.connect();
}

module.exports = async res => {
  try {
    await connectToWhatsApp(res);
    console.log("Connected!!!")

    return "OK"
  } catch (error) {
    console.log("ERROR: " + error)

    return "ERR"
  }
}