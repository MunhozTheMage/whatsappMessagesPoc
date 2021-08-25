import React, { useState } from "react";
import superagent from "superagent";
import QRCode from "react-qr-code";

const BASE_URL = "localhost:3010";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [qrCode, setQrCode] = useState();

  const onConnect = async () => {
    const result = await superagent.get(BASE_URL + "/connect");
    setQrCode(result);
  }

  const onSendMessage = () => {}

  return (
    <div className="App">
      <button
        onClick={onConnect}
      >
        Conectar
      </button>

      {qrCode && (
        <QRCode value={qrCode} />
      )}

      <p>Número:</p>
      <input
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />

      <p>Mensagem:</p>
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <button
        onClick={onSendMessage}
      >
        Conectar
      </button>
    </div>
  );
}

export default App;
