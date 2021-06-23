var express = require('express');
const crypto = require('crypto');
// hiddenKey 를 알아야 복호화 가능
// utf8 문자열을 base64 암호문으로 변경

function manual(req, res, next) {
  const algorithm = 'aes-192-cbc';
  const password = 'HUB_2021'
  const key = process.env.SecretKey;
  const iv = Buffer.alloc(16, 0);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  
  let encrypted = cipher.update(password, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  console.log(encrypted);

  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = '';
      decipher.on('readable', () => {
          while (null !== (chunk = decipher.read())) {
              decrypted += chunk.toString('utf8');
          }
      });
      decipher.on('end', () => {
          console.log(decrypted);
      });
    // Encrypted with some algorithm, key and iv.
      decipher.write(encrypted, 'hex');
      decipher.end();
      res.render('manual')
}





module.exports = {
  manual
}