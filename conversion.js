//NOTE: Okay for JSON do like pastBase, newBase, pastNumber, newNumber

function universalConvert() {
    document.getElementById("uniOutput").style.color = "mediumseagreen";
    let toConvert = parseInt(document.getElementById('uniUserInput').value);
    let toBase = parseInt(document.getElementById('uniBase').value);
    let result = "";

    if (isNaN(toConvert) || isNaN(toBase)) {
        document.getElementById("uniOutput").style.color = "red";
        document.getElementById("uniOutput").innerText = "ERROR: Type numbers correctly";
        return;
    }

    if (toBase < 2 || toBase > 36) {
        document.getElementById("uniOutput").style.color = "red";
        document.getElementById("uniOutput").innerText = "ERROR: Please type a base between 2 and 36";
        return;
    }

    while (toConvert !== 0) {
        let remainder = toConvert % toBase;
        result = (toBase > 10) ? (convertToLetter(remainder) + result) : (remainder + result);

        toConvert = Math.floor(toConvert / toBase);
    }

    if (result === "") result = "0";

    document.getElementById('uniOutput').innerText = result;
}


function handleKeyPress(event, type) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13 && type == "uni") {
        universalConvert();
    }
}

function convertToLetter(number) {
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