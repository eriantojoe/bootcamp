const Crypto = require ('crypto');
exports.encrypt = (password, salt) =>
    Crypto
        .createHmac("sha256", salt)
        .update(password)
        .digest('hex');