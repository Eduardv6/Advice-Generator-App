const diceBtn = document.getElementById("diceBtn");
const advice = document.getElementById("advice");
const adviceId = document.getElementById("adviceId");

diceBtn.addEventListener("click", async () => {
  try {
    //Generar un id aleatorio
    const id = Math.floor(Math.random() * 100) + 1;
    //Llamar a la API
    const APi = await fetch(`https://api.adviceslip.com/advice/${id}`);
    const data = await APi.json();
    const adviceMsg = data.slip.advice;
    advice.innerText = adviceMsg;
    adviceId.innerText = id;
  } catch (error) {
    console.log(error);
  }
});
