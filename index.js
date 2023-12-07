import { encrypt, decrypt } from './pack_encr.js';

var message = "This is a sample app to explain how packeting and encryption work in conjunction, followed by decryption and aggregation. This will be used on the Resurgence Labs dapp on Aztec Network. However, it will serve as the second layer of the encryption, since the innate cryptography of the blockchain will provide a defacto first layer of cryptographic security.";
console.log("Initial Text: ".concat(message));


var key_full = "";
while (key_full.length < 186) {
    key_full = key_full.concat((Math.floor((Math.random() * 99999999999)).toString()));
}
key_full = key_full.substring(0, 186);

//console.log(key_full.length);
//console.log(key_full);

var codes = [Math.floor(Math.random()*3), Math.floor(Math.random()*3), Math.floor(Math.random()*3)];


var ct = encrypt(message, key_full, codes);
var pt = decrypt(ct, key_full, codes);





console.log("Final Decrypted Text: ".concat(pt));






