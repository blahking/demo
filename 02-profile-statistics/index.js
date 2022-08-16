const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl => {
  counterEl.innerText = "0";
  incrementCounter();

  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 20; //divide minimum data-ceil, keep same time with the minimun
    currentNum = Math.ceil(currentNum + increment); //don't use any Math methods, keep same time with the divided data-ceil

    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 100);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
