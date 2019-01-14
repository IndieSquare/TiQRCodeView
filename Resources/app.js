Ti.UI.setBackgroundColor('#000');

var window = Ti.UI.createWindow();

var qrcode = require('qrcode').QRCode({
	text: 'https://github.com/k0sukey/TiQRCodeView'
	errorCorrectLevel: 'H'
});

var qrcodeView = qrcode.createQRCodeView({
	width: 300,
	height: 300,
	margin: 4,
});

window.add(qrcodeView);

window.open();
