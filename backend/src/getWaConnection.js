const { WAConnection } = require("@adiwajshing/baileys");

module.exports = async () => {
  const conn = new WAConnection();
  conn.loadAuthInfo('./auth_info.json');
  
  await conn.connect();

  return conn; 
}