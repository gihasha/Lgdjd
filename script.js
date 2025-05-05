function generateLink() {
    // WhatsApp අංකය ලබා ගන්න
    const phoneNumber = document.getElementById('whatsappNumber').value;
    
    // අංකය වලංගුදැයි පරීක්ෂා කරන්න
    if (!phoneNumber || !/^[0-9+]{10,15}$/.test(phoneNumber)) {
        alert("කරුණාකර වලංගු WhatsApp අංකයක් ඇතුළත් කරන්න (රටේ කේතය සමඟ)");
        return;
    }
    
    // 8 අක්ෂර මිශ්‍ර PairCode එකක් ජනනය කරන්න
    const pairCode = generatePairCode();
    
    // WhatsApp සබැඳිය සාදන්න
    const message = encodeURIComponent(`Your unique code: ${pairCode}\n\nPowered By Dasun Max`);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // ප්‍රතිඵල පෙන්වන්න
    document.getElementById('generatedLink').innerHTML = `
        <p>Your PairCode: <strong>${pairCode}</strong></p>
        <p>WhatsApp Link: <a href="${whatsappLink}" target="_blank">${whatsappLink}</a></p>
    `;
    
    // QR කේතය ජනනය කරන්න
    generateQRCode(whatsappLink);
}

function generatePairCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    
    return result;
}

function generateQRCode(url) {
    // QR කේතය ජනනය කිරීමට QRServer API භාවිතා කරන්න
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    
    document.getElementById('qrCode').innerHTML = `
        <img src="${qrCodeUrl}" alt="WhatsApp QR Code">
        <p>Scan this QR code to send the message</p>
    `;
      }
