window.onload = function() {
  const divHead = document.getElementById("Headline");
  const arrQuestion = ["Test1", "Test2"];
  const arrAnswer = [];
  var counter = 0;

  const startQuiz = () => {
    //Question
    var newContent = document.createTextNode(arrQuestion[counter]);
    //input field
    let node = document.createElement("input");
    var h1 = document.createElement("h1");
    node.setAttribute("id", "inputfile");
    node.setAttribute("name", "inputfile");
    node.setAttribute("type", "text");
    node.setAttribute("value", "");
    node.setAttribute("placeholder", "Platziere HIER deine Antwort");
    h1.appendChild(newContent);
    h1.className = "question";
    h1.classList.add("question");
    //input value
    divHead.appendChild(h1);
    divHead.appendChild(node);
  };

  const removeText = () => {
    while (divHead.hasChildNodes()) {
      divHead.removeChild(divHead.firstChild);
    }
  };

  function showResult() {
    removeText();
    for (let i = 0; i < arrQuestion.length; i++) {
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let answer = document.createTextNode(arrAnswer[i]);
      let question = document.createTextNode(arrQuestion[i]);
      divHead.appendChild(div);
      h2.appendChild(question);
      divHead.appendChild(h2);
      p.appendChild(answer);
      divHead.appendChild(p);
    }
  }

  const checkAnswer = () => {
    arrAnswer.push(document.querySelector("#inputfile").value);
    console.log(arrAnswer);
    if (counter === arrQuestion.length - 1) {
      removeText();
      showResult();
    } else {
      counter++;
      removeText();
      startQuiz();
    }
  };

  document.getElementById("btnhead").addEventListener("click", startQuiz);
  document.getElementById("btntext").addEventListener("click", removeText);
  document.getElementById("btncheck").addEventListener("click", checkAnswer);
};
