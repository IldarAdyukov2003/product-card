const productCards = document.querySelectorAll(".card")
const changeColorAllCard = document.querySelector("#change-color-all-card")

changeColorAllCard.addEventListener("click", () => {
  productCards.forEach((card) => card.style.backgroundColor="green")
})


const firstCard = document.querySelector(".card")
const changeColorFirstCard = document.querySelector("#change-color-first-card")

changeColorFirstCard.addEventListener("click", () => {
  firstCard.style.backgroundColor = "red";
})


const openGoogleButton = document.querySelector("#open-google")
openGoogleButton.addEventListener("click", openGoogle)

function openGoogle() {
  const answer = confirm("Вы точно хотите открыть Google?")
  if (answer === true) {
    window.open("https://google.com")
  } else {
    return 
  }
}

const outputLogButton = document.querySelector("#output-console-log")
outputLogButton.addEventListener("click", () => outputConsoleLog("Homework №6"))

function outputConsoleLog (message) {
  alert(message)
  console.log(message)
}


const mainTitle = document.querySelector("#main-title") 
mainTitle.addEventListener("mouseover", function() {
  console.log(mainTitle.textContent);
})


const toggleButton = document.querySelector("#toggle-color-btn")

toggleButton.classList.add('btn-color-1');

toggleButton.addEventListener('click', function() {
  this.classList.toggle('btn-color-2');
})