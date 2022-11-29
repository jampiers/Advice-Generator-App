const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice");
const btnAdvice = document.querySelector(".btnAdvice");
const url = "https://api.adviceslip.com/advice";


btnAdvice.addEventListener("click", () => {
    fetch(url)
        .then(response => response.json())
        .then(obj => {
            // console.log(obj.slip);
            const {id, advice} = obj.slip;
            adviceNumber.textContent = `#${id}`;
            adviceText.textContent = advice;
        })
        .catch(error => console.log(error));
})