# text packet-encryption

This is the open-sourced code for the second phase of the dapp being built by Resurgence Labs on the Aztec Network. 

Goal: To add a second layer of encryption at the web2 layer for the messages being stored  
Procedure: The message (currently a Max of 500 characters) is taken as input, and a 165 character key is generated using pseudorandom computations. This is broken into 3 smaller keys of equal length, and they are key-expanded and used in either:  
1. 3DES cipher
2. Rabbit cipher
3. AES cipher

Since the chosen cipher is random, and this is stored on the Web3 object corresponding to the said message, it becomes even harder to decrypt it maliciously without the key. At the end, the 3 packets so created are decrypted and aggregated to fetch the original message.
