// WhatsApp PairCode Generator - script.js

function generatePairCode() {
    const phoneNumber = document.getElementById('whatsappNumber').value.trim();
    
    // Validate phone number
    if (!phoneNumber || !/^[0-9+]{10,15}$/.test(phoneNumber)) {
        alert("කරුණාකර වලංගු WhatsApp අංකයක් ඇතුළත් කරන්න (රටේ කේතය සමඟ)");
        return;
    }
    
    // Generate 8-character alphanumeric code
    const pairCode = generateRandomCode();
    document.getElementById('pairCode').textContent = `PairCode: ${pairCode}`;
    
    // Create WhatsApp deep link
    const cleanNumber = phoneNumber.replace(/^\+/, '').replace(/\D/g, '');
    const message = `Your PairCode: ${pairCode}\n\nPowered By Dasun Max`;
    const whatsappUrl = `whatsapp://send?phone=${cleanNumber}&text=${encodeURIComponent(message)}`;
    
    // Generate QR code
    generateQRCode(whatsappUrl);
    
    // Show QR container
    document.getElementById('qrContainer').style.display = 'block';
}

function generateRandomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // අපැහැදිලි අක්ෂර බැහැර කර ඇත
    let result = '';
    
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return result;
}

function generateQRCode(url) {
    // පෙර ඇති QR කේතය ඉවත් කරන්න
    const qrElement = document.getElementById('qrCode');
    qrElement.innerHTML = '';
    
    // නව QR කේතය ජනනය කරන්න
    new QRCode(qrElement, {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#075E54",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// පිවිසුම් අවසන් වීමෙන් පසු QR කේතය අලුත් කිරීම
document.getElementById('whatsappNumber').addEventListener('input', function() {
    document.getElementById('qrContainer').style.display = 'none';
});
