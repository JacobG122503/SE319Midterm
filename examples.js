fetch("./examples_data.json")
    .then(response => response.json())
    .then(myExamples => showExamples(myExamples));

function showExamples(myExamples) {

    var imgs = document.getElementsByClassName("exampleimgs");
    var paras = document.getElementsByClassName("card-text");

    for(let i = 0; i < myExamples.examples.length; i++) {
        imgs[i].src = myExamples.examples[i].url;
        let problem = myExamples.examples[i].problem;
        let answer = myExamples.examples[i].answer;
        let base1 = myExamples.examples[i].originalbase;
        let base2 = myExamples.examples[i].finalbase;
        paras[i].innerHTML = `Problem: Convert ${problem} in ${base1} to ${base2}. <br> Answer: ${answer}`
    }
}