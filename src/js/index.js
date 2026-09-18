const textInput = document.getElementById('text');
const sizeInput = document.getElementById('size');
const customWidthInput = document.getElementById('customWidth');
const customHeightInput = document.getElementById('customHeight');
const levelInput = document.getElementById('level');
const qrContainer = document.getElementById('qrcode');
const statusNode = document.getElementById('status');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const customSizeGroup = document.getElementById('customSizeGroup');

/**
 * Atualiza a mensagem de status visível na interface.
 *
 * @param {string} message - Mensagem exibida ao usuário.
 * @param {boolean} [isSuccess=false] - Define se a mensagem é de sucesso.
 * @returns {void}
 */
function setStatus(message, isSuccess = false) {
  statusNode.textContent = message;
  statusNode.style.color = isSuccess ? '#86efac' : '#cbd5e1';
}

/**
 * Retorna a largura e altura atuais do QR Code.
 *
 * @returns {{ width: number, height: number }}
 */
function getCurrentDimensions() {
  if (sizeInput.value === 'custom') {
    const width = Number(customWidthInput.value) || 640;
    const height = Number(customHeightInput.value) || 320;
    return {
      width: Math.max(64, width),
      height: Math.max(64, height)
    };
  }

  const size = Number(sizeInput.value) || 192;
  return {
    width: size,
    height: size
  };
}

/**
 * Exibe ou oculta os campos de dimensão personalizada.
 *
 * @returns {void}
 */
function toggleCustomSizeFields() {
  const isCustom = sizeInput.value === 'custom';
  customSizeGroup.classList.toggle('d-none', !isCustom);
}

/**
 * Gera o QR Code com base no valor informado pelo usuário.
 *
 * @returns {void}
 */
function generateQRCode() {
  const value = textInput.value.trim();

  if (!value) {
    qrContainer.innerHTML = '';
    downloadBtn.disabled = true;
    setStatus('Digite um texto ou URL para gerar o QR Code.', false);
    return;
  }

  qrContainer.innerHTML = '';
  const { width, height } = getCurrentDimensions();

  const config = {
    text: value,
    width,
    height,
    colorDark: '#0f172a',
    colorLight: '#f8fafc',
    correctLevel: QRCode.CorrectLevel[levelInput.value]
  };

  new QRCode(qrContainer, config);
  downloadBtn.disabled = false;
  setStatus(`QR Code gerado com sucesso (${width}×${height}px).`, true);
}

/**
 * Realiza o download do QR Code gerado em formato PNG ou SVG.
 *
 * @returns {void}
 */
function downloadQRCode() {
  const canvas = qrContainer.querySelector('canvas');
  const img = qrContainer.querySelector('img');
  const svg = qrContainer.querySelector('svg');

  if (canvas) {
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    return;
  }

  if (img) {
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = img.src;
    link.click();
    return;
  }

  if (svg) {
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement('a');
    link.download = 'qrcode.svg';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
    return;
  }

  setStatus('Nenhum QR Code disponível para download.', false);
}

generateBtn.addEventListener('click', generateQRCode);
downloadBtn.addEventListener('click', downloadQRCode);
sizeInput.addEventListener('change', () => {
  toggleCustomSizeFields();
  generateQRCode();
});
customWidthInput.addEventListener('input', generateQRCode);
customHeightInput.addEventListener('input', generateQRCode);
textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    generateQRCode();
  }
});

toggleCustomSizeFields();
window.addEventListener('load', generateQRCode);
