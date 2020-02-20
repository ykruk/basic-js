class VigenereCipheringMachine {
    constructor (type) {
      if(type === undefined || type === true) {
        this.modification = 'direct';
      } else if(type === false) {
        this.modification = 'reverse';
      }
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error('Parameter has not been given.');
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let encryptedMessage = '';
        message = message.toUpperCase();
        key = key.toUpperCase();
        let other = 0;
        for (let i = 0; i < message.length; i++) {
            if(alphabet.indexOf(message[i]) < 0) {
            encryptedMessage += message[i];
            other++;
            } else {
            const MessageLetterIndex = alphabet.indexOf(message[i]);
            const KeyLetterIndex = alphabet.indexOf(key[(i - other) % key.length]);
            encryptedMessage += alphabet.charAt((MessageLetterIndex + KeyLetterIndex) % alphabet.length);
            }
        }
        if(this.modification === 'reverse') return encryptedMessage.split('').reverse().join('');
        return encryptedMessage;
      }

      decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) throw new Error('Parameter has not been given.');
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let message = '';
        
        key = key.toUpperCase();
        let other = 0;
        for (let i = 0; i < encryptedMessage.length; i++) {
            if(alphabet.indexOf(encryptedMessage[i]) < 0) {
                message += encryptedMessage[i];
                other++;
            } else {
                const MessageLetterIndex = alphabet.indexOf(encryptedMessage[i]);
                const KeyLetterIndex = alphabet.indexOf(key[(i - other) % key.length]);
                message += alphabet.charAt(((MessageLetterIndex + alphabet.length) - KeyLetterIndex) % alphabet.length);
            }
        }
        if(this.modification === 'reverse') return message.split('').reverse().join('');
        return message;
      }
}

module.exports = VigenereCipheringMachine;
