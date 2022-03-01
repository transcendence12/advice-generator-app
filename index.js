
const btn = document.getElementById("button")
const adviceId = document.getElementById("advice-id")
const adviceTxt = document.getElementById("advice")

btn.addEventListener("click", getAdvice)

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            adviceId.textContent = `Advice #${data.slip.id}`
            adviceTxt.textContent = `"${data.slip.advice}"`
        })
        .catch(error => alert("Try later"))
}

getAdvice()
