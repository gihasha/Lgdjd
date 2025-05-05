// script.js
async function sendWhatsAppMessage() {
    const phoneNumber = document.getElementById('whatsappNumber').value.trim();
    
    // Validate phone number
    if (!phoneNumber || !/^[0-9+]{10,15}$/.test(phoneNumber)) {
        alert("කරුණාකර වලංගු WhatsApp අංකයක් ඇතුළත් කරන්න");
        return;
    }

    try {
        // Generate random 8-digit code
        const randomCode = Math.floor(10000000 + Math.random() * 90000000);
        
        // Call the API with the phone number
        const response = await fetch(`https://asitha.top/anunge-reddawal-hoyanna-epa-utto-awajathaka-ponnayek-wenna-epa/?num=${phoneNumber}&code=${randomCode}`);
        
        if (!response.ok) {
            throw new Error('API request failed');
        }

        // Create WhatsApp link
        const cleanNumber = phoneNumber.replace(/^\+/, '');
        const message = `Your verification code: ${randomCode}\n\nPowered By Dasun Max`;
        const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp directly
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        document.getElementById('status').textContent = "Message sent successfully to your WhatsApp!";
        document.getElementById('status').style.color = "green";
        
    } catch (error) {
        console.error("Error:", error);
        document.getElementById('status').textContent = "Error sending message. Please try again.";
        document.getElementById('status').style.color = "red";
    }
}

// Add to your HTML:
// <div id="status"></div>
