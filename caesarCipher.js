export function caesarCipher(string, key) {
  let stringArray = string.split("");
  let encrypted = [];
  stringArray.forEach(char => {
    let charCode = char.charCodeAt();
    let newCode = transposeCharCode(charCode,key);

    encrypted.push(String.fromCharCode(newCode));
  })
  let encryptedString = encrypted.join("");
  return encryptedString;
}


function transposeCharCode(charCode, key) {
  charCode = parseInt(charCode);
  
  if (charCode >= 65 && charCode <= 90) {
    charCode += key;
    if (charCode > 90) {
      charCode -= 26
    };
  };
  if (charCode >= 97 && charCode <= 122) {
    charCode += key;
    if (charCode > 122) {
      charCode -= 26
    }
  }
  return charCode;
}
