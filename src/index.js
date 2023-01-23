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

    let arr = ['RSS', 'SCHOOL'];
    let arrNull = [''];
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let finalValue = "";
    let charValueResult = "";
    let iterator = 0;
    let zero = 0;
    let decodeSymbols = {
    11: "-",
    10: ".",
    "00": "",
    "**": " ",
}
    while (iterator < expr.length) {
        charValueResult += decodeSymbols[expr[iterator] + expr[iterator + arrNull.length]];
        if ((iterator + (arr.length)) % num.length === zero) {
            finalValue += MORSE_TABLE[charValueResult];
            charValueResult = "";
        } else if (charValueResult === " ") {
            finalValue += " ";
            charValueResult = "";
            iterator = iterator + num[8];
        }
        iterator = iterator + arr.length;
    }
    return finalValue;
}

module.exports = {
    decode,
}
