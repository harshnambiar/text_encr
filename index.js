var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");

var message = "This is a sample app to explain how packeting and encryption work in conjunction, followed by decryption and aggregation. This will be used on the Resurgence Labs dapp on Aztec Network. However, it will serve as the second layer of the encryption, since the innate cryptography of the blockchain will provide a defacto first layer of cryptographic security.";
console.log("Initial Text: ".concat(message));

var plen = (message.length / 3);
if (message.length % 3 != 0) {
    plen ++;
}

var message_packets = stringToChanks(message, plen);


var key_full = ((Math.random() * 1000000000).toString()).concat((Math.random() * 1000000000).toString()).concat((Math.random() * 1000000000).toString());

var key = stringToChanks(key_full, 9);

var i  = 0;
var ct = [];


while (i < 3) {
    ct[i] = AES.encrypt(message_packets[i], key[i]);
    i++;
    
}



i = 0;
var pt = [];

while (i < 3) {
    pt[i] = AES.decrypt(ct[i], key[i]).toString(CryptoJS.enc.Utf8);
    i++;
}

var pt_full = pt[0].concat(pt[1]).concat(pt[2]);
console.log("Final Decrypted Text: ".concat(pt_full));


function stringToChanks(string, chunkSize) {
    const chunks = [];
    while (string.length > 0) {
        chunks.push(string.substring(0, chunkSize));
        string = string.substring(chunkSize, string.length);
    }
    return chunks
}