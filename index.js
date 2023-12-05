import { encrypt, decrypt } from './pack_encr.js';

var message = "This is a sample app to explain how packeting and encryption work in conjunction, followed by decryption and aggregation. This will be used on the Resurgence Labs dapp on Aztec Network. However, it will serve as the second layer of the encryption, since the innate cryptography of the blockchain will provide a defacto first layer of cryptographic security.";
console.log("Initial Text: ".concat(message));





var key_full = ((Math.random() * 1000000000).toString()).concat((Math.random() * 1000000000).toString()).concat((Math.random() * 1000000000).toString());

var ct = encrypt(message, key_full);
var pt = decrypt(ct, key_full);





console.log("Final Decrypted Text: ".concat(pt));



