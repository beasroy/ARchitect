import React from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  // Provide the URL that you want to encode in the QR code
  const url = 'http://localhost:3000/model'; // Replace with your desired URL

  return (
    <div>
      <QRCode value={url} />
    
    </div>
  );
}

export default QRCodeGenerator;