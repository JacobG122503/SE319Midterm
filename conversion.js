//NOTE: Okay for JSON do like pastBase, newBase, pastNumber, newNumber

function binaryConvert() {
    document.getElementById("output").style.color = "mediumseagreen";
    var toConvert = parseInt(document.getElementById('userInput').value);
    let binary = "";

    if (isNaN(toConvert)) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerText = "ERROR: Please type a number";
        return;
    }

    while (toConvert !== 0) {
        binary = (toConvert % 2) + binary;
        toConvert = Math.floor(toConvert / 2);
    }

    if (binary === "") binary = "0";

    document.getElementById('output').innerText = binary;
}

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

    while (toConvert !== 0) {
        let remainder = toConvert % toBase;
        result = (toBase === 16 && remainder >= 10 && remainder <= 15) ? (convertToHexLetter(remainder) + result) : (remainder + result);
        //result = (toConvert % toBase) + result;
        toConvert = Math.floor(toConvert / toBase);
    }

    if (result === "") result = "0";

    document.getElementById('uniOutput').innerText = result;
}


function handleKeyPress(event, type) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13 && type == "binary") {
        binaryConvert();
    }
    if (event.keyCode === 13 && type == "uni") {
        universalConvert();
    }
}

function convertToHexLetter(number) {
    const hexLetters = {
        '10': 'A',
        '11': 'B',
        '12': 'C',
        '13': 'D',
        '14': 'E',
        '15': 'F'
    };

    if (hexLetters.hasOwnProperty(number)) {
        return hexLetters[number];
    } else {
        return "ERROR";
    }
}