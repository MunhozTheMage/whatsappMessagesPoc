import React, { useState } from "react";
import superagent from "superagent";
import QRCode from "react-qr-image";
import { param } from "jquery";

const BASE_URL = "http://localhost:3010";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [qrCode, setQrCode] = useState();

  const onConnect = async () => {
    const result = await superagent.get(BASE_URL + "/connect");
    setQrCode(result.text);
  }

  const onSendMessage = async () => {
    const query = param({
      number: phoneNumber,
      message,
    });

    await superagent.get(`${BASE_URL}/send?${query}`);
  }

  return (
    <div className="App">
      <button
        onClick={onConnect}
      >
        Conectar
      </button>

      {qrCode && (
        <QRCode text={qrCode} />
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
        Enviar
      </button>
    </div>
  );
}

export default App;
