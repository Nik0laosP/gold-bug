// Define substitution mapping based on the specified rules
const substitutionMap = {
    'a': '5', 'b': '2', 'c': '-', 'd': '†',
    'e': '8', 'f': '1', 'g': '3', 'h': '4',
    'i': '6', 'j': '8', 'k': '/', 'l': '0',
    'm': '9', 'n': '*', 'o': '‡', 'p': '.',
    'q': '?', 'r': '(', 's': ')', 't': ';',
    'u': ']', 'v': '¶', 'w': '=', 'x': '>',
    'y': '<', 'z': '{'
};

// Function to encrypt (cipher) a message
function encrypt(message) {
    let ciphertext = '';
    for (let char of message.toLowerCase()) {
        if (substitutionMap[char]) {
            ciphertext += substitutionMap[char];
        } else {
            // If character not in substitution map, retain it as is (handle spaces, punctuation, etc.)
            ciphertext += char;
        }
    }
    return ciphertext;
}

// Function to decrypt a ciphertext back to the original message
function decrypt(ciphertext) {
    let message = '';
    for (let char of ciphertext) {
        // Inverse lookup to find the key corresponding to the value (symbol)
        let originalChar = Object.keys(substitutionMap).find(key => substitutionMap[key] === char);
        if (originalChar) {
            message += originalChar;
        } else {
            // If the symbol does not match any keys in the map, retain it as is
            message += char;
        }
    }
    return message;
}

// Example usage:
const plaintext = "a good glass in the bishop's hostel in the devil's seat forty one degrees and thirteen minutes northeast and by north main branch seventh limb east side shoot from the left eye of the death's head a bee line from the tree through the shot fifty feet out";
console.log("Original message:", plaintext);

const encryptedMessage = encrypt(plaintext);
console.log("Encrypted message:", encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log("Decrypted message:", decryptedMessage);