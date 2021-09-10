import CryptoJS from 'crypto-js'

// encript

export const encrypt = (data) => {
  if (data) {
    const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_API_KEY).toString();

    return cipherText;

  }
}

// descrypt



export const decrypt = (data) => {
  if (data) {

    const bytes = CryptoJS.AES.decrypt(data, process.env.REACT_APP_API_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
  }
}