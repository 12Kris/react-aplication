 window.addEventListener('load', () => {
 
  const resultElem = document.getElementById('result');
  const keyboardBtns = document.getElementsByClassName('elem');
 
  let isResult = false;
 
  document.getElementById('clean').addEventListener('mouseenter', () => {
   document.getElementById('clean').style.backgroundColor = '#F94892';
  });
  document.getElementById('clean').addEventListener('mouseleave', () => {
   document.getElementById('clean').style.backgroundColor = '#E982B7';
  });
  document.getElementById('clean').addEventListener('click', () => {
   resultElem.innerText = '';
  });
 
  const results = JSON.parse(localStorage.getItem("results") || "[]");
 
  document.getElementById('get-result').addEventListener('click', () => {
   const result = eval(resultElem.innerText);
   results.push(resultElem.innerText + '=' + result);
   localStorage.setItem("results", JSON.stringify(results));
   resultElem.innerText = result;
   isResult = true;
  });
 
  for (let i = 0; i < keyboardBtns.length; i += 1) {
   keyboardBtns[i].addEventListener('click', () => {
    if (isResult) {
     resultElem.innerText = '';
    }
    isResult = false;
    const value = keyboardBtns[i].innerText;
    console.log(value);
    if (value == '.' && resultElem.innerText) {
     const numbers = resultElem.innerText
      .split('+').join('|')
      .split('-').join('|')
      .split('/').join('|')
      .split('*').join('|')
      .split('|');
     const last = numbers.pop();
     if (last.includes('.')) {
      return;
     }
    }
    resultElem.innerText += value;
   });
  }
 });
 