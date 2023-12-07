import CryptoJS from "crypto-js";



function stringToChanks(string, chunkSize) {
    const chunks = [];
    while (string.length > 0) {
        chunks.push(string.substring(0, chunkSize));
        string = string.substring(chunkSize, string.length);
    }
    return chunks
}

export function encrypt(message, key_full, codes) {
    if (message.length > 500) {
        throw "Message Length too long. Must be under 500 chars.";
    }

    var plen = (message.length / 3);
    if (message.length % 3 != 0) {
        plen ++;
    }

    var message_packets = stringToChanks(message, plen);
    var key = stringToChanks(key_full, key_full.length/3);

    var i  = 0;
    var ct = [];


    while (i < 3) {
        if (codes[i] == 0){
            ct[i] = CryptoJS.AES.encrypt(message_packets[i], key[i]);
        }
        else if (codes[i] == 1){
            ct[i] = CryptoJS.TripleDES.encrypt(message_packets[i], key[i]);
        }
        else {
            ct[i] = CryptoJS.Rabbit.encrypt(message_packets[i], key[i]);
        }
        
        i++;
        
    }

    return ct;

}

export function decrypt(ct, key_full, codes) {
    var i = 0;
    var pt = [];
    var key = stringToChanks(key_full, key_full.length/3);

    while (i < 3) {
        if (codes[i] == 0){
            pt[i] = CryptoJS.AES.decrypt(ct[i], key[i]).toString(CryptoJS.enc.Utf8);
        }
        else if (codes[i] == 1){
            pt[i] = CryptoJS.TripleDES.decrypt(ct[i], key[i]).toString(CryptoJS.enc.Utf8);
        }
        else {
            pt[i] = CryptoJS.Rabbit.decrypt(ct[i], key[i]).toString(CryptoJS.enc.Utf8);
        }
        
        i++;
    }

    var pt_full = pt[0].concat(pt[1]).concat(pt[2]);
    return pt_full;
}



