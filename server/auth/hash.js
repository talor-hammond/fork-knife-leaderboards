const Na = require('sodium').api //I'm still salty tho

module.exports = {
    generate
}

function generate(password) {
    const passwordBuffer = Buffer.from(password, 'utf8')
    let hash = Na.crypto_pwhash_str(
        password,
        Na.crypto_pwhash_OPSLIMIT_INTERACTIVE,
        Na.crypto_pwhash_MEMLIMIT_INTERACTIVE
    )
    console.log(password, hash)
    return hash;
}