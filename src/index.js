const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
let exprArr = expr.split('');
let resString = '';
let resCodeChar = '';

for (let i = 0; i < 10; i += 2) {
    if ((exprArr[i] + '' + exprArr[i + 1]) == '10') resCodeChar += '.';
    if ((exprArr[i] + '' + exprArr[i + 1]) == '11') resCodeChar += '-';
    if ((exprArr[i] + '' + exprArr[i + 1]) == '**') {
        resCodeChar = ' ';
        i = 8;
    }
    if (i == 8) {
        i = -2;
        if (resCodeChar != ' ') {
            resString += MORSE_TABLE[resCodeChar];
        } else resString += ' ';
        exprArr.splice(0, 10);
        if (exprArr.length == 0) return resString;
        resCodeChar = '';
    }
}
}
module.exports = {
    decode
}