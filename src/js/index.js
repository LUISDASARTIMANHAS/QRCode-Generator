// Função para gerar o QR code
    function generateQRCode() {
      const text = document.getElementById('text').value;
      
      // Limpar qualquer QR code existente
      document.getElementById('qrcode').innerHTML = '';

      // Configurações do QR code
      const config = {
        text: text,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H // Nível de correção de erro
      };

      // Cria o QR code na div com id 'qrcode'
      new QRCode(document.getElementById("qrcode"), config);
    }
