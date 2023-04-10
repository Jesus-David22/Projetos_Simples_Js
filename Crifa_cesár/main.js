function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decoded = '';
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (alphabet.includes(letter)) {
        const index = alphabet.indexOf(letter);
        const decodedIndex = (index + 13) % 26;
        decoded += alphabet[decodedIndex];
      } else {
        decoded += letter;
      }
    }
    return decoded;
  }
  console.log(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ")); 
  console.log(rot13("WRFHF QNIVQ YBCRF QR OEVGB."));