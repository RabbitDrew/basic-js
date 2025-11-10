const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect; // Определяет, нужно ли выводить результат в прямом порядке
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let result = '';
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (this.alphabet.includes(messageChar)) {
        const messageIndex = this.alphabet.indexOf(messageChar);
        const keyChar = key[keyIndex % key.length];
        const keyIndexValue = this.alphabet.indexOf(keyChar);

        const encryptedChar = this.alphabet[(messageIndex + keyIndexValue) % 26];
        result += encryptedChar;
        keyIndex++;
      } else {
        result += messageChar;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let result = '';
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (this.alphabet.includes(messageChar)) {
        const messageIndex = this.alphabet.indexOf(messageChar);
        const keyChar = key[keyIndex % key.length];
        const keyIndexValue = this.alphabet.indexOf(keyChar);

        const decryptedChar = this.alphabet[(messageIndex - keyIndexValue + 26) % 26];
        result += decryptedChar;
        keyIndex++;
      } else {
        result += messageChar;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}
module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
