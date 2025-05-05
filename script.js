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
    
    // Create WhatsApp link
    const cleanNumber = phoneNumber.replace(/^\+/, '').replace(/\D/g, '');
    const message = `Your PairCode: ${pairCode}\n\nPowered By Dasun Max`;
    const whatsappLink = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    
    // Generate QR code
    generateQRCode(whatsappLink);
    
    // Show QR container
    document.getElementById('qrContainer').style.display = 'block';
}

function generateRandomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Excluded easily confused characters
    let result = '';
    
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return result;
}

function generateQRCode(url) {
    // Using QRServer API
    const qrSize = 250;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(url)}`;
    
    document.getElementById('qrCode').innerHTML = `
        <img src="${qrUrl}" alt="WhatsApp QR Code" style="width: 100%; max-width: ${qrSize}px;">
    `;
}
