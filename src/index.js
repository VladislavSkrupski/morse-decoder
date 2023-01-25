const {validatePlugin} = require("mocha/lib/cli/run-helpers");
const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const SYMBOL_LENGTH = 10;
    let convertedString = '';
    for (let i = 0; i < expr.length; i += 10) {
        let temp = '';
        const symbolString = expr.substring(i, i + SYMBOL_LENGTH);
        if (symbolString === '*'.repeat(10)) {
            convertedString += ' ';
        } else {

            for (let j = 0; j < symbolString.length; j += 2) {
                const ch = symbolString.substring(j, j + 2);
                switch (ch) {
                    case '00':
                        temp += '';
                        break;
                    case '10':
                        temp += '.';
                        break;
                    case '11':
                        temp += '-';
                        break;
                }
            }
            convertedString += MORSE_TABLE[temp];
        }
    }
    return convertedString;
}

module.exports = {
    decode
}