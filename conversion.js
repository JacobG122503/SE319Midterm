//NOTE: Okay for JSON do like pastBase, newBase, pastNumber, newNumber


function convert() {
    //Steps: 
    //NOTE: Check if number typed is actually of the correct fromBase
    //1. Convert to base ten
    //2. send to baseTenToAny
    //3. Return that number
    document.getElementById("output").style.color = "mediumseagreen";
    let fromBase = parseInt(document.getElementById('fromBase').value);
    let toConvert = document.getElementById('toConvert').value;
    if (fromBase <= 10) toConvert = parseInt(toConvert);
    let toBase = parseInt(document.getElementById('toBase').value);

    if ((isNaN(toConvert) && fromBase <= 10) || isNaN(toBase) || isNaN(fromBase)) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerText = "ERROR: Type numbers correctly";
        return;
    }

    if ((toBase < 2 || toBase > 36) || (fromBase < 2 || fromBase > 36)) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerText = "ERROR: Please type a base between 2 and 36";
        return;
    }

    //Convert to base ten
    if (fromBase != 10) toConvert = anyToBaseTen(toConvert, fromBase);

    if (toBase != 10) toConvert = baseTenToAny(toConvert, toBase);

    document.getElementById('output').innerText = toConvert;
}

function anyToBaseTen(toConvert, fromBase) {
    let result = 0;
    //Change to string so I can iterate through
    toConvert = toConvert.toString();

    for (let i = toConvert.length - 1, j = 0; i >= 0; i--, j++) {
        if (fromBase > 10) toConvert[j] = letterToNumber(toConvert[j]);
        result += toConvert[j] * (Math.pow(fromBase, i));
    }

    return result;
}

function baseTenToAny(toConvert, toBase) {
    let result = "";

    while (toConvert !== 0) {
        let remainder = toConvert % toBase;
        result = (toBase > 10) ? (numberToLetter(remainder) + result) : (remainder + result);

        toConvert = Math.floor(toConvert / toBase);
    }

    if (result === "") result = "0";

    return result;
}


function handleKeyPress(event, type) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
        convert();
    }
}

function numberToLetter(number) {
    const letters = {
        '10': 'A',
        '11': 'B',
        '12': 'C',
        '13': 'D',
        '14': 'E',
        '15': 'F',
        '16': 'G',
        '17': 'H',
        '18': 'I',
        '19': 'J',
        '20': 'K',
        '21': 'L',
        '22': 'M',
        '23': 'N',
        '24': 'O',
        '25': 'P',
        '26': 'Q',
        '27': 'R',
        '28': 'S',
        '29': 'T',
        '30': 'U',
        '31': 'V',
        '32': 'W',
        '33': 'X',
        '34': 'Y',
        '35': 'Z'
    };

    if (letters.hasOwnProperty(number)) {
        return letters[number];
    } else {
        return number;
    }
}

function letterToNumber(letter) {
    const letters = {
        'A': '10',
        'B': '11',
        'C': '12',
        'D': '13',
        'E': '14',
        'F': '15',
        'G': '16',
        'H': '17',
        'I': '18',
        'J': '19',
        'K': '20',
        'L': '21',
        'M': '22',
        'N': '23',
        'O': '24',
        'P': '25',
        'Q': '26',
        'R': '27',
        'S': '28',
        'T': '29',
        'U': '30',
        'V': '31',
        'W': '32',
        'X': '33',
        'Y': '34',
        'Z': '35'
    };

    if (letters.hasOwnProperty(letter)) {
        return letters[letter];
    } else {
        return letter;
    }
}
